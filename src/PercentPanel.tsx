import React, { PropsWithChildren } from 'react';
import { PanelProps, getValueFormat, formattedValueToString } from '@grafana/data';
import { PercentPanelOptions } from 'types';
import { css, cx } from 'emotion';
import { useStyles, useTheme2 } from '@grafana/ui';

interface Props extends PanelProps<PercentPanelOptions> {}

const BASE_FONT_SIZE = 38;

function SpanValue({
  className,
  fontSize,
  color,
  lineHeight,
  children,
}: PropsWithChildren<{ className: string; fontSize: string; color?: string; lineHeight?: string }>) {
  return (
    <span
      className={className}
      style={{ display: 'block', fontSize: fontSize, color: color, lineHeight: lineHeight, whiteSpace: 'nowrap' }}
    >
      {children}
    </span>
  );
}

interface TrendDisplay {
  percent: number;
  prefix: string;
  suffix: string;
  color?: string;
  percentFormatted: string;
  percentageValueFormatted: string;
}

function prepareTrendDisplay(
  options: PercentPanelOptions,
  baseValueSum: number,
  percentageValueSum: number
): TrendDisplay {
  const percentageValueFormat = getValueFormat(options.unit)(
    percentageValueSum,
    options.percentageValueDecimals,
    undefined,
    undefined
  );
  const percentageValueFormatted = formattedValueToString(percentageValueFormat);
  const suffix = options.interpretAsTrend ? (baseValueSum >= 0 ? ' \u25B2' : ' \u25BC') : '';
  const prefix = baseValueSum > 0 ? '+' : '';

  if (baseValueSum == 0.0) {
    return {
      percent: NaN,
      prefix: '',
      suffix: '',
      percentFormatted: 'N/A',
      percentageValueFormatted,
    };
  }

  const percent = options.interpretAsTrend
    ? ((percentageValueSum - baseValueSum) * 100) / baseValueSum
    : (percentageValueSum * 100) / baseValueSum;
  const percentFormatted =
    options.percentageNrDecimals !== -1 ? percent.toFixed(options.percentageNrDecimals) : percent.toString();

  const theme = useTheme2();

  const positiveTrendColor = (options.positiveIsGood === undefined ? true : options.positiveIsGood)
    ? theme.visualization.getColorByName('green')
    : theme.visualization.getColorByName('red');

  const negativeTrendColor = (options.positiveIsGood === undefined ? true : options.positiveIsGood)
    ? theme.visualization.getColorByName('red')
    : theme.visualization.getColorByName('green');

  return {
    percent,
    prefix,
    suffix,
    color: percent == 0 ? undefined : (percent >= 0 ? positiveTrendColor : negativeTrendColor),
    percentFormatted: percentFormatted + '%',
    percentageValueFormatted,
  };
}

export const PercentPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = useStyles(getPanelStyles);

  const percentageValueFontSize = options.percentageValueFontSize.includes('px')
    ? options.percentageValueFontSize
    : (parseInt(options.percentageValueFontSize, 10) / 100) * BASE_FONT_SIZE + 'px';

  // Get values for calculating percentage
  const percentageValueSerie = data.series.find((serie) =>
    serie.fields.find((field) => field.name === options.percentageValueField)
  );
  const baseValueSerie = data.series.find((serie) =>
    serie.fields.find((field) => field.name === options.baseValueField)
  );

  if (!percentageValueSerie || !baseValueSerie) {
    return <p>Selected series are not available</p>;
  }

  const percentageValueField = percentageValueSerie.fields.find((field) => field.name === options.percentageValueField);
  const baseValueField = baseValueSerie.fields.find((field) => field.name === options.baseValueField);

  if (!percentageValueField || !baseValueField) {
    return <p>Selected fields are not available</p>;
  }
  if (percentageValueField.values.length === 0 || baseValueField.values.length === 0) {
    return <p>Selected fields are empty</p>;
  }

  const percentageValueSum = percentageValueField.values.toArray().reduce((sum, current) => sum + current, 0);
  const baseValueSum = baseValueField.values.toArray().reduce((sum, current) => sum + current, 0);

  const display = prepareTrendDisplay(options, baseValueSum, percentageValueSum);

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <div className={styles.textBox}>
        <SpanValue className="percenttrend-panel-base" fontSize={percentageValueFontSize} lineHeight="1em">
          {display.percentageValueFormatted}
        </SpanValue>
        <SpanValue className="percenttrend-panel-percent" color={display.color} fontSize={options.baseValueFontSize}>
          {display.prefix}
          {display.percentFormatted}{display.suffix}
        </SpanValue>
        <SpanValue className="percenttrend-panel-ref" fontSize={options.referenceTextFontSize}>
          {options.referenceText}
        </SpanValue>
      </div>
    </div>
  );
};

function getPanelStyles() {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      padding: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
    `,
  };
}

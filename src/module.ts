import { PanelPlugin } from '@grafana/data';
import { PercentPanelOptions } from './types';
import { PercentPanel } from './PercentPanel';

// .useFieldConfig()
export const plugin = new PanelPlugin<PercentPanelOptions>(PercentPanel).setPanelOptions((builder) => {
  return builder
    .addFieldNamePicker({
      path: 'percentageValueField',
      name: 'Percentage Value Field',
      defaultValue: '',
    })
    .addFieldNamePicker({
      path: 'baseValueField',
      name: 'Base Value Field',
      defaultValue: '',
    })
    .addUnitPicker({
      path: 'unit',
      name: 'Unit',
      defaultValue: '',
    })
    .addNumberInput({
      path: 'percentageValueDecimals',
      name: 'Nr. of decimals for percentage value',
      description: 'For the percentage value number',
      defaultValue: undefined,
    })
    .addBooleanSwitch({
      path: 'interpretAsTrend',
      name: 'Use value difference as percentage',
      defaultValue: true,
    })
    .addBooleanSwitch({
      path: 'positiveIsGood',
      name: 'Colorize positive trend in green',
      defaultValue: true,
    })
    .addTextInput({
      path: 'referenceText',
      name: 'Description of which values are compared',
      defaultValue: '',
    })
    .addNumberInput({
      path: 'percentageNrDecimals',
      name: 'Nr. of decimals for percentage display',
      description: 'Displayed for the percentage (-1: auto)',
      defaultValue: 2,
    })
    .addTextInput({
      path: 'percentageValueFontSize',
      name: 'Font size for percentage value',
      description: 'Either in percentage or pixel',
      defaultValue: '80%',
    })
    .addTextInput({
      path: 'baseValueFontSize',
      name: 'Font size for percent/change display',
      description: 'Either in percentage or pixel',
      defaultValue: '16px',
    })
    .addTextInput({
      path: 'referenceTextFontSize',
      name: 'Font size for reference text',
      description: 'Either in percentage or pixel',
      defaultValue: '12px',
    });
});

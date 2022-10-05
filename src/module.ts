import { PanelPlugin } from '@grafana/data';
import { PercentPanelOptions } from './types';
import { PercentPanel } from './PercentPanel';

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
    .addBooleanSwitch({
      path: 'interpretAsTrend',
      name: 'Use value difference as percentage',
      defaultValue: true,
    })
    .addTextInput({
      path: 'referenceText',
      name: 'Description of which values are compared',
      defaultValue: '',
    })
    .addNumberInput({
      path: 'percentageNrDecimals',
      name: 'Nr. of decimals',
      description: 'Displayed for the percentage (-1: unlimited)',
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
      name: 'Font size for base value',
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

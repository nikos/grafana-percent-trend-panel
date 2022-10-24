export interface PercentPanelOptions {
  percentageValueField: string;
  baseValueField: string;
  unit: string;
  percentageValueDecimals?: number;
  interpretAsTrend: boolean;
  positiveIsGood?: boolean;
  percentageNrDecimals?: number;
  referenceText: string;
  percentageValueFontSize: string;
  /**
   * baseValueFontSize should really be called percentageFontSize
   */
  baseValueFontSize: string;
  referenceTextFontSize: string;
}

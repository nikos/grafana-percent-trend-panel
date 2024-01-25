# Changelog

## 1.0.8 (2024-01-23)

* Show percentage value if base value (ie. from previous time range) is not available.

## 1.0.7 (2022-11-06)

* Fixed prefix in case of negative percentage trend

## 1.0.6 (2022-10-25)

* Support locale unit for percentage value (thanks [@itsnull12](https://github.com/nikos/grafana-percent-trend-panel/issues/15))
* Allow to specify number of decimals displayed for percentage value 
* Improved display in case no previous ("base") value available instead of infinity
* Improved display of stagnation (= 0% difference to base value)

## 1.0.5 (2022-10-19)

* Allow to invert colorization of trend (thanks [@jammiemil](https://github.com/nikos/grafana-percent-trend-panel/issues/10))

## 1.0.4 (2022-10-07)

* Turned screenshot images from README from relative to absolute URLs
* Submission to Grafana Community 

## 1.0.3 (2022-10-05)

* Checked backward compatibility, set from 7.0.0 to 8.1.0
* Improved check for existence of referred data frames (kudos to Esteban)

## 1.0.2 (2022-10-04)

* Avoid usage of deprecated UI theme and style setup
* Fixed bug when using pixel to specify percentage value size

## 1.0.1 (2022-09-30)

* Added logo

## 1.0.0 (2022-09-29)

* Initial release

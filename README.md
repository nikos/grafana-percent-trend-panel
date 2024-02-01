# Grafana Percent Trend Stat Panel

[![Build](https://github.com/nikos/grafana-percent-trend-panel/workflows/CI/badge.svg)](https://github.com/nikos/grafana-percent-trend-panel/actions?query=workflow%3A%22CI%22)

A panel plugin for Grafana >= 8.1.0 which computes and displays percent with trend compared to a previous value in a 
stat style big value manner.

![Sample panel](https://raw.githubusercontent.com/nikos/grafana-percent-trend-panel/main/src/img/screenshots/panel-demo.png)

Configuration allows to display the percentage value compared to the base value plain or
interpret the percentage change as difference ("trend") with a colored (green/red) triangle symbol
to see the trend evolution easily.

The idea for this plugin panel was inspired by an article about [Embedded Analytics](https://www.revealbi.io/glossary/embedded-analytics).

This plugin is reviewed by Grafana engineers and released on GrafanaLabs, 
see Plugins -> Panel (Community): [Percentage Trend](https://grafana.com/grafana/plugins/nikosc-percenttrend-panel/)

## Install

Download the [latest release](https://github.com/nikos/grafana-percent-trend-panel/releases) (named 
`nikosc-percenttrend-panel-<version>.zip`) and unzip it in your grafana plugin folder.

## Usage

1. Query two metrics, remember field names, which have to be specified in the next step

2. Select the field names of the query results and use them to display your percentage trend

   ![Configure details in panel options](https://raw.githubusercontent.com/nikos/grafana-percent-trend-panel/main/src/img/screenshots/panel-options.png)

## More resources

- [Grafana documentation](https://grafana.com/docs/)
- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Grafana percent+ stat panel](https://github.com/JeanBaptisteWATENBERG/grafana-percent-plus)

window.BENCHMARK_DATA = {
  "lastUpdate": 1683847665325,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "e343aa8750d77ddf96bcc87ce83293354a841afc",
          "message": "chore(deps): update postgres docker tag to v13.11",
          "timestamp": "2023-05-11T19:21:09-04:00",
          "tree_id": "832338b8e27167e726a117f618fcbb4e37226c8a",
          "url": "https://github.com/ibis-project/ibis/commit/e343aa8750d77ddf96bcc87ce83293354a841afc"
        },
        "date": 1683847559717,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.69017368799533,
            "unit": "iter/sec",
            "range": "stddev: 0.001084671956371874",
            "extra": "mean: 9.931455705883085 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 23.59690345129719,
            "unit": "iter/sec",
            "range": "stddev: 0.0020104046942187566",
            "extra": "mean: 42.378441818179624 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1226.3973105378918,
            "unit": "iter/sec",
            "range": "stddev: 0.003933764097518499",
            "extra": "mean: 815.3964391534787 usec\nrounds: 378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4397102.729829838,
            "unit": "iter/sec",
            "range": "stddev: 2.1481646428242521e-7",
            "extra": "mean: 227.42247826415755 nsec\nrounds: 44248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 80.7009933614378,
            "unit": "iter/sec",
            "range": "stddev: 0.0006195459792915756",
            "extra": "mean: 12.391421200000252 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 588.3326956323987,
            "unit": "iter/sec",
            "range": "stddev: 0.0002096296393297058",
            "extra": "mean: 1.699718556224553 msec\nrounds: 498"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1394.941676021213,
            "unit": "iter/sec",
            "range": "stddev: 0.00010539686624409203",
            "extra": "mean: 716.8758502164021 usec\nrounds: 1155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.57174478155673,
            "unit": "iter/sec",
            "range": "stddev: 0.0010059462223778847",
            "extra": "mean: 12.891291833334625 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3568605.916676894,
            "unit": "iter/sec",
            "range": "stddev: 2.1504555696606814e-7",
            "extra": "mean: 280.2214711707419 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 156.34472035807508,
            "unit": "iter/sec",
            "range": "stddev: 0.0003634537225102847",
            "extra": "mean: 6.396122604650212 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 79.54645842859547,
            "unit": "iter/sec",
            "range": "stddev: 0.0009926594646378945",
            "extra": "mean: 12.571269918919716 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 136.33208181833032,
            "unit": "iter/sec",
            "range": "stddev: 0.003833199422370335",
            "extra": "mean: 7.335030659419934 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.321720764772728,
            "unit": "iter/sec",
            "range": "stddev: 0.0008398630444346397",
            "extra": "mean: 65.26682057143164 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3428.935840795732,
            "unit": "iter/sec",
            "range": "stddev: 0.000060974668254870144",
            "extra": "mean: 291.6356696157768 usec\nrounds: 678"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1448628.6962877691,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025041098446017174",
            "extra": "mean: 690.3080151336106 nsec\nrounds: 39063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.068898787288834,
            "unit": "iter/sec",
            "range": "stddev: 0.002423957837422614",
            "extra": "mean: 49.82834437499761 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1719.967799836899,
            "unit": "iter/sec",
            "range": "stddev: 0.00013471038728741125",
            "extra": "mean: 581.4062333578732 usec\nrounds: 1367"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 213.7687961193311,
            "unit": "iter/sec",
            "range": "stddev: 0.000494361946418796",
            "extra": "mean: 4.6779512171728515 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 831306.534049297,
            "unit": "iter/sec",
            "range": "stddev: 0.000015986208664421864",
            "extra": "mean: 1.202925706753436 usec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.9624569987768,
            "unit": "iter/sec",
            "range": "stddev: 0.00048497071557446084",
            "extra": "mean: 10.757030658227526 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10666.905145029601,
            "unit": "iter/sec",
            "range": "stddev: 0.000029307705109922763",
            "extra": "mean: 93.74790404562324 usec\nrounds: 4919"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10090863032889384,
            "unit": "iter/sec",
            "range": "stddev: 0.15910706431116545",
            "extra": "mean: 9.909955142000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 63.854901852815814,
            "unit": "iter/sec",
            "range": "stddev: 0.0010060950107785127",
            "extra": "mean: 15.660504847458363 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 879.4432498860691,
            "unit": "iter/sec",
            "range": "stddev: 0.00020308018164720548",
            "extra": "mean: 1.1370830353516828 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 133.98053624226242,
            "unit": "iter/sec",
            "range": "stddev: 0.0006498672203520451",
            "extra": "mean: 7.463770694213441 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 205.21958096067476,
            "unit": "iter/sec",
            "range": "stddev: 0.00048092012059676784",
            "extra": "mean: 4.872829363157238 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 77.7644953745929,
            "unit": "iter/sec",
            "range": "stddev: 0.0012975915642706455",
            "extra": "mean: 12.85933889473574 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9462648421767863,
            "unit": "iter/sec",
            "range": "stddev: 0.008199348328872088",
            "extra": "mean: 513.8046879999933 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.14530744267301,
            "unit": "iter/sec",
            "range": "stddev: 0.0017399522177095343",
            "extra": "mean: 24.304108102565074 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5551414715225913,
            "unit": "iter/sec",
            "range": "stddev: 0.07311588343253814",
            "extra": "mean: 1.8013426330000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1666.2127667474674,
            "unit": "iter/sec",
            "range": "stddev: 0.00015167809482262597",
            "extra": "mean: 600.1634484844641 usec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 74.98406123796437,
            "unit": "iter/sec",
            "range": "stddev: 0.0011756798895585076",
            "extra": "mean: 13.33616749333525 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 511.41932073503455,
            "unit": "iter/sec",
            "range": "stddev: 0.00018551035778028766",
            "extra": "mean: 1.95534263070616 msec\nrounds: 482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 309.4886299109943,
            "unit": "iter/sec",
            "range": "stddev: 0.0001836599956878368",
            "extra": "mean: 3.2311364727278984 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 138.3618410872852,
            "unit": "iter/sec",
            "range": "stddev: 0.0003431738870027042",
            "extra": "mean: 7.227426233575142 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 70.5791639039916,
            "unit": "iter/sec",
            "range": "stddev: 0.0015898311694489244",
            "extra": "mean: 14.168487478263327 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7657.330553487095,
            "unit": "iter/sec",
            "range": "stddev: 0.000026140809680007357",
            "extra": "mean: 130.59381373377005 usec\nrounds: 4660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.9937341285020774,
            "unit": "iter/sec",
            "range": "stddev: 0.013876193805363092",
            "extra": "mean: 1.0063053802000013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.23162833757051,
            "unit": "iter/sec",
            "range": "stddev: 0.0013479415912092264",
            "extra": "mean: 18.78582397777614 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 76.81816879799982,
            "unit": "iter/sec",
            "range": "stddev: 0.001060307036058571",
            "extra": "mean: 13.017753685714492 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8985139.736315405,
            "unit": "iter/sec",
            "range": "stddev: 5.965522547492252e-8",
            "extra": "mean: 111.29487457582451 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 57.512160312601644,
            "unit": "iter/sec",
            "range": "stddev: 0.031594627061991704",
            "extra": "mean: 17.387627148147438 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1580.4153498520807,
            "unit": "iter/sec",
            "range": "stddev: 0.00021157546944556863",
            "extra": "mean: 632.7450566040094 usec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 201.04045862124661,
            "unit": "iter/sec",
            "range": "stddev: 0.0005370780109750351",
            "extra": "mean: 4.974123153409463 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 183.7419680251925,
            "unit": "iter/sec",
            "range": "stddev: 0.004722569222202164",
            "extra": "mean: 5.442414766466918 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5189045093816222,
            "unit": "iter/sec",
            "range": "stddev: 0.026875542222390907",
            "extra": "mean: 1.9271368467999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 83.17609058027304,
            "unit": "iter/sec",
            "range": "stddev: 0.0010977424129764532",
            "extra": "mean: 12.022685762501695 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6325.626111753903,
            "unit": "iter/sec",
            "range": "stddev: 0.00005662774175697049",
            "extra": "mean: 158.0871177545349 usec\nrounds: 3295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 199.8406320655552,
            "unit": "iter/sec",
            "range": "stddev: 0.0005784125348622779",
            "extra": "mean: 5.003987375660233 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1658785.5635262956,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027898162278862307",
            "extra": "mean: 602.8506770182942 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.833612513047434,
            "unit": "iter/sec",
            "range": "stddev: 0.0016660811744933942",
            "extra": "mean: 30.456593821426736 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1635.274694874225,
            "unit": "iter/sec",
            "range": "stddev: 0.00021110217763301253",
            "extra": "mean: 611.5180545106606 usec\nrounds: 1064"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 263.7327798599623,
            "unit": "iter/sec",
            "range": "stddev: 0.0003982517596833699",
            "extra": "mean: 3.791716754098536 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4530338.43536783,
            "unit": "iter/sec",
            "range": "stddev: 2.12366752844518e-7",
            "extra": "mean: 220.7340608801636 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5633269.3831810495,
            "unit": "iter/sec",
            "range": "stddev: 7.751139549824242e-8",
            "extra": "mean: 177.51680808760477 nsec\nrounds: 55249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4756907.557801661,
            "unit": "iter/sec",
            "range": "stddev: 3.335118336747207e-7",
            "extra": "mean: 210.22060821012252 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1628355.050098569,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012575077044693636",
            "extra": "mean: 614.1166817024746 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.61743494843194,
            "unit": "iter/sec",
            "range": "stddev: 0.001610798536281593",
            "extra": "mean: 12.88370326414919 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9140.423554275443,
            "unit": "iter/sec",
            "range": "stddev: 0.00004380317450521646",
            "extra": "mean: 109.4041205051432 usec\nrounds: 5145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 76.95261696477465,
            "unit": "iter/sec",
            "range": "stddev: 0.001194848764699797",
            "extra": "mean: 12.995009649350246 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 22.590842102642178,
            "unit": "iter/sec",
            "range": "stddev: 0.05096279592254382",
            "extra": "mean: 44.26572482143293 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.64185281564807,
            "unit": "iter/sec",
            "range": "stddev: 0.0008743592059381734",
            "extra": "mean: 22.913784257148755 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1640.9133841767198,
            "unit": "iter/sec",
            "range": "stddev: 0.00014420663055804506",
            "extra": "mean: 609.4166880732225 usec\nrounds: 981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 406.1421605964121,
            "unit": "iter/sec",
            "range": "stddev: 0.00045831534273065017",
            "extra": "mean: 2.462192052486053 msec\nrounds: 362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1613.8439063480814,
            "unit": "iter/sec",
            "range": "stddev: 0.00012883696654371335",
            "extra": "mean: 619.638613168525 usec\nrounds: 1215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 80.70910290408642,
            "unit": "iter/sec",
            "range": "stddev: 0.0010585429851580853",
            "extra": "mean: 12.390176126581238 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1634.1432244446878,
            "unit": "iter/sec",
            "range": "stddev: 0.00016221616542244562",
            "extra": "mean: 611.9414657425873 usec\nrounds: 1226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 180.92607982434035,
            "unit": "iter/sec",
            "range": "stddev: 0.0007045420717563329",
            "extra": "mean: 5.5271191470621135 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 65.06472671948046,
            "unit": "iter/sec",
            "range": "stddev: 0.02511122265818169",
            "extra": "mean: 15.369310691358036 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 75.52828847453385,
            "unit": "iter/sec",
            "range": "stddev: 0.0013172793463013528",
            "extra": "mean: 13.24007229870135 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 73.32109675270911,
            "unit": "iter/sec",
            "range": "stddev: 0.0016484151542652543",
            "extra": "mean: 13.638639413328898 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 86.83715358130002,
            "unit": "iter/sec",
            "range": "stddev: 0.0006501122999785023",
            "extra": "mean: 11.515808139240361 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 206.26918660103726,
            "unit": "iter/sec",
            "range": "stddev: 0.0006299087488861656",
            "extra": "mean: 4.84803385555684 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120692.30655371473,
            "unit": "iter/sec",
            "range": "stddev: 0.000009778033679820475",
            "extra": "mean: 8.285532264270255 usec\nrounds: 38913"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.954735300032671,
            "unit": "iter/sec",
            "range": "stddev: 0.003733902792549498",
            "extra": "mean: 143.78692457142148 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5598162620149554,
            "unit": "iter/sec",
            "range": "stddev: 0.016539078369075512",
            "extra": "mean: 1.7863003771999844 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 78.49229816292119,
            "unit": "iter/sec",
            "range": "stddev: 0.0014779276370213137",
            "extra": "mean: 12.740103467532155 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2058992.3328358976,
            "unit": "iter/sec",
            "range": "stddev: 5.081356587929834e-7",
            "extra": "mean: 485.67446515096304 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 204.53518016108035,
            "unit": "iter/sec",
            "range": "stddev: 0.0004308577588141045",
            "extra": "mean: 4.889134471695562 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 59.40469796112528,
            "unit": "iter/sec",
            "range": "stddev: 0.02988465426950945",
            "extra": "mean: 16.8336854545478 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 75.0367115590269,
            "unit": "iter/sec",
            "range": "stddev: 0.0013049792039219632",
            "extra": "mean: 13.326810027027365 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 127.2827556908166,
            "unit": "iter/sec",
            "range": "stddev: 0.000622592967353938",
            "extra": "mean: 7.856523804600104 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.0646758062659711,
            "unit": "iter/sec",
            "range": "stddev: 0.01575763921282636",
            "extra": "mean: 939.2530515999965 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 130.7521903955342,
            "unit": "iter/sec",
            "range": "stddev: 0.0003150833685673881",
            "extra": "mean: 7.648055431996454 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.01301006411742,
            "unit": "iter/sec",
            "range": "stddev: 0.0012283230789559652",
            "extra": "mean: 30.291088212126482 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.483309250973978,
            "unit": "iter/sec",
            "range": "stddev: 0.03503864034054262",
            "extra": "mean: 33.91749519999913 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 80.7266605831829,
            "unit": "iter/sec",
            "range": "stddev: 0.0011350402704258424",
            "extra": "mean: 12.387481319998036 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 168.500094516686,
            "unit": "iter/sec",
            "range": "stddev: 0.0005458798332165536",
            "extra": "mean: 5.93471477193132 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 88.61017726643792,
            "unit": "iter/sec",
            "range": "stddev: 0.0007442339368178677",
            "extra": "mean: 11.285385390812902 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 195.68236520859307,
            "unit": "iter/sec",
            "range": "stddev: 0.0006301652126536957",
            "extra": "mean: 5.1103225317928995 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1683.2049284722252,
            "unit": "iter/sec",
            "range": "stddev: 0.0001897523311675766",
            "extra": "mean: 594.10472431759 usec\nrounds: 1723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.04609177903319,
            "unit": "iter/sec",
            "range": "stddev: 0.000568517099157206",
            "extra": "mean: 12.49280230645732 msec\nrounds: 62"
          }
        ]
      }
    ]
  }
}
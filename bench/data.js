window.BENCHMARK_DATA = {
  "lastUpdate": 1678894040523,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "b6b67f963315294a561fcd0060024adc63d2ac30",
          "message": "fix(snowflake): ensure that quoting matches snowflake behavior, not sqlalchemy",
          "timestamp": "2023-03-15T11:22:02-04:00",
          "tree_id": "362d7eeca4c977e39d180d76984a4a2bff26e3b5",
          "url": "https://github.com/ibis-project/ibis/commit/b6b67f963315294a561fcd0060024adc63d2ac30"
        },
        "date": 1678893952960,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7845328472147814,
            "unit": "iter/sec",
            "range": "stddev: 0.002351586147611813",
            "extra": "mean: 560.3707444000008 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 731679.8949357887,
            "unit": "iter/sec",
            "range": "stddev: 4.949464714416135e-7",
            "extra": "mean: 1.3667178870450702 usec\nrounds: 17890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.18639105103934,
            "unit": "iter/sec",
            "range": "stddev: 0.0005738321788324136",
            "extra": "mean: 8.320409584270918 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 314.55362613211906,
            "unit": "iter/sec",
            "range": "stddev: 0.00024267307354631785",
            "extra": "mean: 3.179108161290053 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8613350913867084,
            "unit": "iter/sec",
            "range": "stddev: 0.0015831295528426388",
            "extra": "mean: 1.1609883423999918 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1843984.4093440212,
            "unit": "iter/sec",
            "range": "stddev: 9.804147451655146e-8",
            "extra": "mean: 542.3039343134901 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 170.30975773838,
            "unit": "iter/sec",
            "range": "stddev: 0.0037680566602878484",
            "extra": "mean: 5.871654174601916 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1189.204757250782,
            "unit": "iter/sec",
            "range": "stddev: 0.00005974730698959103",
            "extra": "mean: 840.8980824394044 usec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.515042056607756,
            "unit": "iter/sec",
            "range": "stddev: 0.002835110379023921",
            "extra": "mean: 181.32227999999864 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11686977.259607155,
            "unit": "iter/sec",
            "range": "stddev: 4.368417080052354e-9",
            "extra": "mean: 85.56532435944459 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.64922561998931,
            "unit": "iter/sec",
            "range": "stddev: 0.00009677880480729328",
            "extra": "mean: 10.346694384617777 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.5679076421219,
            "unit": "iter/sec",
            "range": "stddev: 0.00007272409135532373",
            "extra": "mean: 6.554458374992578 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18088981077748922,
            "unit": "iter/sec",
            "range": "stddev: 0.05263115784766377",
            "extra": "mean: 5.528227354 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.81426687592686,
            "unit": "iter/sec",
            "range": "stddev: 0.00009268958113045161",
            "extra": "mean: 13.36643452856947 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.80179696716458,
            "unit": "iter/sec",
            "range": "stddev: 0.0006723823223146659",
            "extra": "mean: 9.451635309278807 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.574372984196997,
            "unit": "iter/sec",
            "range": "stddev: 0.0025958464383076486",
            "extra": "mean: 388.44410120001385 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5674.4050945809495,
            "unit": "iter/sec",
            "range": "stddev: 0.00006397215845209718",
            "extra": "mean: 176.2299277778033 usec\nrounds: 360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1694369.489732533,
            "unit": "iter/sec",
            "range": "stddev: 8.876853976280398e-8",
            "extra": "mean: 590.1900418177717 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.11944715196655,
            "unit": "iter/sec",
            "range": "stddev: 0.010496911987972691",
            "extra": "mean: 12.030878864866711 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.034713694858844,
            "unit": "iter/sec",
            "range": "stddev: 0.0005736960418504679",
            "extra": "mean: 28.543118939394805 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 497286.17245436826,
            "unit": "iter/sec",
            "range": "stddev: 3.4596401031086834e-7",
            "extra": "mean: 2.0109145505986525 usec\nrounds: 2048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.97973636696557,
            "unit": "iter/sec",
            "range": "stddev: 0.00010581869753518",
            "extra": "mean: 9.010653951216826 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.86505852259995,
            "unit": "iter/sec",
            "range": "stddev: 0.0006238042730495238",
            "extra": "mean: 8.27368978448817 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.557188781217214,
            "unit": "iter/sec",
            "range": "stddev: 0.0007894747861402458",
            "extra": "mean: 27.35440096295894 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5166.223232506423,
            "unit": "iter/sec",
            "range": "stddev: 0.0001401842934218868",
            "extra": "mean: 193.5649999999795 usec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5515.454305648519,
            "unit": "iter/sec",
            "range": "stddev: 0.00004602580408015026",
            "extra": "mean: 181.30872718424558 usec\nrounds: 2049"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 302.20801820374976,
            "unit": "iter/sec",
            "range": "stddev: 0.0005322252013406607",
            "extra": "mean: 3.308979046763069 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.65414248936181,
            "unit": "iter/sec",
            "range": "stddev: 0.0003132895751060775",
            "extra": "mean: 18.296874755552984 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.74184754497595,
            "unit": "iter/sec",
            "range": "stddev: 0.00024537346707439474",
            "extra": "mean: 8.56590863541662 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7131492.396380254,
            "unit": "iter/sec",
            "range": "stddev: 5.78090911419924e-9",
            "extra": "mean: 140.22310400382744 nsec\nrounds: 56498"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.0930168885488,
            "unit": "iter/sec",
            "range": "stddev: 0.0007318547601851691",
            "extra": "mean: 14.473242666665723 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9195324156774479,
            "unit": "iter/sec",
            "range": "stddev: 0.004062810259670534",
            "extra": "mean: 1.087509241600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.477478869067,
            "unit": "iter/sec",
            "range": "stddev: 0.00003127604958544546",
            "extra": "mean: 1.846798877191727 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5352.604775038304,
            "unit": "iter/sec",
            "range": "stddev: 0.000021310538375641598",
            "extra": "mean: 186.82492768071856 usec\nrounds: 2406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.910006215586,
            "unit": "iter/sec",
            "range": "stddev: 0.0002646265719312469",
            "extra": "mean: 3.5472313076935147 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.61696003678463,
            "unit": "iter/sec",
            "range": "stddev: 0.000388363504095079",
            "extra": "mean: 7.484079863250151 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.1893591366048,
            "unit": "iter/sec",
            "range": "stddev: 0.0006614388682227091",
            "extra": "mean: 8.320204111109538 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.31581472944845,
            "unit": "iter/sec",
            "range": "stddev: 0.0002563671772072789",
            "extra": "mean: 3.2225234826393194 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6451340.570747928,
            "unit": "iter/sec",
            "range": "stddev: 1.1027033357759409e-8",
            "extra": "mean: 155.0065430642499 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.55269210454694,
            "unit": "iter/sec",
            "range": "stddev: 0.0005481092102067153",
            "extra": "mean: 8.806484297873881 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5816.591032499284,
            "unit": "iter/sec",
            "range": "stddev: 0.000050786745783814476",
            "extra": "mean: 171.9220062769856 usec\nrounds: 3186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.29624314034066,
            "unit": "iter/sec",
            "range": "stddev: 0.00021656886912696638",
            "extra": "mean: 3.3411712405995617 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 279.0223817310331,
            "unit": "iter/sec",
            "range": "stddev: 0.006512289929049512",
            "extra": "mean: 3.5839418823539457 msec\nrounds: 306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.7047563738184,
            "unit": "iter/sec",
            "range": "stddev: 0.00012269043806054333",
            "extra": "mean: 3.4517900655716445 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11595.99650759832,
            "unit": "iter/sec",
            "range": "stddev: 0.000013477643512743057",
            "extra": "mean: 86.23665929398533 usec\nrounds: 4250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1749.5318527137772,
            "unit": "iter/sec",
            "range": "stddev: 0.00000807632143969152",
            "extra": "mean: 571.581476752684 usec\nrounds: 1269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1874304.4046615132,
            "unit": "iter/sec",
            "range": "stddev: 1.2035128358335748e-7",
            "extra": "mean: 533.5312649924617 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.61139018214872,
            "unit": "iter/sec",
            "range": "stddev: 0.0006863195553457823",
            "extra": "mean: 25.245263935489454 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5400.04535013941,
            "unit": "iter/sec",
            "range": "stddev: 0.00006958714334994705",
            "extra": "mean: 185.18362998084515 usec\nrounds: 2108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11894.700839098585,
            "unit": "iter/sec",
            "range": "stddev: 0.000005434755730556995",
            "extra": "mean: 84.07105092655554 usec\nrounds: 1728"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.6027185869114,
            "unit": "iter/sec",
            "range": "stddev: 0.0028888463364736407",
            "extra": "mean: 17.360291745452823 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5824.010198707631,
            "unit": "iter/sec",
            "range": "stddev: 0.00004413137859508421",
            "extra": "mean: 171.70299602529946 usec\nrounds: 2264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.96991429769574,
            "unit": "iter/sec",
            "range": "stddev: 0.00005442639983245644",
            "extra": "mean: 6.290498453231504 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.916896544229032,
            "unit": "iter/sec",
            "range": "stddev: 0.0030256092092845305",
            "extra": "mean: 1.0906355862000168 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.479722663420297,
            "unit": "iter/sec",
            "range": "stddev: 0.0004097220783549126",
            "extra": "mean: 39.246894999985216 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.14952434415483,
            "unit": "iter/sec",
            "range": "stddev: 0.0006037994996084877",
            "extra": "mean: 8.684360666668804 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13278.995252973902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028447634368415363",
            "extra": "mean: 75.30690243872515 usec\nrounds: 6601"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71065.92698029321,
            "unit": "iter/sec",
            "range": "stddev: 4.4033369418265003e-7",
            "extra": "mean: 14.071441019509995 usec\nrounds: 13106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.27593878337973,
            "unit": "iter/sec",
            "range": "stddev: 0.0006465687172455545",
            "extra": "mean: 9.972482054346475 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.30118986990969,
            "unit": "iter/sec",
            "range": "stddev: 0.0002570399064599849",
            "extra": "mean: 10.493048422218484 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 92.57386980747553,
            "unit": "iter/sec",
            "range": "stddev: 0.014088047793779876",
            "extra": "mean: 10.802184267328187 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.61925171378905,
            "unit": "iter/sec",
            "range": "stddev: 0.0006760901417324595",
            "extra": "mean: 8.35985834782417 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 102.9419126136833,
            "unit": "iter/sec",
            "range": "stddev: 0.0001712648568600455",
            "extra": "mean: 9.714216246911635 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5631.930744265629,
            "unit": "iter/sec",
            "range": "stddev: 0.00004499757765974261",
            "extra": "mean: 177.55900159429146 usec\nrounds: 2509"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.81110348739253,
            "unit": "iter/sec",
            "range": "stddev: 0.00006844721510608457",
            "extra": "mean: 6.142087232259538 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.557148166741882,
            "unit": "iter/sec",
            "range": "stddev: 0.00011146764929423668",
            "extra": "mean: 64.27913325000034 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.98218306973763,
            "unit": "iter/sec",
            "range": "stddev: 0.0006754495106562218",
            "extra": "mean: 10.00178201052581 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.51569427877546,
            "unit": "iter/sec",
            "range": "stddev: 0.0006819946832181366",
            "extra": "mean: 9.660370893199303 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.664034501721903,
            "unit": "iter/sec",
            "range": "stddev: 0.0721776603016884",
            "extra": "mean: 1.5059458467999889 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 239.57845424959265,
            "unit": "iter/sec",
            "range": "stddev: 0.004114099976622417",
            "extra": "mean: 4.173998046411138 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.95107101391724,
            "unit": "iter/sec",
            "range": "stddev: 0.00004886577308823495",
            "extra": "mean: 5.209660955356148 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.2011358528121,
            "unit": "iter/sec",
            "range": "stddev: 0.00003762989779447566",
            "extra": "mean: 1.465843352415283 msec\nrounds: 559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 753.8201952108144,
            "unit": "iter/sec",
            "range": "stddev: 0.000014838872983381638",
            "extra": "mean: 1.326576292799291 msec\nrounds: 625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.87033561944946,
            "unit": "iter/sec",
            "range": "stddev: 0.00018543749763979582",
            "extra": "mean: 3.3347746716402464 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5831803.730192254,
            "unit": "iter/sec",
            "range": "stddev: 1.014236796122266e-8",
            "extra": "mean: 171.47353482163754 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.01707631216834,
            "unit": "iter/sec",
            "range": "stddev: 0.01654545925718337",
            "extra": "mean: 11.625598577320346 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2513555.5803533727,
            "unit": "iter/sec",
            "range": "stddev: 2.2490417017919672e-8",
            "extra": "mean: 397.84280396111654 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.351511822341315,
            "unit": "iter/sec",
            "range": "stddev: 0.00016201466890182318",
            "extra": "mean: 21.118649891304667 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.44600445348638,
            "unit": "iter/sec",
            "range": "stddev: 0.000647613704353888",
            "extra": "mean: 9.483526712869555 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8064.732400722296,
            "unit": "iter/sec",
            "range": "stddev: 0.00002052611497825577",
            "extra": "mean: 123.99667469567093 usec\nrounds: 4276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 358.1506547118812,
            "unit": "iter/sec",
            "range": "stddev: 0.00003924592552196627",
            "extra": "mean: 2.7921211000003967 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139870.08032443793,
            "unit": "iter/sec",
            "range": "stddev: 4.7530356984042016e-7",
            "extra": "mean: 7.149491854730001 usec\nrounds: 38611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5321.133729033909,
            "unit": "iter/sec",
            "range": "stddev: 0.000047528084279853105",
            "extra": "mean: 187.92987564730072 usec\nrounds: 2316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.57997644447441,
            "unit": "iter/sec",
            "range": "stddev: 0.0006856402503712061",
            "extra": "mean: 8.43312699145504 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.528045529793,
            "unit": "iter/sec",
            "range": "stddev: 0.0002308073695189659",
            "extra": "mean: 3.273021952096004 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.14650439561511,
            "unit": "iter/sec",
            "range": "stddev: 0.0007410991179731779",
            "extra": "mean: 8.39302844067998 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 321.4365216546871,
            "unit": "iter/sec",
            "range": "stddev: 0.00010509552227124438",
            "extra": "mean: 3.111034162677632 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.391617161789082,
            "unit": "iter/sec",
            "range": "stddev: 0.00026597771078319183",
            "extra": "mean: 96.23141272727894 msec\nrounds: 11"
          }
        ]
      }
    ]
  }
}
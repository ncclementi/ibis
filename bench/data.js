window.BENCHMARK_DATA = {
  "lastUpdate": 1678361078202,
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
          "id": "2578334320ab814f62a0986cb803ff498bd92f86",
          "message": "chore(deps): update trinodb/trino docker tag to v410",
          "timestamp": "2023-03-09T06:19:04-05:00",
          "tree_id": "6c1d6b9bb190f2f6038505067031a7545347254f",
          "url": "https://github.com/ibis-project/ibis/commit/2578334320ab814f62a0986cb803ff498bd92f86"
        },
        "date": 1678361001667,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.85753685000039,
            "unit": "iter/sec",
            "range": "stddev: 0.0006915764095974987",
            "extra": "mean: 22.801098096779942 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2397.8570411565765,
            "unit": "iter/sec",
            "range": "stddev: 0.004253425872464297",
            "extra": "mean: 417.03904062506683 usec\nrounds: 320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 336.0288078455862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000926121753734811",
            "extra": "mean: 2.9759353265316633 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 298.5408090862696,
            "unit": "iter/sec",
            "range": "stddev: 0.00003678213692616881",
            "extra": "mean: 3.349625811830064 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.74020388772587,
            "unit": "iter/sec",
            "range": "stddev: 0.00017735749082081826",
            "extra": "mean: 9.030144111111186 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6942132.957134691,
            "unit": "iter/sec",
            "range": "stddev: 5.057244553870527e-9",
            "extra": "mean: 144.04794696019644 nsec\nrounds: 68966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.25909067217835,
            "unit": "iter/sec",
            "range": "stddev: 0.00019713774328956437",
            "extra": "mean: 16.061911428572614 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1959432.2271966208,
            "unit": "iter/sec",
            "range": "stddev: 1.3869568103952255e-7",
            "extra": "mean: 510.3519203778279 nsec\nrounds: 94331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.78433555176896,
            "unit": "iter/sec",
            "range": "stddev: 0.0006420667747276062",
            "extra": "mean: 9.45319545454457 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.3423086288563,
            "unit": "iter/sec",
            "range": "stddev: 0.0007046169695619566",
            "extra": "mean: 8.379258047620889 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.37857539097603,
            "unit": "iter/sec",
            "range": "stddev: 0.0010263416349498206",
            "extra": "mean: 27.48870700000136 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.79505814130584,
            "unit": "iter/sec",
            "range": "stddev: 0.00013762320988317713",
            "extra": "mean: 6.142692606381218 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.8222827102853,
            "unit": "iter/sec",
            "range": "stddev: 0.0002404710002518172",
            "extra": "mean: 3.302266897435402 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12178.351442920182,
            "unit": "iter/sec",
            "range": "stddev: 0.000013603609001292856",
            "extra": "mean: 82.11292018357251 usec\nrounds: 5663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 100.05493516216221,
            "unit": "iter/sec",
            "range": "stddev: 0.012632006405907796",
            "extra": "mean: 9.994509499998859 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.90992760517712,
            "unit": "iter/sec",
            "range": "stddev: 0.0007585878248723155",
            "extra": "mean: 8.339593059322512 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8058590062861397,
            "unit": "iter/sec",
            "range": "stddev: 0.01599064752932235",
            "extra": "mean: 1.240911861999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1966678.3214112907,
            "unit": "iter/sec",
            "range": "stddev: 1.233650999469215e-7",
            "extra": "mean: 508.4715629968397 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.90253294380763,
            "unit": "iter/sec",
            "range": "stddev: 0.026536838479347458",
            "extra": "mean: 32.359806939397956 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6769393151850714,
            "unit": "iter/sec",
            "range": "stddev: 0.06380675530793739",
            "extra": "mean: 1.4772372907999967 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 308.43440794494535,
            "unit": "iter/sec",
            "range": "stddev: 0.00024163765204422529",
            "extra": "mean: 3.242180425533124 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.62381012422458,
            "unit": "iter/sec",
            "range": "stddev: 0.0006718588229289352",
            "extra": "mean: 8.430010795916818 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2651365.665668272,
            "unit": "iter/sec",
            "range": "stddev: 2.127298725197704e-8",
            "extra": "mean: 377.1641207203448 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 222.43651983659353,
            "unit": "iter/sec",
            "range": "stddev: 0.0036216747762952634",
            "extra": "mean: 4.495664654053304 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16822356111173536,
            "unit": "iter/sec",
            "range": "stddev: 0.07303191496252172",
            "extra": "mean: 5.944470521200015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.78922401088306,
            "unit": "iter/sec",
            "range": "stddev: 0.000029735556619227742",
            "extra": "mean: 5.0304537631539485 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5211.663682090241,
            "unit": "iter/sec",
            "range": "stddev: 0.000049757672900760426",
            "extra": "mean: 191.87730847569392 usec\nrounds: 2159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.14089856359016,
            "unit": "iter/sec",
            "range": "stddev: 0.0006817702111577505",
            "extra": "mean: 8.32356018604858 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12743.141395780038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036179899829052413",
            "extra": "mean: 78.47358582485442 usec\nrounds: 5418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.190800195144472,
            "unit": "iter/sec",
            "range": "stddev: 0.00066677378777434",
            "extra": "mean: 41.33802899999637 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.44207981707797,
            "unit": "iter/sec",
            "range": "stddev: 0.0008324710482060895",
            "extra": "mean: 26.707918066663677 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.23876875339153,
            "unit": "iter/sec",
            "range": "stddev: 0.0007523824824635592",
            "extra": "mean: 9.412759689650267 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 65414.05030298104,
            "unit": "iter/sec",
            "range": "stddev: 5.081586155107627e-7",
            "extra": "mean: 15.287235622442847 usec\nrounds: 13441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.01200657476912,
            "unit": "iter/sec",
            "range": "stddev: 0.0007999367547448696",
            "extra": "mean: 9.89981323913014 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5519.1285084491365,
            "unit": "iter/sec",
            "range": "stddev: 0.00004596991311318266",
            "extra": "mean: 181.18802605685258 usec\nrounds: 2341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.96413936636613,
            "unit": "iter/sec",
            "range": "stddev: 0.0007211929976267689",
            "extra": "mean: 9.71211925000226 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.88363261501347,
            "unit": "iter/sec",
            "range": "stddev: 0.0006620770266848534",
            "extra": "mean: 16.982647903842665 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.95738143249385,
            "unit": "iter/sec",
            "range": "stddev: 0.0007234766197206879",
            "extra": "mean: 9.349518346530855 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.607684417279371,
            "unit": "iter/sec",
            "range": "stddev: 0.0004727406607923804",
            "extra": "mean: 64.07100331250248 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 309.9296320911672,
            "unit": "iter/sec",
            "range": "stddev: 0.00022290818310266878",
            "extra": "mean: 3.226538854167534 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.57641661083153,
            "unit": "iter/sec",
            "range": "stddev: 0.0006763067003351676",
            "extra": "mean: 8.29349576068069 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 280.3602346944294,
            "unit": "iter/sec",
            "range": "stddev: 0.000334472391584961",
            "extra": "mean: 3.5668396450371125 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.66363203939139,
            "unit": "iter/sec",
            "range": "stddev: 0.0005586620398791801",
            "extra": "mean: 18.634594081629764 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.535167447244854,
            "unit": "iter/sec",
            "range": "stddev: 0.00021853636006822065",
            "extra": "mean: 94.92018090908645 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5581897.036752305,
            "unit": "iter/sec",
            "range": "stddev: 1.177892760258775e-8",
            "extra": "mean: 179.15056358372559 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5151.987363833988,
            "unit": "iter/sec",
            "range": "stddev: 0.00008787773730731364",
            "extra": "mean: 194.09985494526202 usec\nrounds: 2275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.99565029618195,
            "unit": "iter/sec",
            "range": "stddev: 0.00011082539033393023",
            "extra": "mean: 14.926342166679282 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.27671302291476,
            "unit": "iter/sec",
            "range": "stddev: 0.0007177070608288192",
            "extra": "mean: 9.682724892475253 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.84710970365225,
            "unit": "iter/sec",
            "range": "stddev: 0.0004577705380186791",
            "extra": "mean: 11.514487971013573 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1772021.579327476,
            "unit": "iter/sec",
            "range": "stddev: 1.2968990227850044e-7",
            "extra": "mean: 564.327213430168 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.712969484202511,
            "unit": "iter/sec",
            "range": "stddev: 0.0003661169232452172",
            "extra": "mean: 175.04031883334883 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10505521.436867185,
            "unit": "iter/sec",
            "range": "stddev: 4.4870128815514445e-9",
            "extra": "mean: 95.18804049944833 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.57483540933464,
            "unit": "iter/sec",
            "range": "stddev: 0.0002445068213005731",
            "extra": "mean: 3.304967508772375 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 283.4008383230957,
            "unit": "iter/sec",
            "range": "stddev: 0.0001320570407526866",
            "extra": "mean: 3.528571072397231 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7872665407476935,
            "unit": "iter/sec",
            "range": "stddev: 0.0019143670180271752",
            "extra": "mean: 559.5136356000125 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.06662450630813,
            "unit": "iter/sec",
            "range": "stddev: 0.0002174286016755193",
            "extra": "mean: 3.1739318677976263 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.12108440826827,
            "unit": "iter/sec",
            "range": "stddev: 0.000047250820133356",
            "extra": "mean: 7.2928244720014845 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1178.8179719975906,
            "unit": "iter/sec",
            "range": "stddev: 0.00003173054923077273",
            "extra": "mean: 848.3073924512953 usec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5218.140673274306,
            "unit": "iter/sec",
            "range": "stddev: 0.000021906535789942486",
            "extra": "mean: 191.63914171990209 usec\nrounds: 2385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5465.147917544448,
            "unit": "iter/sec",
            "range": "stddev: 0.000048868349170421154",
            "extra": "mean: 182.97766411587105 usec\nrounds: 2352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 158.8440865162208,
            "unit": "iter/sec",
            "range": "stddev: 0.004080259092667772",
            "extra": "mean: 6.295481449338577 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1769.3793718259847,
            "unit": "iter/sec",
            "range": "stddev: 0.000008536662083227198",
            "extra": "mean: 565.1699211164694 usec\nrounds: 1255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8455.719544211739,
            "unit": "iter/sec",
            "range": "stddev: 0.000013958420765525301",
            "extra": "mean: 118.26314659224217 usec\nrounds: 3404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.1924486013381,
            "unit": "iter/sec",
            "range": "stddev: 0.000012941852799441528",
            "extra": "mean: 1.3259215228878465 msec\nrounds: 568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.99257119668714,
            "unit": "iter/sec",
            "range": "stddev: 0.000743296368007552",
            "extra": "mean: 8.333849254391248 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 670.6231033204243,
            "unit": "iter/sec",
            "range": "stddev: 0.000068390883990752",
            "extra": "mean: 1.4911505360443855 msec\nrounds: 541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.72329622719768,
            "unit": "iter/sec",
            "range": "stddev: 0.0007913988662204314",
            "extra": "mean: 9.458653255106764 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6178734.859208109,
            "unit": "iter/sec",
            "range": "stddev: 8.921168653152343e-9",
            "extra": "mean: 161.84542997644553 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 302.4405618548744,
            "unit": "iter/sec",
            "range": "stddev: 0.00038076925234118054",
            "extra": "mean: 3.3064348044686165 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5534.605528872482,
            "unit": "iter/sec",
            "range": "stddev: 0.000055079342904101746",
            "extra": "mean: 180.68135023955745 usec\nrounds: 3746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.23990772795271,
            "unit": "iter/sec",
            "range": "stddev: 0.00007748882490749126",
            "extra": "mean: 8.386453990567588 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 737841.4421356906,
            "unit": "iter/sec",
            "range": "stddev: 2.844171765768716e-7",
            "extra": "mean: 1.355304734721173 usec\nrounds: 26738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8590723754736386,
            "unit": "iter/sec",
            "range": "stddev: 0.004257104819504178",
            "extra": "mean: 1.1640462765999928 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145288.69641983334,
            "unit": "iter/sec",
            "range": "stddev: 4.4573018442740143e-7",
            "extra": "mean: 6.88284790655944 usec\nrounds: 37878"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.1018480094597,
            "unit": "iter/sec",
            "range": "stddev: 0.00006024750816756835",
            "extra": "mean: 1.8446718152168151 msec\nrounds: 460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5245.861540487141,
            "unit": "iter/sec",
            "range": "stddev: 0.0000493544855962921",
            "extra": "mean: 190.62645711902226 usec\nrounds: 2402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5854052800549066,
            "unit": "iter/sec",
            "range": "stddev: 0.0023398725624182957",
            "extra": "mean: 386.7865543999983 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.63747459263408,
            "unit": "iter/sec",
            "range": "stddev: 0.00010272586857530675",
            "extra": "mean: 6.264193307691812 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.84055527063146,
            "unit": "iter/sec",
            "range": "stddev: 0.0007018701751036634",
            "extra": "mean: 8.862062027270667 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 98.3744489695068,
            "unit": "iter/sec",
            "range": "stddev: 0.0002787177320730844",
            "extra": "mean: 10.16524118279911 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.81028942089957,
            "unit": "iter/sec",
            "range": "stddev: 0.00027601360820418924",
            "extra": "mean: 10.329480533338003 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 312.7109553258368,
            "unit": "iter/sec",
            "range": "stddev: 0.0002131007618358225",
            "extra": "mean: 3.1978412747261307 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 512134.981445986,
            "unit": "iter/sec",
            "range": "stddev: 3.702291863628243e-7",
            "extra": "mean: 1.9526102223608175 usec\nrounds: 2250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.0180579078927,
            "unit": "iter/sec",
            "range": "stddev: 0.0006767535832073256",
            "extra": "mean: 10.636254590364722 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.27930032473202,
            "unit": "iter/sec",
            "range": "stddev: 0.00015471973153092275",
            "extra": "mean: 6.124475043751332 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8529345533585299,
            "unit": "iter/sec",
            "range": "stddev: 0.006715868626960022",
            "extra": "mean: 1.17242289699999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5610.842102805235,
            "unit": "iter/sec",
            "range": "stddev: 0.00004812937344713481",
            "extra": "mean: 178.22636632387736 usec\nrounds: 2334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13854.414891600822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055764149317823405",
            "extra": "mean: 72.1791578947333 usec\nrounds: 6897"
          }
        ]
      }
    ]
  }
}
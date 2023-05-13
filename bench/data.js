window.BENCHMARK_DATA = {
  "lastUpdate": 1683937779346,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "9d3aefce90b8dd5164933a2511546158b3bc8a62",
          "message": "chore(flake/poetry2nix): `38abfb45` -> `2bd1cf7c`",
          "timestamp": "2023-05-13T00:24:23Z",
          "tree_id": "5c3200c640c295aaaedb85540e861a517c9e0efd",
          "url": "https://github.com/ibis-project/ibis/commit/9d3aefce90b8dd5164933a2511546158b3bc8a62"
        },
        "date": 1683937691083,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1702.4896299553802,
            "unit": "iter/sec",
            "range": "stddev: 0.002684725420963632",
            "extra": "mean: 587.3750902237264 usec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2589757.443335793,
            "unit": "iter/sec",
            "range": "stddev: 1.0082924665091909e-7",
            "extra": "mean: 386.13654825983957 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4311953340624464,
            "unit": "iter/sec",
            "range": "stddev: 0.002034217208351977",
            "extra": "mean: 411.32030239998585 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.144671874408,
            "unit": "iter/sec",
            "range": "stddev: 0.00034293998414457953",
            "extra": "mean: 21.21130469767549 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 92.3284020299173,
            "unit": "iter/sec",
            "range": "stddev: 0.005940053773773081",
            "extra": "mean: 10.8309033624991 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.63896706827259,
            "unit": "iter/sec",
            "range": "stddev: 0.00012814907494102177",
            "extra": "mean: 7.959314083317773 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17878089910822342,
            "unit": "iter/sec",
            "range": "stddev: 0.0425901948554943",
            "extra": "mean: 5.593438700599995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13638.738720412099,
            "unit": "iter/sec",
            "range": "stddev: 0.000001747006662716469",
            "extra": "mean: 73.32056288338258 usec\nrounds: 1789"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5951445611642225,
            "unit": "iter/sec",
            "range": "stddev: 0.0020893979690929402",
            "extra": "mean: 626.9024290000061 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.49903784968052,
            "unit": "iter/sec",
            "range": "stddev: 0.0007289098784513291",
            "extra": "mean: 26.667350880004506 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2335.332997386784,
            "unit": "iter/sec",
            "range": "stddev: 0.00008418715647307489",
            "extra": "mean: 428.2044578306352 usec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8875260720147125,
            "unit": "iter/sec",
            "range": "stddev: 0.0022076433593388994",
            "extra": "mean: 1.126727463599991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8129.0367589347825,
            "unit": "iter/sec",
            "range": "stddev: 0.000014943441664412812",
            "extra": "mean: 123.0158049046685 usec\nrounds: 1794"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.69024000232969,
            "unit": "iter/sec",
            "range": "stddev: 0.0005473943698602412",
            "extra": "mean: 9.833785425003327 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.82916021372179,
            "unit": "iter/sec",
            "range": "stddev: 0.00009167419555341931",
            "extra": "mean: 14.320664847455731 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9882.726916825099,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015704557482617345",
            "extra": "mean: 101.18664700706489 usec\nrounds: 4544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1785009.368194894,
            "unit": "iter/sec",
            "range": "stddev: 8.906164470355868e-8",
            "extra": "mean: 560.221149433663 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 88.70417360693018,
            "unit": "iter/sec",
            "range": "stddev: 0.008884499671288957",
            "extra": "mean: 11.273426709674832 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 101.03443643526937,
            "unit": "iter/sec",
            "range": "stddev: 0.0006884095760507487",
            "extra": "mean: 9.897615459464445 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3188686108939116,
            "unit": "iter/sec",
            "range": "stddev: 0.041404865146389594",
            "extra": "mean: 758.2256425999958 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7276072.360224256,
            "unit": "iter/sec",
            "range": "stddev: 3.969881267628077e-9",
            "extra": "mean: 137.43678601474284 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6469310.336302894,
            "unit": "iter/sec",
            "range": "stddev: 7.511795311588091e-9",
            "extra": "mean: 154.57598229451972 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.28365974448553,
            "unit": "iter/sec",
            "range": "stddev: 0.000045181822211879114",
            "extra": "mean: 9.873260924049951 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.16287467110071,
            "unit": "iter/sec",
            "range": "stddev: 0.0006735766369172803",
            "extra": "mean: 10.29199684946571 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2346.0724513516166,
            "unit": "iter/sec",
            "range": "stddev: 0.00009654147460222278",
            "extra": "mean: 426.2442958331833 usec\nrounds: 1680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11918.533078580605,
            "unit": "iter/sec",
            "range": "stddev: 0.000013038526774401942",
            "extra": "mean: 83.90294287114496 usec\nrounds: 6039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2382.4775959525455,
            "unit": "iter/sec",
            "range": "stddev: 0.00007631316904899823",
            "extra": "mean: 419.7311243131279 usec\nrounds: 1094"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4704.638392506994,
            "unit": "iter/sec",
            "range": "stddev: 0.000023907464169394717",
            "extra": "mean: 212.5561874410337 usec\nrounds: 2102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.89730161528048,
            "unit": "iter/sec",
            "range": "stddev: 0.0007456544412167531",
            "extra": "mean: 9.911067828285251 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 404.9435610378998,
            "unit": "iter/sec",
            "range": "stddev: 0.0001169830421740559",
            "extra": "mean: 2.4694799379867334 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8879231204040743,
            "unit": "iter/sec",
            "range": "stddev: 0.0062996489349334975",
            "extra": "mean: 1.1262236302000133 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.48857378139905,
            "unit": "iter/sec",
            "range": "stddev: 0.00017823329119884436",
            "extra": "mean: 9.050709641510023 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.764996862787651,
            "unit": "iter/sec",
            "range": "stddev: 0.001517531971548635",
            "extra": "mean: 1.3071949031999908 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.673407806692,
            "unit": "iter/sec",
            "range": "stddev: 0.00038027590371682654",
            "extra": "mean: 3.973403502240851 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1072491.889978646,
            "unit": "iter/sec",
            "range": "stddev: 9.869735581627483e-8",
            "extra": "mean: 932.4079830756675 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.8306449562819,
            "unit": "iter/sec",
            "range": "stddev: 0.00014971901788578284",
            "extra": "mean: 6.1038641474362105 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 418.46150151661885,
            "unit": "iter/sec",
            "range": "stddev: 0.000035324686319768286",
            "extra": "mean: 2.389706093334098 msec\nrounds: 375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 269.9747729133335,
            "unit": "iter/sec",
            "range": "stddev: 0.0002455125722423032",
            "extra": "mean: 3.7040497866110513 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.96361207301302,
            "unit": "iter/sec",
            "range": "stddev: 0.0006420265651389896",
            "extra": "mean: 9.712168987339771 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 246.94606886375075,
            "unit": "iter/sec",
            "range": "stddev: 0.006725228823443776",
            "extra": "mean: 4.049467175570779 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.9953641618775,
            "unit": "iter/sec",
            "range": "stddev: 0.000028730254663524905",
            "extra": "mean: 1.449285099494369 msec\nrounds: 593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 247.07028536785995,
            "unit": "iter/sec",
            "range": "stddev: 0.0038247671988747046",
            "extra": "mean: 4.047431274510053 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 266.08897973552376,
            "unit": "iter/sec",
            "range": "stddev: 0.00031180127523928157",
            "extra": "mean: 3.7581413593074737 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.08092815490023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000706839464193261",
            "extra": "mean: 9.338731156246874 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.45547770009705,
            "unit": "iter/sec",
            "range": "stddev: 0.00006334086764924931",
            "extra": "mean: 5.278284967737767 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.9539643732304,
            "unit": "iter/sec",
            "range": "stddev: 0.00004846666234075927",
            "extra": "mean: 6.330958542054025 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.591168622302105,
            "unit": "iter/sec",
            "range": "stddev: 0.00015978901689896841",
            "extra": "mean: 116.39860000001237 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1760.226331383772,
            "unit": "iter/sec",
            "range": "stddev: 0.000005297766126622891",
            "extra": "mean: 568.1087608852362 usec\nrounds: 1355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.75895428554108,
            "unit": "iter/sec",
            "range": "stddev: 0.0005880268083541404",
            "extra": "mean: 9.545723387752648 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1188.370756040609,
            "unit": "iter/sec",
            "range": "stddev: 0.000014742295450649908",
            "extra": "mean: 841.4882265630474 usec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2403.351846201321,
            "unit": "iter/sec",
            "range": "stddev: 0.00008173783404389544",
            "extra": "mean: 416.0855604977587 usec\nrounds: 1529"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.67124075417865,
            "unit": "iter/sec",
            "range": "stddev: 0.00023587308908939683",
            "extra": "mean: 3.550238204377863 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.320500275413394,
            "unit": "iter/sec",
            "range": "stddev: 0.00010224167538780562",
            "extra": "mean: 16.578111843140658 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 102.102878000379,
            "unit": "iter/sec",
            "range": "stddev: 0.0006876810314999318",
            "extra": "mean: 9.794043219783562 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 93.64452196760838,
            "unit": "iter/sec",
            "range": "stddev: 0.01276085066962996",
            "extra": "mean: 10.678681240381575 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2424.666212536957,
            "unit": "iter/sec",
            "range": "stddev: 0.00007840930778016096",
            "extra": "mean: 412.42790237658653 usec\nrounds: 379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.20012848736906,
            "unit": "iter/sec",
            "range": "stddev: 0.00023897816351798666",
            "extra": "mean: 3.60750193535919 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.895635591767945,
            "unit": "iter/sec",
            "range": "stddev: 0.00022331031127588235",
            "extra": "mean: 33.449698599997646 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4694391.633370154,
            "unit": "iter/sec",
            "range": "stddev: 2.6005320230299007e-8",
            "extra": "mean: 213.0201478914329 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1845612.3169696066,
            "unit": "iter/sec",
            "range": "stddev: 8.067780007347966e-8",
            "extra": "mean: 541.8255994530556 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2289.707150157582,
            "unit": "iter/sec",
            "range": "stddev: 0.00014318248908347272",
            "extra": "mean: 436.7370735297647 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.87649229472038,
            "unit": "iter/sec",
            "range": "stddev: 0.00007966126291995491",
            "extra": "mean: 9.444967228573985 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.5812126249435,
            "unit": "iter/sec",
            "range": "stddev: 0.000021412108901221636",
            "extra": "mean: 1.8362734093963435 msec\nrounds: 447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.41482236539989,
            "unit": "iter/sec",
            "range": "stddev: 0.000029230321652609353",
            "extra": "mean: 5.039946048780592 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.23701417181971,
            "unit": "iter/sec",
            "range": "stddev: 0.0006450406012967867",
            "extra": "mean: 9.686448295915236 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.37206122626045,
            "unit": "iter/sec",
            "range": "stddev: 0.00015420943082552533",
            "extra": "mean: 17.739283933335376 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2350.8898089431373,
            "unit": "iter/sec",
            "range": "stddev: 0.00009925018918456153",
            "extra": "mean: 425.37085157962315 usec\nrounds: 1361"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.9224524575437,
            "unit": "iter/sec",
            "range": "stddev: 0.00023823495958458503",
            "extra": "mean: 3.598125992187562 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.4792172484114,
            "unit": "iter/sec",
            "range": "stddev: 0.023813860807132818",
            "extra": "mean: 26.681453707317914 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 230.49492145253274,
            "unit": "iter/sec",
            "range": "stddev: 0.0002646935194849258",
            "extra": "mean: 4.338490382773731 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.16176489252025,
            "unit": "iter/sec",
            "range": "stddev: 0.0006160956609892654",
            "extra": "mean: 9.983849636366347 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.7413243517765,
            "unit": "iter/sec",
            "range": "stddev: 0.0003523829411653919",
            "extra": "mean: 20.104008347825285 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 739.4236186181704,
            "unit": "iter/sec",
            "range": "stddev: 0.000011732470732749337",
            "extra": "mean: 1.3524047309562452 msec\nrounds: 617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 117.52365380219139,
            "unit": "iter/sec",
            "range": "stddev: 0.0000703541110296074",
            "extra": "mean: 8.508925374998455 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.08651817345159,
            "unit": "iter/sec",
            "range": "stddev: 0.0004343924159879688",
            "extra": "mean: 35.60427083999457 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 74.07775168746828,
            "unit": "iter/sec",
            "range": "stddev: 0.01712140466792641",
            "extra": "mean: 13.499329788233434 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.44365206559057,
            "unit": "iter/sec",
            "range": "stddev: 0.0007582875770133252",
            "extra": "mean: 9.857689265301968 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2406.885395464566,
            "unit": "iter/sec",
            "range": "stddev: 0.00008786713134643846",
            "extra": "mean: 415.47470514564515 usec\nrounds: 1438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.119233543819245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000977001065925919",
            "extra": "mean: 52.30335189473504 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.84795428638259,
            "unit": "iter/sec",
            "range": "stddev: 0.0006386023262468062",
            "extra": "mean: 9.91591755208295 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.10391998734472,
            "unit": "iter/sec",
            "range": "stddev: 0.0005908622194897531",
            "extra": "mean: 9.793943269993406 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 170.4551058418121,
            "unit": "iter/sec",
            "range": "stddev: 0.003904687314882236",
            "extra": "mean: 5.866647379445663 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.62510103973031,
            "unit": "iter/sec",
            "range": "stddev: 0.020319006501562504",
            "extra": "mean: 12.403085231573497 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.8253705795456,
            "unit": "iter/sec",
            "range": "stddev: 0.0007906543488249003",
            "extra": "mean: 9.918138601941022 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 142031.45336643347,
            "unit": "iter/sec",
            "range": "stddev: 2.71436429945992e-7",
            "extra": "mean: 7.040693989239511 usec\nrounds: 39528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.8380997014271,
            "unit": "iter/sec",
            "range": "stddev: 0.0002842577191791236",
            "extra": "mean: 3.7758917660539737 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.32156911731656,
            "unit": "iter/sec",
            "range": "stddev: 0.00009666816086961546",
            "extra": "mean: 5.769622356252313 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6302639.037417102,
            "unit": "iter/sec",
            "range": "stddev: 7.380302348053063e-9",
            "extra": "mean: 158.6636953287832 nsec\nrounds: 59881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.82483215246832,
            "unit": "iter/sec",
            "range": "stddev: 0.0007611069975480449",
            "extra": "mean: 9.918191567011883 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1619309.5596474984,
            "unit": "iter/sec",
            "range": "stddev: 8.124984110943573e-8",
            "extra": "mean: 617.5471478212519 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5917404.162972136,
            "unit": "iter/sec",
            "range": "stddev: 8.914321108080136e-9",
            "extra": "mean: 168.9930199894621 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11927517.674880575,
            "unit": "iter/sec",
            "range": "stddev: 3.1082331323452223e-9",
            "extra": "mean: 83.83974161743026 nsec\nrounds: 119048"
          }
        ]
      }
    ]
  }
}
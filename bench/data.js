window.BENCHMARK_DATA = {
  "lastUpdate": 1679652106866,
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
          "id": "bd81a9ff5f8fafb674a238eb6a0abb31849eb39e",
          "message": "fix(pyspark): fail when aggregation contains a `having` filter",
          "timestamp": "2023-03-24T05:56:12-04:00",
          "tree_id": "3775a7f5374db944a3746287b9f8bafec7b0de64",
          "url": "https://github.com/ibis-project/ibis/commit/bd81a9ff5f8fafb674a238eb6a0abb31849eb39e"
        },
        "date": 1679652022211,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.63668412733492,
            "unit": "iter/sec",
            "range": "stddev: 0.00009003422248483092",
            "extra": "mean: 8.358640222221917 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5798777.548285369,
            "unit": "iter/sec",
            "range": "stddev: 1.0216848674621875e-8",
            "extra": "mean: 172.45013999472678 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 703.3640852197565,
            "unit": "iter/sec",
            "range": "stddev: 0.000030133532537560515",
            "extra": "mean: 1.421738785095295 msec\nrounds: 577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5296.691194960125,
            "unit": "iter/sec",
            "range": "stddev: 0.000026153023795371955",
            "extra": "mean: 188.79711185570227 usec\nrounds: 1493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12323702.810844991,
            "unit": "iter/sec",
            "range": "stddev: 3.5251595185699493e-9",
            "extra": "mean: 81.14444297689423 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11989.99476764634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027622947271904294",
            "extra": "mean: 83.4028720928543 usec\nrounds: 516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 303.4421625488105,
            "unit": "iter/sec",
            "range": "stddev: 0.00020161450519217436",
            "extra": "mean: 3.2955209375003847 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.2964927190961,
            "unit": "iter/sec",
            "range": "stddev: 0.00003059871800302885",
            "extra": "mean: 5.173399609755093 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.61180308843988,
            "unit": "iter/sec",
            "range": "stddev: 0.0005469764397447744",
            "extra": "mean: 9.207102465518641 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.84363883395855,
            "unit": "iter/sec",
            "range": "stddev: 0.00008628155968649586",
            "extra": "mean: 3.0595669647039236 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.80213681643976,
            "unit": "iter/sec",
            "range": "stddev: 0.0006073829645231057",
            "extra": "mean: 37.3104579999989 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5870.565343761034,
            "unit": "iter/sec",
            "range": "stddev: 0.00004139914961905156",
            "extra": "mean: 170.34134558484286 usec\nrounds: 2231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 179.38498111878226,
            "unit": "iter/sec",
            "range": "stddev: 0.004179126732873172",
            "extra": "mean: 5.574602699530549 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.13680325017287,
            "unit": "iter/sec",
            "range": "stddev: 0.0005486322805455241",
            "extra": "mean: 8.25512951612889 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 256.74121229066725,
            "unit": "iter/sec",
            "range": "stddev: 0.004009659381014866",
            "extra": "mean: 3.894972650000028 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6154955384699754,
            "unit": "iter/sec",
            "range": "stddev: 0.001994944416128519",
            "extra": "mean: 382.33672559999263 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5476.547569916605,
            "unit": "iter/sec",
            "range": "stddev: 0.00006380781485326826",
            "extra": "mean: 182.59678880416035 usec\nrounds: 393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5314.394836200488,
            "unit": "iter/sec",
            "range": "stddev: 0.00004702239802931353",
            "extra": "mean: 188.16817922300768 usec\nrounds: 3398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6331627.054158563,
            "unit": "iter/sec",
            "range": "stddev: 5.7438075907621275e-8",
            "extra": "mean: 157.93728712159125 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 315.8364778763378,
            "unit": "iter/sec",
            "range": "stddev: 0.00022349393938598286",
            "extra": "mean: 3.166195389221439 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.62629685931722,
            "unit": "iter/sec",
            "range": "stddev: 0.00010564724562594352",
            "extra": "mean: 7.373201386138873 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140644.211164704,
            "unit": "iter/sec",
            "range": "stddev: 3.397861031004164e-7",
            "extra": "mean: 7.110139775528561 usec\nrounds: 36902"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5640.8837483974,
            "unit": "iter/sec",
            "range": "stddev: 0.000048695635238814486",
            "extra": "mean: 177.27718644868443 usec\nrounds: 2199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.35429674617777,
            "unit": "iter/sec",
            "range": "stddev: 0.00004804739866845831",
            "extra": "mean: 6.275324986014134 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.49089603468169,
            "unit": "iter/sec",
            "range": "stddev: 0.0002952770027022975",
            "extra": "mean: 17.39405834615527 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 98.20295812213831,
            "unit": "iter/sec",
            "range": "stddev: 0.015221075610632923",
            "extra": "mean: 10.182992642199906 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.477183835421342,
            "unit": "iter/sec",
            "range": "stddev: 0.00018247606972607145",
            "extra": "mean: 182.57557716666875 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1680632.6541086256,
            "unit": "iter/sec",
            "range": "stddev: 9.206745149844815e-8",
            "extra": "mean: 595.0140249597735 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.59471583521398,
            "unit": "iter/sec",
            "range": "stddev: 0.0006517152748761424",
            "extra": "mean: 8.292237293103662 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.7406317525445,
            "unit": "iter/sec",
            "range": "stddev: 0.0002715391819064923",
            "extra": "mean: 3.549363802372352 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.01454572588985,
            "unit": "iter/sec",
            "range": "stddev: 0.000665944112061137",
            "extra": "mean: 9.522490366336596 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1161.126374345401,
            "unit": "iter/sec",
            "range": "stddev: 0.000014422953469675745",
            "extra": "mean: 861.232697916936 usec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.80574120051405,
            "unit": "iter/sec",
            "range": "stddev: 0.0003426807441332021",
            "extra": "mean: 15.196242482140576 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.14066904102366,
            "unit": "iter/sec",
            "range": "stddev: 0.0007455526619146532",
            "extra": "mean: 26.9246630666629 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5347.119132620708,
            "unit": "iter/sec",
            "range": "stddev: 0.00004962555746167395",
            "extra": "mean: 187.01659252351163 usec\nrounds: 2140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.06130648545165,
            "unit": "iter/sec",
            "range": "stddev: 0.00009486235368089013",
            "extra": "mean: 10.197702191010066 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.37005420769785,
            "unit": "iter/sec",
            "range": "stddev: 0.000568478712072272",
            "extra": "mean: 9.313583823526704 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5506.790377316948,
            "unit": "iter/sec",
            "range": "stddev: 0.00005113350411978205",
            "extra": "mean: 181.5939833335777 usec\nrounds: 3420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.89340425072511,
            "unit": "iter/sec",
            "range": "stddev: 0.0005936902156462682",
            "extra": "mean: 9.533487897958913 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1753.0501347456525,
            "unit": "iter/sec",
            "range": "stddev: 0.00006060601508508418",
            "extra": "mean: 570.4343419391646 usec\nrounds: 1433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.70154317117235,
            "unit": "iter/sec",
            "range": "stddev: 0.0005669565768804341",
            "extra": "mean: 10.672182828122878 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.04488608105883,
            "unit": "iter/sec",
            "range": "stddev: 0.00014192025877671595",
            "extra": "mean: 9.25541259999818 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11565.570520778985,
            "unit": "iter/sec",
            "range": "stddev: 0.000011356296153711586",
            "extra": "mean: 86.463525357731 usec\nrounds: 4890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17930604615333925,
            "unit": "iter/sec",
            "range": "stddev: 0.10962988703937082",
            "extra": "mean: 5.577056777799998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.31530891019216,
            "unit": "iter/sec",
            "range": "stddev: 0.000312290026155292",
            "extra": "mean: 96.94329163636955 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.05139556949685,
            "unit": "iter/sec",
            "range": "stddev: 0.0006004651057667188",
            "extra": "mean: 8.260953913793498 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9212844827592177,
            "unit": "iter/sec",
            "range": "stddev: 0.005668780299743549",
            "extra": "mean: 1.085441053999989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.44410266257205,
            "unit": "iter/sec",
            "range": "stddev: 0.0006302016238624203",
            "extra": "mean: 9.857645479168417 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7401836.837826002,
            "unit": "iter/sec",
            "range": "stddev: 3.828075613357524e-9",
            "extra": "mean: 135.101600036649 nsec\nrounds: 64936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 268.06460596855226,
            "unit": "iter/sec",
            "range": "stddev: 0.007265609151003964",
            "extra": "mean: 3.730443996464472 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.30257065206589,
            "unit": "iter/sec",
            "range": "stddev: 0.00009306568193421928",
            "extra": "mean: 65.34849749999339 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2512749.1307502557,
            "unit": "iter/sec",
            "range": "stddev: 3.6356561389804954e-8",
            "extra": "mean: 397.97048888096447 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.24566714374016,
            "unit": "iter/sec",
            "range": "stddev: 0.0001803301308384411",
            "extra": "mean: 13.652684711541514 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5758.074263385066,
            "unit": "iter/sec",
            "range": "stddev: 0.00004559243344423956",
            "extra": "mean: 173.6691737998041 usec\nrounds: 2687"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6739004840154463,
            "unit": "iter/sec",
            "range": "stddev: 0.0010527947695423384",
            "extra": "mean: 1.4838986226000088 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 752685.8005033635,
            "unit": "iter/sec",
            "range": "stddev: 1.241074972437089e-7",
            "extra": "mean: 1.328575614594089 usec\nrounds: 25253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5803.964402139618,
            "unit": "iter/sec",
            "range": "stddev: 0.00004499289260130269",
            "extra": "mean: 172.2960257356769 usec\nrounds: 2720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 312.7524646579871,
            "unit": "iter/sec",
            "range": "stddev: 0.00019026051982603523",
            "extra": "mean: 3.197416848796245 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 108.16453715735324,
            "unit": "iter/sec",
            "range": "stddev: 0.011092993539571125",
            "extra": "mean: 9.245174308333995 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 351.0722127166624,
            "unit": "iter/sec",
            "range": "stddev: 0.00003440509311586771",
            "extra": "mean: 2.8484168321434873 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.22106019134199,
            "unit": "iter/sec",
            "range": "stddev: 0.000595365734394983",
            "extra": "mean: 8.249391635591579 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7955.895931591101,
            "unit": "iter/sec",
            "range": "stddev: 0.00002861580082954057",
            "extra": "mean: 125.69294628769859 usec\nrounds: 4431"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 546.2842369455932,
            "unit": "iter/sec",
            "range": "stddev: 0.000022452102799069392",
            "extra": "mean: 1.830548883473631 msec\nrounds: 472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.31093830093066,
            "unit": "iter/sec",
            "range": "stddev: 0.0005789773421660962",
            "extra": "mean: 9.774125979166234 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.60811744928708,
            "unit": "iter/sec",
            "range": "stddev: 0.0006029082033428672",
            "extra": "mean: 8.802187928572838 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.5178965212235,
            "unit": "iter/sec",
            "range": "stddev: 0.00005973259836506143",
            "extra": "mean: 6.115538551281492 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.4162748724273,
            "unit": "iter/sec",
            "range": "stddev: 0.00009867642240797356",
            "extra": "mean: 20.236248130430567 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.32506904308983,
            "unit": "iter/sec",
            "range": "stddev: 0.00005982839007667797",
            "extra": "mean: 10.601635494623146 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9253285122474235,
            "unit": "iter/sec",
            "range": "stddev: 0.0035140056437457192",
            "extra": "mean: 1.0806972731999962 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.65894177314125,
            "unit": "iter/sec",
            "range": "stddev: 0.0005845239235381126",
            "extra": "mean: 9.836812999997257 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13430.678022540314,
            "unit": "iter/sec",
            "range": "stddev: 0.000002305842807020497",
            "extra": "mean: 74.45640483091987 usec\nrounds: 7576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 244.7801903931373,
            "unit": "iter/sec",
            "range": "stddev: 0.011793166911774006",
            "extra": "mean: 4.085297909091079 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.6544145351523,
            "unit": "iter/sec",
            "range": "stddev: 0.00004211806297833902",
            "extra": "mean: 3.4405119963490463 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.56006457707284,
            "unit": "iter/sec",
            "range": "stddev: 0.00018266044558799252",
            "extra": "mean: 21.026043780480215 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69262.37579357882,
            "unit": "iter/sec",
            "range": "stddev: 4.4583149051774674e-7",
            "extra": "mean: 14.43785299800109 usec\nrounds: 13442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 317.3039024921016,
            "unit": "iter/sec",
            "range": "stddev: 0.00019083127575582936",
            "extra": "mean: 3.151552792594135 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 739.4288454259231,
            "unit": "iter/sec",
            "range": "stddev: 0.00001333961226342917",
            "extra": "mean: 1.352395171199987 msec\nrounds: 625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1778769.062080185,
            "unit": "iter/sec",
            "range": "stddev: 9.112835283649438e-8",
            "extra": "mean: 562.1865262433495 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1840381.5414442855,
            "unit": "iter/sec",
            "range": "stddev: 9.394417379650665e-8",
            "extra": "mean: 543.365588863288 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.95999924366957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000571737019825652",
            "extra": "mean: 8.931761403674194 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.34548805714341,
            "unit": "iter/sec",
            "range": "stddev: 0.0005600731455042633",
            "extra": "mean: 8.24093269565231 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.9361783443842,
            "unit": "iter/sec",
            "range": "stddev: 0.00006839099623540087",
            "extra": "mean: 6.6253168125030015 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.72543512611065,
            "unit": "iter/sec",
            "range": "stddev: 0.00020505938774004363",
            "extra": "mean: 3.281642701030683 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7611021882559457,
            "unit": "iter/sec",
            "range": "stddev: 0.0020431327229210924",
            "extra": "mean: 567.8262208000092 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8477425651769843,
            "unit": "iter/sec",
            "range": "stddev: 0.0012212871296890767",
            "extra": "mean: 1.1796033856000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.21553972981184,
            "unit": "iter/sec",
            "range": "stddev: 0.00020579400273572777",
            "extra": "mean: 13.847435105261459 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.80181703819866,
            "unit": "iter/sec",
            "range": "stddev: 0.02611093407025014",
            "extra": "mean: 32.465617166670945 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 488404.4751463075,
            "unit": "iter/sec",
            "range": "stddev: 3.0355570374867556e-7",
            "extra": "mean: 2.0474832866763513 usec\nrounds: 2154"
          }
        ]
      }
    ]
  }
}
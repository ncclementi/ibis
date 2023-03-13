window.BENCHMARK_DATA = {
  "lastUpdate": 1678713886376,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "19f214c110d7f717f1ef8fbac8c7b4a9a9f22002",
          "message": "fix(druid): remove invalid operations",
          "timestamp": "2023-03-13T09:19:46-04:00",
          "tree_id": "13551e24149d46b8baaa5b14a6ec208feda28400",
          "url": "https://github.com/ibis-project/ibis/commit/19f214c110d7f717f1ef8fbac8c7b4a9a9f22002"
        },
        "date": 1678713804111,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1966350.1270418225,
            "unit": "iter/sec",
            "range": "stddev: 7.765187878507955e-8",
            "extra": "mean: 508.5564296244638 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 263.34525322420916,
            "unit": "iter/sec",
            "range": "stddev: 0.007389633669808169",
            "extra": "mean: 3.7972964682549692 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 323.11823162028765,
            "unit": "iter/sec",
            "range": "stddev: 0.00019402544370842223",
            "extra": "mean: 3.094842389380089 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 96.04241732569812,
            "unit": "iter/sec",
            "range": "stddev: 0.0006091433623360339",
            "extra": "mean: 10.41206612499985 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.61456641900237,
            "unit": "iter/sec",
            "range": "stddev: 0.0006750246086503705",
            "extra": "mean: 8.290872567796702 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.695962329455,
            "unit": "iter/sec",
            "range": "stddev: 0.00008721794366900547",
            "extra": "mean: 5.03281490109957 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8839755622466506,
            "unit": "iter/sec",
            "range": "stddev: 0.005032650492276347",
            "extra": "mean: 1.1312529924000045 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12265.174511966072,
            "unit": "iter/sec",
            "range": "stddev: 0.000011561342450258995",
            "extra": "mean: 81.53165688954415 usec\nrounds: 4057"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 172.35586444599787,
            "unit": "iter/sec",
            "range": "stddev: 0.003350789797362243",
            "extra": "mean: 5.801949374999756 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5748.751689632235,
            "unit": "iter/sec",
            "range": "stddev: 0.000047966051095169404",
            "extra": "mean: 173.9508077559657 usec\nrounds: 1805"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1770.8819767371313,
            "unit": "iter/sec",
            "range": "stddev: 0.000008265458870933423",
            "extra": "mean: 564.6903707510257 usec\nrounds: 1265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 291.94379581664913,
            "unit": "iter/sec",
            "range": "stddev: 0.00023637980477954004",
            "extra": "mean: 3.425316839505762 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 766337.7565453508,
            "unit": "iter/sec",
            "range": "stddev: 2.7595458484072905e-7",
            "extra": "mean: 1.3049076486952675 usec\nrounds: 24331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5295.7495209518565,
            "unit": "iter/sec",
            "range": "stddev: 0.000021815965215383396",
            "extra": "mean: 188.83068318160568 usec\nrounds: 1433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11936464.173175367,
            "unit": "iter/sec",
            "range": "stddev: 3.1627141974933423e-9",
            "extra": "mean: 83.77690289946212 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1956020.19011847,
            "unit": "iter/sec",
            "range": "stddev: 7.713960912621907e-8",
            "extra": "mean: 511.24216664626204 nsec\nrounds: 92585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12567.522573656008,
            "unit": "iter/sec",
            "range": "stddev: 0.00005059206060604328",
            "extra": "mean: 79.5701773471405 usec\nrounds: 4697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 293.0888216400153,
            "unit": "iter/sec",
            "range": "stddev: 0.000034503021316464054",
            "extra": "mean: 3.411934970444708 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.77932698305851,
            "unit": "iter/sec",
            "range": "stddev: 0.0006194379939344961",
            "extra": "mean: 8.279562612070757 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 320.643502857074,
            "unit": "iter/sec",
            "range": "stddev: 0.00027136431778658867",
            "extra": "mean: 3.1187284042544507 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.658135568591,
            "unit": "iter/sec",
            "range": "stddev: 0.00004571687252616753",
            "extra": "mean: 1.8599179178093668 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7434561866918392,
            "unit": "iter/sec",
            "range": "stddev: 0.0021024619427659425",
            "extra": "mean: 573.5733467999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 82.77889258965135,
            "unit": "iter/sec",
            "range": "stddev: 0.019879619237538764",
            "extra": "mean: 12.080374219997907 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.98513147426603,
            "unit": "iter/sec",
            "range": "stddev: 0.0006806762958688517",
            "extra": "mean: 9.175563551401723 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5784.768623512061,
            "unit": "iter/sec",
            "range": "stddev: 0.00004553234363906912",
            "extra": "mean: 172.86776102600243 usec\nrounds: 2222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.250212990543,
            "unit": "iter/sec",
            "range": "stddev: 0.00021467848048278607",
            "extra": "mean: 6.279426452380221 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 337.01657193437376,
            "unit": "iter/sec",
            "range": "stddev: 0.00008476137839340878",
            "extra": "mean: 2.9672131380967435 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.715370121396704,
            "unit": "iter/sec",
            "range": "stddev: 0.0002911683510228561",
            "extra": "mean: 174.9667963333271 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 306.94663985884705,
            "unit": "iter/sec",
            "range": "stddev: 0.00017595864981578767",
            "extra": "mean: 3.257895250001308 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.09592483361226,
            "unit": "iter/sec",
            "range": "stddev: 0.0005403402339260229",
            "extra": "mean: 27.703958400002193 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.23697987638598,
            "unit": "iter/sec",
            "range": "stddev: 0.0005604951056633161",
            "extra": "mean: 21.169854690475358 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 752.0086815953775,
            "unit": "iter/sec",
            "range": "stddev: 0.000010655197814440567",
            "extra": "mean: 1.3297718822587417 msec\nrounds: 620"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148106.5711026402,
            "unit": "iter/sec",
            "range": "stddev: 3.0914206924378626e-7",
            "extra": "mean: 6.751894885926324 usec\nrounds: 42373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.31900125221546,
            "unit": "iter/sec",
            "range": "stddev: 0.00008952175993674011",
            "extra": "mean: 3.397673937956368 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.830983073462961,
            "unit": "iter/sec",
            "range": "stddev: 0.005144876301467389",
            "extra": "mean: 1.2033939462000034 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5593.315598403475,
            "unit": "iter/sec",
            "range": "stddev: 0.00004796863019940515",
            "extra": "mean: 178.78483386230423 usec\nrounds: 1890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.88590812383516,
            "unit": "iter/sec",
            "range": "stddev: 0.0007017382381466587",
            "extra": "mean: 9.625944635416475 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7013569.440678219,
            "unit": "iter/sec",
            "range": "stddev: 3.845294047724709e-9",
            "extra": "mean: 142.58075127913457 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.44293902151265,
            "unit": "iter/sec",
            "range": "stddev: 0.004310148622349304",
            "extra": "mean: 18.7115457777774 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5196.328537611313,
            "unit": "iter/sec",
            "range": "stddev: 0.00007433739879655138",
            "extra": "mean: 192.44356717669885 usec\nrounds: 2352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.98650668814015,
            "unit": "iter/sec",
            "range": "stddev: 0.0006796619116425864",
            "extra": "mean: 9.175447772277478 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5256592852315576,
            "unit": "iter/sec",
            "range": "stddev: 0.0029667417295618594",
            "extra": "mean: 395.936223800004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6155421.293699527,
            "unit": "iter/sec",
            "range": "stddev: 8.248187181786326e-9",
            "extra": "mean: 162.45841710659474 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8800869947547669,
            "unit": "iter/sec",
            "range": "stddev: 0.005939008622630209",
            "extra": "mean: 1.1362513092000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5734.927333908545,
            "unit": "iter/sec",
            "range": "stddev: 0.00004593811021377071",
            "extra": "mean: 174.37012568360942 usec\nrounds: 2013"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.11637657389483,
            "unit": "iter/sec",
            "range": "stddev: 0.0006962281201285411",
            "extra": "mean: 8.325259456896841 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70737.02078139906,
            "unit": "iter/sec",
            "range": "stddev: 0.000001319676710887577",
            "extra": "mean: 14.136869053198225 usec\nrounds: 13158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.8241995473722,
            "unit": "iter/sec",
            "range": "stddev: 0.000022823974986601835",
            "extra": "mean: 1.4496447075300483 msec\nrounds: 571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.0974158335033,
            "unit": "iter/sec",
            "range": "stddev: 0.0006981018906372658",
            "extra": "mean: 8.764440392403369 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1821719.3824557404,
            "unit": "iter/sec",
            "range": "stddev: 1.1179630071516598e-7",
            "extra": "mean: 548.931964840801 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 246.90486198814912,
            "unit": "iter/sec",
            "range": "stddev: 0.003783617973828199",
            "extra": "mean: 4.050143006288786 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.64245673466107,
            "unit": "iter/sec",
            "range": "stddev: 0.00010144288399773253",
            "extra": "mean: 6.225004399999534 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5199.9666394317865,
            "unit": "iter/sec",
            "range": "stddev: 0.00005353892216914257",
            "extra": "mean: 192.30892606443194 usec\nrounds: 2137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.608991287444553,
            "unit": "iter/sec",
            "range": "stddev: 0.00012010851533391502",
            "extra": "mean: 64.06563893749961 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.35501711071984,
            "unit": "iter/sec",
            "range": "stddev: 0.000060193806494859595",
            "extra": "mean: 6.084389862746552 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.8142552739182,
            "unit": "iter/sec",
            "range": "stddev: 0.0008160522325462432",
            "extra": "mean: 26.44505340000004 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1967339.219477463,
            "unit": "iter/sec",
            "range": "stddev: 8.671578986718681e-8",
            "extra": "mean: 508.30074961124694 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.86561231567674,
            "unit": "iter/sec",
            "range": "stddev: 0.0005433165694920396",
            "extra": "mean: 7.3602141333345745 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.8763033720127,
            "unit": "iter/sec",
            "range": "stddev: 0.00011666936918278076",
            "extra": "mean: 8.34193224074232 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.5754353793868,
            "unit": "iter/sec",
            "range": "stddev: 0.000262678015324718",
            "extra": "mean: 15.48576473584584 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6908634002586722,
            "unit": "iter/sec",
            "range": "stddev: 0.010504192270372213",
            "extra": "mean: 1.4474641435999955 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.07170624826315,
            "unit": "iter/sec",
            "range": "stddev: 0.017475236941025256",
            "extra": "mean: 9.992834513275385 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 109.2360207176777,
            "unit": "iter/sec",
            "range": "stddev: 0.0006753158846256977",
            "extra": "mean: 9.15448945714085 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.585255973108,
            "unit": "iter/sec",
            "range": "stddev: 0.00010231462296881099",
            "extra": "mean: 8.961757458718376 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.12102250680213,
            "unit": "iter/sec",
            "range": "stddev: 0.0007255665108474947",
            "extra": "mean: 8.39482384348151 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5313.805892677191,
            "unit": "iter/sec",
            "range": "stddev: 0.000054761150195135266",
            "extra": "mean: 188.18903441280617 usec\nrounds: 3487"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 313.1721052076426,
            "unit": "iter/sec",
            "range": "stddev: 0.0002243709438511137",
            "extra": "mean: 3.1931324130448004 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.57154432784174,
            "unit": "iter/sec",
            "range": "stddev: 0.001700635499628531",
            "extra": "mean: 24.64781699999923 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.29395380920465,
            "unit": "iter/sec",
            "range": "stddev: 0.0010063015083948503",
            "extra": "mean: 41.162505200002215 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5602323.286584364,
            "unit": "iter/sec",
            "range": "stddev: 8.390488241908275e-9",
            "extra": "mean: 178.4973749005176 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.11762744318746,
            "unit": "iter/sec",
            "range": "stddev: 0.0005453828698931942",
            "extra": "mean: 10.403918891891845 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 303.5996410477675,
            "unit": "iter/sec",
            "range": "stddev: 0.00020811686720853092",
            "extra": "mean: 3.2938115359716877 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.60797837704143,
            "unit": "iter/sec",
            "range": "stddev: 0.00039745461841568687",
            "extra": "mean: 9.93956956626611 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.00302322744717,
            "unit": "iter/sec",
            "range": "stddev: 0.0007539313590885179",
            "extra": "mean: 9.708452904259323 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.31467885479269,
            "unit": "iter/sec",
            "range": "stddev: 0.0005980132287892626",
            "extra": "mean: 17.75735954347708 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 96.97681843614373,
            "unit": "iter/sec",
            "range": "stddev: 0.02073613693345065",
            "extra": "mean: 10.311742704350209 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8416.467831113878,
            "unit": "iter/sec",
            "range": "stddev: 0.000017353931234066047",
            "extra": "mean: 118.81468806940774 usec\nrounds: 4392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14093.088267088851,
            "unit": "iter/sec",
            "range": "stddev: 0.000001623245856662569",
            "extra": "mean: 70.95676838519978 usec\nrounds: 7098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1170.5989748039567,
            "unit": "iter/sec",
            "range": "stddev: 0.00001746439139208675",
            "extra": "mean: 854.263519381155 usec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 488236.03096345766,
            "unit": "iter/sec",
            "range": "stddev: 3.8152456818499495e-7",
            "extra": "mean: 2.048189679951838 usec\nrounds: 2093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 104.34070891880226,
            "unit": "iter/sec",
            "range": "stddev: 0.0006898184997059282",
            "extra": "mean: 9.583987020619134 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.97457189328195,
            "unit": "iter/sec",
            "range": "stddev: 0.00010258900259687512",
            "extra": "mean: 13.162298583329365 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.31820806632668,
            "unit": "iter/sec",
            "range": "stddev: 0.000694599943394472",
            "extra": "mean: 8.903275944444157 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5523.635299794552,
            "unit": "iter/sec",
            "range": "stddev: 0.000047763711091964564",
            "extra": "mean: 181.04019286667864 usec\nrounds: 2271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.195806196150519,
            "unit": "iter/sec",
            "range": "stddev: 0.005111205263803118",
            "extra": "mean: 98.0795417999957 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16580808195933683,
            "unit": "iter/sec",
            "range": "stddev: 0.22775122294242198",
            "extra": "mean: 6.03106910219999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 323.4565384533415,
            "unit": "iter/sec",
            "range": "stddev: 0.00021358005745779983",
            "extra": "mean: 3.0916054589023236 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.80296503372287,
            "unit": "iter/sec",
            "range": "stddev: 0.000313618250656339",
            "extra": "mean: 10.775517782611995 msec\nrounds: 69"
          }
        ]
      }
    ]
  }
}
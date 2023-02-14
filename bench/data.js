window.BENCHMARK_DATA = {
  "lastUpdate": 1676374348748,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "deepyaman.datta@utexas.edu",
            "name": "Deepyaman Datta",
            "username": "deepyaman"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "87617320375d749c8df0f1741052861af431e047",
          "message": "feat(datatype): enable inference of `Decimal` type",
          "timestamp": "2023-02-14T06:19:05-05:00",
          "tree_id": "8f349a8cb2af338b963ab08fa7a25dbfe9be2cb1",
          "url": "https://github.com/ibis-project/ibis/commit/87617320375d749c8df0f1741052861af431e047"
        },
        "date": 1676374264371,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6084.570467161844,
            "unit": "iter/sec",
            "range": "stddev: 0.000044276850702439374",
            "extra": "mean: 164.35013866581963 usec\nrounds: 375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 202.16505032749987,
            "unit": "iter/sec",
            "range": "stddev: 0.0048678638130450844",
            "extra": "mean: 4.946453397261481 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 387930.8948615214,
            "unit": "iter/sec",
            "range": "stddev: 1.9124872462363116e-7",
            "extra": "mean: 2.577778705552615 usec\nrounds: 1916"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 160.87084488341313,
            "unit": "iter/sec",
            "range": "stddev: 0.0005946901067006226",
            "extra": "mean: 6.216166768594542 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5882681817694118,
            "unit": "iter/sec",
            "range": "stddev: 0.019785970741845096",
            "extra": "mean: 1.699904959999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5140.258293593118,
            "unit": "iter/sec",
            "range": "stddev: 0.000040799549153168394",
            "extra": "mean: 194.54275308429783 usec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 94.60970018389976,
            "unit": "iter/sec",
            "range": "stddev: 0.0004761089149841981",
            "extra": "mean: 10.56974071428434 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 418.06148792297336,
            "unit": "iter/sec",
            "range": "stddev: 0.000057974991055684964",
            "extra": "mean: 2.3919926347873672 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8716716361552959,
            "unit": "iter/sec",
            "range": "stddev: 0.004180542627843761",
            "extra": "mean: 1.1472209929999848 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.091312051906208,
            "unit": "iter/sec",
            "range": "stddev: 0.0007739161652166096",
            "extra": "mean: 39.85443239999995 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.63762566993157,
            "unit": "iter/sec",
            "range": "stddev: 0.0005727395823594858",
            "extra": "mean: 10.456135783329046 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.718800505457429,
            "unit": "iter/sec",
            "range": "stddev: 0.00013358702212945496",
            "extra": "mean: 72.89267014285932 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5315902.154894228,
            "unit": "iter/sec",
            "range": "stddev: 5.435370397613213e-9",
            "extra": "mean: 188.1148243255801 nsec\nrounds: 53195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1387.2399205949362,
            "unit": "iter/sec",
            "range": "stddev: 0.00004312946231015586",
            "extra": "mean: 720.8558412672675 usec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 149.8393685831418,
            "unit": "iter/sec",
            "range": "stddev: 0.0006077896741831425",
            "extra": "mean: 6.6738134941160485 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 253.01035580836972,
            "unit": "iter/sec",
            "range": "stddev: 0.00021867901279775369",
            "extra": "mean: 3.9524073898279517 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.12277663229969,
            "unit": "iter/sec",
            "range": "stddev: 0.000260589728394543",
            "extra": "mean: 22.66403151219542 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5183.4926978351,
            "unit": "iter/sec",
            "range": "stddev: 0.00004954022864717727",
            "extra": "mean: 192.9201135785631 usec\nrounds: 1981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.8888419185528,
            "unit": "iter/sec",
            "range": "stddev: 0.000670105596933916",
            "extra": "mean: 12.064349999998884 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4641654.459293355,
            "unit": "iter/sec",
            "range": "stddev: 1.1523250007717528e-8",
            "extra": "mean: 215.44042297220653 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5201.09861667236,
            "unit": "iter/sec",
            "range": "stddev: 0.00008649683836217015",
            "extra": "mean: 192.26707157492731 usec\nrounds: 2431"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19562.597235713372,
            "unit": "iter/sec",
            "range": "stddev: 0.000013300056967492458",
            "extra": "mean: 51.1179567800131 usec\nrounds: 5900"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10830.229000610065,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019670620432068847",
            "extra": "mean: 92.3341510085955 usec\nrounds: 4907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 255.29617124153887,
            "unit": "iter/sec",
            "range": "stddev: 0.00018449357125495326",
            "extra": "mean: 3.917019182610019 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 144.0632267124295,
            "unit": "iter/sec",
            "range": "stddev: 0.008454658960946682",
            "extra": "mean: 6.941396654929442 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2736329134237185,
            "unit": "iter/sec",
            "range": "stddev: 0.0017598694938344118",
            "extra": "mean: 439.8247377999837 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.940932705894937,
            "unit": "iter/sec",
            "range": "stddev: 0.0004395331052904543",
            "extra": "mean: 202.39093699999557 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 256.98855291679024,
            "unit": "iter/sec",
            "range": "stddev: 0.0001903809863923972",
            "extra": "mean: 3.8912239033611264 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.32595826665646,
            "unit": "iter/sec",
            "range": "stddev: 0.00011499299676462833",
            "extra": "mean: 9.96751007692445 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 252.2841916381381,
            "unit": "iter/sec",
            "range": "stddev: 0.0010322467334615711",
            "extra": "mean: 3.963783832458049 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 173.19585136920793,
            "unit": "iter/sec",
            "range": "stddev: 0.00004913794668631532",
            "extra": "mean: 5.773810354546329 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.53639312921393,
            "unit": "iter/sec",
            "range": "stddev: 0.0006077945345212921",
            "extra": "mean: 11.04528207317466 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.4882447529321,
            "unit": "iter/sec",
            "range": "stddev: 0.0005978702671653473",
            "extra": "mean: 6.230985961242685 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1952198.258175457,
            "unit": "iter/sec",
            "range": "stddev: 3.0921029621072875e-8",
            "extra": "mean: 512.2430551366064 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1996009.6076502847,
            "unit": "iter/sec",
            "range": "stddev: 3.020116003676902e-8",
            "extra": "mean: 500.9995924705373 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8694611011633543,
            "unit": "iter/sec",
            "range": "stddev: 0.004062415124290537",
            "extra": "mean: 1.1501377102000105 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4445.781584925505,
            "unit": "iter/sec",
            "range": "stddev: 0.00006940027903281017",
            "extra": "mean: 224.93232762282818 usec\nrounds: 1401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9825.439358430562,
            "unit": "iter/sec",
            "range": "stddev: 0.000013810071509775325",
            "extra": "mean: 101.77661919433312 usec\nrounds: 4220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 564280.1605279251,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010637607834476675",
            "extra": "mean: 1.7721693406063173 usec\nrounds: 19570"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 243.06046427096962,
            "unit": "iter/sec",
            "range": "stddev: 0.00019541041295634924",
            "extra": "mean: 4.114202624434947 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 259.7317646779571,
            "unit": "iter/sec",
            "range": "stddev: 0.00020286497807861837",
            "extra": "mean: 3.850125922179391 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 278.36964722334034,
            "unit": "iter/sec",
            "range": "stddev: 0.0000942285932404898",
            "extra": "mean: 3.592345681272083 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.57958082968325,
            "unit": "iter/sec",
            "range": "stddev: 0.00005916522150608401",
            "extra": "mean: 14.581599769230007 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.659720655504678,
            "unit": "iter/sec",
            "range": "stddev: 0.021466970655314315",
            "extra": "mean: 32.61608320689181 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4404100.454667311,
            "unit": "iter/sec",
            "range": "stddev: 1.0893877048945946e-8",
            "extra": "mean: 227.06112412611614 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 253.48130740108877,
            "unit": "iter/sec",
            "range": "stddev: 0.00009361442309642148",
            "extra": "mean: 3.945064076924927 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.41387211158498,
            "unit": "iter/sec",
            "range": "stddev: 0.00008112346420402178",
            "extra": "mean: 8.304690999998085 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15590030071752387,
            "unit": "iter/sec",
            "range": "stddev: 0.045156053546861114",
            "extra": "mean: 6.41435581200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.15943345761457,
            "unit": "iter/sec",
            "range": "stddev: 0.00007396461466667819",
            "extra": "mean: 17.194115219997457 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6065.580703125841,
            "unit": "iter/sec",
            "range": "stddev: 0.000045008938472185814",
            "extra": "mean: 164.86467643314998 usec\nrounds: 2389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.9781035709302,
            "unit": "iter/sec",
            "range": "stddev: 0.000568549296638275",
            "extra": "mean: 10.991655802325662 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1987481.4837868891,
            "unit": "iter/sec",
            "range": "stddev: 2.4864412797394738e-8",
            "extra": "mean: 503.149341595345 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 104.27585744216535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000862380102137522",
            "extra": "mean: 9.589947515460434 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.61244893256284,
            "unit": "iter/sec",
            "range": "stddev: 0.0001248395585025456",
            "extra": "mean: 14.790175711538085 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.21845221956106,
            "unit": "iter/sec",
            "range": "stddev: 0.00014182382500768263",
            "extra": "mean: 21.17816135416935 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 626.7575940685506,
            "unit": "iter/sec",
            "range": "stddev: 0.000011506247300126596",
            "extra": "mean: 1.5955131768066406 msec\nrounds: 526"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 249.2013143138546,
            "unit": "iter/sec",
            "range": "stddev: 0.00021142379233390066",
            "extra": "mean: 4.0128199273482075 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5946.283661721509,
            "unit": "iter/sec",
            "range": "stddev: 0.00004468563678340697",
            "extra": "mean: 168.17226639176008 usec\nrounds: 3630"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.3577380233053,
            "unit": "iter/sec",
            "range": "stddev: 0.00009645845261283529",
            "extra": "mean: 6.879578711108378 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 334.6117456432674,
            "unit": "iter/sec",
            "range": "stddev: 0.00004330606335430106",
            "extra": "mean: 2.988538247746118 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.97169071776511,
            "unit": "iter/sec",
            "range": "stddev: 0.000560942334233014",
            "extra": "mean: 11.114607183907768 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7534862866742711,
            "unit": "iter/sec",
            "range": "stddev: 0.0031770413999541967",
            "extra": "mean: 1.3271641670000236 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.289404581307174,
            "unit": "iter/sec",
            "range": "stddev: 0.0003059089071928716",
            "extra": "mean: 107.64952600000584 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.84260923785357,
            "unit": "iter/sec",
            "range": "stddev: 0.00004201498449507669",
            "extra": "mean: 6.856706728066747 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 127.83403705239219,
            "unit": "iter/sec",
            "range": "stddev: 0.010998779152769022",
            "extra": "mean: 7.822642725349858 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.42173817055668,
            "unit": "iter/sec",
            "range": "stddev: 0.00003842098974770775",
            "extra": "mean: 10.371105302324446 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 985.5695281593464,
            "unit": "iter/sec",
            "range": "stddev: 0.00008284104282757475",
            "extra": "mean: 1.0146417593364558 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 89.19514852109778,
            "unit": "iter/sec",
            "range": "stddev: 0.000059610294940186274",
            "extra": "mean: 11.211372104655053 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1599072.9294788623,
            "unit": "iter/sec",
            "range": "stddev: 8.547287074954351e-8",
            "extra": "mean: 625.3623468730098 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56383.87606761032,
            "unit": "iter/sec",
            "range": "stddev: 4.1683920260346585e-7",
            "extra": "mean: 17.73556679219592 usec\nrounds: 12756"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12063039.70742103,
            "unit": "iter/sec",
            "range": "stddev: 3.538604672502722e-9",
            "extra": "mean: 82.89784534027454 nsec\nrounds: 120497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.602249753487479,
            "unit": "iter/sec",
            "range": "stddev: 0.0013605070111800165",
            "extra": "mean: 624.1224239999951 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 144.86708002644698,
            "unit": "iter/sec",
            "range": "stddev: 0.0001439578905559041",
            "extra": "mean: 6.902879521126812 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 518.928912714781,
            "unit": "iter/sec",
            "range": "stddev: 0.000025133251534075664",
            "extra": "mean: 1.9270462205863452 msec\nrounds: 476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.97165898491626,
            "unit": "iter/sec",
            "range": "stddev: 0.0005728992591947328",
            "extra": "mean: 10.419742771740236 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 162.0117751549785,
            "unit": "iter/sec",
            "range": "stddev: 0.0006308894068226479",
            "extra": "mean: 6.172390858895362 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6041.162418675161,
            "unit": "iter/sec",
            "range": "stddev: 0.00004826914651263199",
            "extra": "mean: 165.53105688876713 usec\nrounds: 2250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10302.053951431275,
            "unit": "iter/sec",
            "range": "stddev: 0.000001710430576428975",
            "extra": "mean: 97.06802203856338 usec\nrounds: 5082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119321.50899043765,
            "unit": "iter/sec",
            "range": "stddev: 3.058417223715739e-7",
            "extra": "mean: 8.380718685682558 usec\nrounds: 36365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 160.32234809069905,
            "unit": "iter/sec",
            "range": "stddev: 0.0006395989475911027",
            "extra": "mean: 6.237433594936313 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.05373151424041,
            "unit": "iter/sec",
            "range": "stddev: 0.00007215018350193541",
            "extra": "mean: 13.688554701754958 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.9795992619973,
            "unit": "iter/sec",
            "range": "stddev: 0.022470302109991236",
            "extra": "mean: 30.321775351355146 msec\nrounds: 37"
          }
        ]
      }
    ]
  }
}
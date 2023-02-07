window.BENCHMARK_DATA = {
  "lastUpdate": 1675780782083,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "olivier.grisel@ensta.org",
            "name": "Olivier Grisel",
            "username": "ogrisel"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "144044d8067cf5aa3e7beeb3649061a3195b0a14",
          "message": "docs(backends): link to configuration from the backends list",
          "timestamp": "2023-02-07T09:34:03-05:00",
          "tree_id": "83c2e68150eabcc99418677ac77b5a97ee015ad4",
          "url": "https://github.com/ibis-project/ibis/commit/144044d8067cf5aa3e7beeb3649061a3195b0a14"
        },
        "date": 1675780701953,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4743.558721556914,
            "unit": "iter/sec",
            "range": "stddev: 0.00012469466563260132",
            "extra": "mean: 210.81218947612894 usec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.17108035188417,
            "unit": "iter/sec",
            "range": "stddev: 0.00048042902420867726",
            "extra": "mean: 10.507393593753633 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 84.89328735008742,
            "unit": "iter/sec",
            "range": "stddev: 0.008001510463766476",
            "extra": "mean: 11.779494365392488 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8702492985708336,
            "unit": "iter/sec",
            "range": "stddev: 0.003423078435788034",
            "extra": "mean: 1.1490960138000106 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19676.44811706318,
            "unit": "iter/sec",
            "range": "stddev: 0.000012153661734387084",
            "extra": "mean: 50.822180611591776 usec\nrounds: 5653"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 617.1088729559218,
            "unit": "iter/sec",
            "range": "stddev: 0.00003183698458215347",
            "extra": "mean: 1.6204596041700843 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.48534066844017,
            "unit": "iter/sec",
            "range": "stddev: 0.00008048525488157104",
            "extra": "mean: 14.601664972965901 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9263.284376849553,
            "unit": "iter/sec",
            "range": "stddev: 0.000016497008834145832",
            "extra": "mean: 107.95307142887265 usec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.17587633145052,
            "unit": "iter/sec",
            "range": "stddev: 0.00036219813088901544",
            "extra": "mean: 21.65632965624731 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.51695626805857,
            "unit": "iter/sec",
            "range": "stddev: 0.01394045065804692",
            "extra": "mean: 28.97126827272959 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 158.9059604567396,
            "unit": "iter/sec",
            "range": "stddev: 0.0007187398074076525",
            "extra": "mean: 6.2930301489366665 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 252.1920403868522,
            "unit": "iter/sec",
            "range": "stddev: 0.00019460573623135863",
            "extra": "mean: 3.9652322034670133 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 66.717887679208,
            "unit": "iter/sec",
            "range": "stddev: 0.01931928216365203",
            "extra": "mean: 14.988484120003704 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 417.1615899696551,
            "unit": "iter/sec",
            "range": "stddev: 0.00002339153333876772",
            "extra": "mean: 2.3971526239334287 msec\nrounds: 351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4288119.999670725,
            "unit": "iter/sec",
            "range": "stddev: 1.1080059136478539e-8",
            "extra": "mean: 233.20242905464147 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.06955129307553,
            "unit": "iter/sec",
            "range": "stddev: 0.0007063174267325776",
            "extra": "mean: 28.514764607137977 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1583238.1870087807,
            "unit": "iter/sec",
            "range": "stddev: 9.337107705352308e-8",
            "extra": "mean: 631.6169027537825 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 244.43771770751738,
            "unit": "iter/sec",
            "range": "stddev: 0.0008912313896532009",
            "extra": "mean: 4.091021669563093 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.03486657772183,
            "unit": "iter/sec",
            "range": "stddev: 0.00011221431237595353",
            "extra": "mean: 6.94276340000215 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.77825602751489,
            "unit": "iter/sec",
            "range": "stddev: 0.0000687160473984454",
            "extra": "mean: 13.74036772222098 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 518.7055327002626,
            "unit": "iter/sec",
            "range": "stddev: 0.000025871360235375733",
            "extra": "mean: 1.9278761010977237 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 248.94701423886562,
            "unit": "iter/sec",
            "range": "stddev: 0.00023266355959901942",
            "extra": "mean: 4.016919034186512 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.98654379657674,
            "unit": "iter/sec",
            "range": "stddev: 0.00027293794066276383",
            "extra": "mean: 37.05550468181296 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56458.72126031303,
            "unit": "iter/sec",
            "range": "stddev: 5.01418704043306e-7",
            "extra": "mean: 17.712055421682706 usec\nrounds: 13298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.46488617506076,
            "unit": "iter/sec",
            "range": "stddev: 0.00025488842325752624",
            "extra": "mean: 8.16560592373003 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.00021938341804,
            "unit": "iter/sec",
            "range": "stddev: 0.00027747934448251",
            "extra": "mean: 14.925324263154442 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 209.55261115511325,
            "unit": "iter/sec",
            "range": "stddev: 0.008695106487006984",
            "extra": "mean: 4.772071292682622 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 277.32921019160096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000795853121278311",
            "extra": "mean: 3.6058228388892783 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 390641.484507174,
            "unit": "iter/sec",
            "range": "stddev: 3.057953689026639e-7",
            "extra": "mean: 2.5598919716926156 usec\nrounds: 2018"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5967132360589626,
            "unit": "iter/sec",
            "range": "stddev: 0.0016407961085127788",
            "extra": "mean: 626.286534999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4704352.896977663,
            "unit": "iter/sec",
            "range": "stddev: 9.131043678997055e-9",
            "extra": "mean: 212.56908695012396 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6061.218707163401,
            "unit": "iter/sec",
            "range": "stddev: 0.00006030656328562971",
            "extra": "mean: 164.98332238336135 usec\nrounds: 2283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 255.35860176268898,
            "unit": "iter/sec",
            "range": "stddev: 0.00019408388586532996",
            "extra": "mean: 3.9160615428546426 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.72130745634945,
            "unit": "iter/sec",
            "range": "stddev: 0.00010387370504865161",
            "extra": "mean: 6.862414409090778 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.896116721793335,
            "unit": "iter/sec",
            "range": "stddev: 0.0007398609546912733",
            "extra": "mean: 204.24349679999523 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5179.243109445696,
            "unit": "iter/sec",
            "range": "stddev: 0.00004864782699370207",
            "extra": "mean: 193.0784052550536 usec\nrounds: 2512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5872864925770439,
            "unit": "iter/sec",
            "range": "stddev: 0.006922384063671044",
            "extra": "mean: 1.7027464663999807 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10600.545228775774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015073188868598605",
            "extra": "mean: 94.3347703743996 usec\nrounds: 5718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119420.03670634702,
            "unit": "iter/sec",
            "range": "stddev: 3.169815599554231e-7",
            "extra": "mean: 8.37380415866889 usec\nrounds: 34482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.59968749868631,
            "unit": "iter/sec",
            "range": "stddev: 0.0006033996901054193",
            "extra": "mean: 11.28672152500343 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.77565920314724,
            "unit": "iter/sec",
            "range": "stddev: 0.00006524804099204812",
            "extra": "mean: 9.825532036142063 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 146.2562882369357,
            "unit": "iter/sec",
            "range": "stddev: 0.010591982908044606",
            "extra": "mean: 6.8373128571401764 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5849.591062951894,
            "unit": "iter/sec",
            "range": "stddev: 0.00004736258208391343",
            "extra": "mean: 170.95212113774113 usec\nrounds: 2460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1543252.2372115592,
            "unit": "iter/sec",
            "range": "stddev: 8.743709339980889e-8",
            "extra": "mean: 647.9822130741635 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.35771893778144,
            "unit": "iter/sec",
            "range": "stddev: 0.0006536582171438589",
            "extra": "mean: 10.94598257954583 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6102.31014203849,
            "unit": "iter/sec",
            "range": "stddev: 0.000046447544789734576",
            "extra": "mean: 163.87236582930342 usec\nrounds: 2985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2027249.706687249,
            "unit": "iter/sec",
            "range": "stddev: 1.7330492863789378e-8",
            "extra": "mean: 493.27914400555534 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.72661802168908,
            "unit": "iter/sec",
            "range": "stddev: 0.0006162431926131648",
            "extra": "mean: 10.55669484337586 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.625642781548992,
            "unit": "iter/sec",
            "range": "stddev: 0.000984634733457723",
            "extra": "mean: 73.39103307141873 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 984.462407468158,
            "unit": "iter/sec",
            "range": "stddev: 0.000011282864819807785",
            "extra": "mean: 1.0157828195510294 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.94503643555676,
            "unit": "iter/sec",
            "range": "stddev: 0.00007383217921560306",
            "extra": "mean: 10.422634011626732 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.99895876325958,
            "unit": "iter/sec",
            "range": "stddev: 0.0005911228517053834",
            "extra": "mean: 12.048343917811428 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5563020.515615346,
            "unit": "iter/sec",
            "range": "stddev: 5.181102225925325e-9",
            "extra": "mean: 179.75845984981459 nsec\nrounds: 55553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 159.3262091348041,
            "unit": "iter/sec",
            "range": "stddev: 0.00062129757446397",
            "extra": "mean: 6.276431262818232 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1451.093137208646,
            "unit": "iter/sec",
            "range": "stddev: 0.000005349146008703632",
            "extra": "mean: 689.1356415092841 usec\nrounds: 1166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 126.12221952042272,
            "unit": "iter/sec",
            "range": "stddev: 0.0113405613641447",
            "extra": "mean: 7.928817014182595 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10530.00810547959,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023286968686210373",
            "extra": "mean: 94.96668853271078 usec\nrounds: 5869"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1553495.6588694865,
            "unit": "iter/sec",
            "range": "stddev: 9.938909177771948e-8",
            "extra": "mean: 643.7095554729276 nsec\nrounds: 158705"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 330.4321315926032,
            "unit": "iter/sec",
            "range": "stddev: 0.00008434684097155578",
            "extra": "mean: 3.02634006923068 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 267.94326108011705,
            "unit": "iter/sec",
            "range": "stddev: 0.000017265514210422755",
            "extra": "mean: 3.732133422459886 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7544523316669979,
            "unit": "iter/sec",
            "range": "stddev: 0.002564228241474443",
            "extra": "mean: 1.3254647882000086 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.274482945078751,
            "unit": "iter/sec",
            "range": "stddev: 0.000915650470489114",
            "extra": "mean: 439.66036419999455 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.60688455249672,
            "unit": "iter/sec",
            "range": "stddev: 0.00026771762201272214",
            "extra": "mean: 22.418064162789154 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5235.708296655481,
            "unit": "iter/sec",
            "range": "stddev: 0.000049367206940499516",
            "extra": "mean: 190.9961257083001 usec\nrounds: 1941"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 270.8708743653707,
            "unit": "iter/sec",
            "range": "stddev: 0.00009112678933977665",
            "extra": "mean: 3.6917959612413918 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.04130302202543,
            "unit": "iter/sec",
            "range": "stddev: 0.00011856210624580003",
            "extra": "mean: 17.229110098036934 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 160.39098545706133,
            "unit": "iter/sec",
            "range": "stddev: 0.0006390038016605746",
            "extra": "mean: 6.234764361290819 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6036.523084652843,
            "unit": "iter/sec",
            "range": "stddev: 0.00005029681668308331",
            "extra": "mean: 165.65827480099986 usec\nrounds: 3639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.997486794996567,
            "unit": "iter/sec",
            "range": "stddev: 0.003158411283402588",
            "extra": "mean: 111.14214699999252 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 239.65067029025442,
            "unit": "iter/sec",
            "range": "stddev: 0.00021649759452434472",
            "extra": "mean: 4.172740258931234 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 223.2776695213166,
            "unit": "iter/sec",
            "range": "stddev: 0.0003698979063047649",
            "extra": "mean: 4.478728222772536 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.90290091684335,
            "unit": "iter/sec",
            "range": "stddev: 0.00034276614467631416",
            "extra": "mean: 11.376188835292314 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8648187062462666,
            "unit": "iter/sec",
            "range": "stddev: 0.0034269780372864337",
            "extra": "mean: 1.1563117134000094 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 137.504244018642,
            "unit": "iter/sec",
            "range": "stddev: 0.01188147041816894",
            "extra": "mean: 7.272502802636594 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 146.89179022461622,
            "unit": "iter/sec",
            "range": "stddev: 0.0006961176373223597",
            "extra": "mean: 6.807732402681408 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.17375118935058,
            "unit": "iter/sec",
            "range": "stddev: 0.0003115231667242273",
            "extra": "mean: 9.692387729169027 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4525.882265745109,
            "unit": "iter/sec",
            "range": "stddev: 0.000022060343104365756",
            "extra": "mean: 220.95139495091726 usec\nrounds: 2218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 160.06337038950002,
            "unit": "iter/sec",
            "range": "stddev: 0.0006753887215190429",
            "extra": "mean: 6.24752557419345 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15410491961506123,
            "unit": "iter/sec",
            "range": "stddev: 0.05505530971787898",
            "extra": "mean: 6.4890855042 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 576743.1829848973,
            "unit": "iter/sec",
            "range": "stddev: 3.5680615486611226e-7",
            "extra": "mean: 1.7338739832598702 usec\nrounds: 22624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 149.43106025188374,
            "unit": "iter/sec",
            "range": "stddev: 0.00010364083547171573",
            "extra": "mean: 6.692049151725095 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12024031.216360174,
            "unit": "iter/sec",
            "range": "stddev: 2.8128527060591942e-9",
            "extra": "mean: 83.16678341943589 nsec\nrounds: 120482"
          }
        ]
      }
    ]
  }
}
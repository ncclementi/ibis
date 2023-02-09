window.BENCHMARK_DATA = {
  "lastUpdate": 1675945721571,
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
          "id": "d6d8e7ebc5b11ac16819cc0fd06390062f7120e9",
          "message": "fix(api): add a `name` attribute to backend proxy modules",
          "timestamp": "2023-02-09T07:23:29-05:00",
          "tree_id": "680b0cfbb87c86dc1ee0172818ddff9ace0bcf57",
          "url": "https://github.com/ibis-project/ibis/commit/d6d8e7ebc5b11ac16819cc0fd06390062f7120e9"
        },
        "date": 1675945643408,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.36215286242111,
            "unit": "iter/sec",
            "range": "stddev: 0.002586847443052271",
            "extra": "mean: 26.76505295833209 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 81.0116235384339,
            "unit": "iter/sec",
            "range": "stddev: 0.010753416981784293",
            "extra": "mean: 12.34390765573999 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 141.64526775256198,
            "unit": "iter/sec",
            "range": "stddev: 0.0006777706424766673",
            "extra": "mean: 7.059889933964367 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 621.0478529901325,
            "unit": "iter/sec",
            "range": "stddev: 0.000015377445162677376",
            "extra": "mean: 1.610181880808931 msec\nrounds: 495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 240.88390540188783,
            "unit": "iter/sec",
            "range": "stddev: 0.00013715443439162573",
            "extra": "mean: 4.151377396225837 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 270.8846628417491,
            "unit": "iter/sec",
            "range": "stddev: 0.00003410533553700041",
            "extra": "mean: 3.6916080427344102 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5733874367636299,
            "unit": "iter/sec",
            "range": "stddev: 0.06725150211871299",
            "extra": "mean: 1.7440214693999905 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 399.8683135902931,
            "unit": "iter/sec",
            "range": "stddev: 0.00013556846386422188",
            "extra": "mean: 2.5008233111078777 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.18952217050655,
            "unit": "iter/sec",
            "range": "stddev: 0.00009957241129364817",
            "extra": "mean: 11.339215537040664 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5414.966360742986,
            "unit": "iter/sec",
            "range": "stddev: 0.00004864075288681094",
            "extra": "mean: 184.67335406729845 usec\nrounds: 1463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3995.8817636092826,
            "unit": "iter/sec",
            "range": "stddev: 0.000020673480488101943",
            "extra": "mean: 250.25765504551603 usec\nrounds: 1090"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 246.44887266772784,
            "unit": "iter/sec",
            "range": "stddev: 0.0002037918463427483",
            "extra": "mean: 4.057636738911927 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 217.93353324333808,
            "unit": "iter/sec",
            "range": "stddev: 0.00037831203038156733",
            "extra": "mean: 4.58855498333719 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5350657.660036466,
            "unit": "iter/sec",
            "range": "stddev: 4.779416633245418e-9",
            "extra": "mean: 186.89291364477933 nsec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5531.0391327234,
            "unit": "iter/sec",
            "range": "stddev: 0.00004775578628774518",
            "extra": "mean: 180.7978529899887 usec\nrounds: 1789"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 77.13181459965692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005635470524245121",
            "extra": "mean: 12.964818800003286 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.21721937522534,
            "unit": "iter/sec",
            "range": "stddev: 0.0007467749590406094",
            "extra": "mean: 10.843961754377679 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.57995055735257,
            "unit": "iter/sec",
            "range": "stddev: 0.0006745079604729077",
            "extra": "mean: 12.410034916666431 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.7045279193305,
            "unit": "iter/sec",
            "range": "stddev: 0.0008339846439577297",
            "extra": "mean: 10.904586967392358 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.64756306450953,
            "unit": "iter/sec",
            "range": "stddev: 0.0006216681694380708",
            "extra": "mean: 27.28694397059177 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9662.549977390398,
            "unit": "iter/sec",
            "range": "stddev: 0.00003264511470789798",
            "extra": "mean: 103.49234957023984 usec\nrounds: 2792"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 70.4947954410493,
            "unit": "iter/sec",
            "range": "stddev: 0.026348464552020202",
            "extra": "mean: 14.185444382716762 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.14285032706306,
            "unit": "iter/sec",
            "range": "stddev: 0.000515932281523021",
            "extra": "mean: 15.590202102042877 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.05755372188175,
            "unit": "iter/sec",
            "range": "stddev: 0.00020896313430096125",
            "extra": "mean: 14.91256308196771 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10999456.269850705,
            "unit": "iter/sec",
            "range": "stddev: 5.989690011967585e-8",
            "extra": "mean: 90.91358476890136 nsec\nrounds: 107516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 139.23243254004126,
            "unit": "iter/sec",
            "range": "stddev: 0.000651956354300837",
            "extra": "mean: 7.182234639996068 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4653.850820121261,
            "unit": "iter/sec",
            "range": "stddev: 0.000054119494776603777",
            "extra": "mean: 214.87581760816818 usec\nrounds: 3328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.67444492532695,
            "unit": "iter/sec",
            "range": "stddev: 0.00003505433003766625",
            "extra": "mean: 5.824978787232828 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59650.953656362784,
            "unit": "iter/sec",
            "range": "stddev: 5.669559409338138e-7",
            "extra": "mean: 16.764191328118574 usec\nrounds: 13699"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.53905541609538,
            "unit": "iter/sec",
            "range": "stddev: 0.00012674721303311214",
            "extra": "mean: 7.015621066667184 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 237.89326464399963,
            "unit": "iter/sec",
            "range": "stddev: 0.00019819152922684696",
            "extra": "mean: 4.203565836537957 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.61281413848612,
            "unit": "iter/sec",
            "range": "stddev: 0.0007267993885547961",
            "extra": "mean: 28.891034285712585 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.8688146753837,
            "unit": "iter/sec",
            "range": "stddev: 0.019451203090751684",
            "extra": "mean: 8.273432669011367 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4763.171272473946,
            "unit": "iter/sec",
            "range": "stddev: 0.00005539003810178919",
            "extra": "mean: 209.94416173504703 usec\nrounds: 2974"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 241.1490133053974,
            "unit": "iter/sec",
            "range": "stddev: 0.0003146496308666393",
            "extra": "mean: 4.146813566819674 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 615085.1116738818,
            "unit": "iter/sec",
            "range": "stddev: 1.9133977227986062e-7",
            "extra": "mean: 1.625791262088295 usec\nrounds: 19455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 125857.17742119035,
            "unit": "iter/sec",
            "range": "stddev: 3.1773649952507503e-7",
            "extra": "mean: 7.9455142764995115 usec\nrounds: 27248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 154.81086468935865,
            "unit": "iter/sec",
            "range": "stddev: 0.0007220739503761278",
            "extra": "mean: 6.459494958616672 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4492.569543289366,
            "unit": "iter/sec",
            "range": "stddev: 0.00005575520461148618",
            "extra": "mean: 222.58976524775636 usec\nrounds: 2279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.878304870076731,
            "unit": "iter/sec",
            "range": "stddev: 0.00013235957242763952",
            "extra": "mean: 204.9892383999918 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8500420647565935,
            "unit": "iter/sec",
            "range": "stddev: 0.009142490849945699",
            "extra": "mean: 1.1764123700000026 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 155.58869921534088,
            "unit": "iter/sec",
            "range": "stddev: 0.0006452005277459609",
            "extra": "mean: 6.427202007878225 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4586299.201497385,
            "unit": "iter/sec",
            "range": "stddev: 1.435415324005139e-8",
            "extra": "mean: 218.04072435410458 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 68.14996373984394,
            "unit": "iter/sec",
            "range": "stddev: 0.028162116962828068",
            "extra": "mean: 14.673522113928128 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.97837237338993,
            "unit": "iter/sec",
            "range": "stddev: 0.00020942112643320557",
            "extra": "mean: 10.31157747368414 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 246.61266908815736,
            "unit": "iter/sec",
            "range": "stddev: 0.00020118542061361842",
            "extra": "mean: 4.054941717704401 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1501938.3453408023,
            "unit": "iter/sec",
            "range": "stddev: 1.5330112977616082e-7",
            "extra": "mean: 665.8062916511341 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.91515719186756,
            "unit": "iter/sec",
            "range": "stddev: 0.0005796508864028888",
            "extra": "mean: 25.696928193546626 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.51611898675311,
            "unit": "iter/sec",
            "range": "stddev: 0.00015570761606519736",
            "extra": "mean: 9.9486531123609 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.83591353867067,
            "unit": "iter/sec",
            "range": "stddev: 0.00016607646086846421",
            "extra": "mean: 6.673967384607784 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5299055487413251,
            "unit": "iter/sec",
            "range": "stddev: 0.00242909658624833",
            "extra": "mean: 653.6351219999915 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5134.9683554495095,
            "unit": "iter/sec",
            "range": "stddev: 0.00005238514966933759",
            "extra": "mean: 194.7431670029174 usec\nrounds: 1491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10744.30567247373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023379288591564",
            "extra": "mean: 93.07255680205937 usec\nrounds: 4278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 268.36494547157406,
            "unit": "iter/sec",
            "range": "stddev: 0.00004619364615158221",
            "extra": "mean: 3.7262690857138145 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 137.26912773517893,
            "unit": "iter/sec",
            "range": "stddev: 0.00011736611881090374",
            "extra": "mean: 7.284959236640672 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4328067.965417902,
            "unit": "iter/sec",
            "range": "stddev: 1.519704623801085e-8",
            "extra": "mean: 231.04997610715532 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.08184837353485,
            "unit": "iter/sec",
            "range": "stddev: 0.0008906622656240476",
            "extra": "mean: 11.483449406247459 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 517.5529559570151,
            "unit": "iter/sec",
            "range": "stddev: 0.000028112520850161183",
            "extra": "mean: 1.9321694301810812 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.461897044546674,
            "unit": "iter/sec",
            "range": "stddev: 0.0023227679553694393",
            "extra": "mean: 18.70491051162585 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.548414682427754,
            "unit": "iter/sec",
            "range": "stddev: 0.0008959656059276622",
            "extra": "mean: 19.39923867999937 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 250.18362882673154,
            "unit": "iter/sec",
            "range": "stddev: 0.00023567458800768335",
            "extra": "mean: 3.9970640952392817 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 246.19780865414572,
            "unit": "iter/sec",
            "range": "stddev: 0.0002561483891415152",
            "extra": "mean: 4.0617745765754645 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 265.10149483336596,
            "unit": "iter/sec",
            "range": "stddev: 0.000043609507938205015",
            "extra": "mean: 3.772140178344022 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 118.09691232442694,
            "unit": "iter/sec",
            "range": "stddev: 0.022173622220765774",
            "extra": "mean: 8.467621890510358 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.030852254080257,
            "unit": "iter/sec",
            "range": "stddev: 0.0009231693862472009",
            "extra": "mean: 110.73152033333145 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2004293750649704,
            "unit": "iter/sec",
            "range": "stddev: 0.003795304691263128",
            "extra": "mean: 454.45675800000345 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 965.5171839829205,
            "unit": "iter/sec",
            "range": "stddev: 0.000010630614221784492",
            "extra": "mean: 1.035714347283631 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1532417.7622621495,
            "unit": "iter/sec",
            "range": "stddev: 8.916987482980374e-8",
            "extra": "mean: 652.5635662978766 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1671399.7313946653,
            "unit": "iter/sec",
            "range": "stddev: 1.2436674414157067e-7",
            "extra": "mean: 598.3009218061621 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.275379087653118,
            "unit": "iter/sec",
            "range": "stddev: 0.0010013482937015453",
            "extra": "mean: 42.96385447618637 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7282576526881006,
            "unit": "iter/sec",
            "range": "stddev: 0.005353010758808791",
            "extra": "mean: 1.373140393799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1484.914064296493,
            "unit": "iter/sec",
            "range": "stddev: 0.000006386506098015269",
            "extra": "mean: 673.4396447876393 usec\nrounds: 1036"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19352.545438920304,
            "unit": "iter/sec",
            "range": "stddev: 0.000011783382187615521",
            "extra": "mean: 51.672789150975426 usec\nrounds: 3908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8353286847725268,
            "unit": "iter/sec",
            "range": "stddev: 0.00883071374000406",
            "extra": "mean: 1.1971335574000022 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.496372482119614,
            "unit": "iter/sec",
            "range": "stddev: 0.00013427370488461142",
            "extra": "mean: 74.09398349999817 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 391137.9912851889,
            "unit": "iter/sec",
            "range": "stddev: 1.8688983677932128e-7",
            "extra": "mean: 2.5566424696159826 usec\nrounds: 1846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12887698039356438,
            "unit": "iter/sec",
            "range": "stddev: 0.11970059610088142",
            "extra": "mean: 7.759337601999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.41107774471622,
            "unit": "iter/sec",
            "range": "stddev: 0.0003356334245892402",
            "extra": "mean: 8.445155799999652 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10753.066843320212,
            "unit": "iter/sec",
            "range": "stddev: 0.000001784265139607272",
            "extra": "mean: 92.99672498745774 usec\nrounds: 4018"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1519524.58626117,
            "unit": "iter/sec",
            "range": "stddev: 1.0352715624669335e-7",
            "extra": "mean: 658.1005724037188 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 151.9573505984542,
            "unit": "iter/sec",
            "range": "stddev: 0.0007319762170861038",
            "extra": "mean: 6.5807938613150085 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5386.700179015644,
            "unit": "iter/sec",
            "range": "stddev: 0.00005101527275010341",
            "extra": "mean: 185.64240940967653 usec\nrounds: 3422"
          }
        ]
      }
    ]
  }
}
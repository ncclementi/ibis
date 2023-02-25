window.BENCHMARK_DATA = {
  "lastUpdate": 1677325619550,
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
          "id": "d50bec52001dc8218dd22e1058446ae1f0cf8333",
          "message": "chore(deps): bump ruff to 0.252",
          "timestamp": "2023-02-25T06:38:15-05:00",
          "tree_id": "6a0844283a26f50a7e63faff5fe43f1fbb013b41",
          "url": "https://github.com/ibis-project/ibis/commit/d50bec52001dc8218dd22e1058446ae1f0cf8333"
        },
        "date": 1677325527806,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 25.96845199114678,
            "unit": "iter/sec",
            "range": "stddev: 0.0021235319362326375",
            "extra": "mean: 38.5082638095225 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.09795790225686,
            "unit": "iter/sec",
            "range": "stddev: 0.0014913481164495863",
            "extra": "mean: 23.20295551515294 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 3360.3198128254658,
            "unit": "iter/sec",
            "range": "stddev: 0.0004329203560936655",
            "extra": "mean: 297.5907222233016 usec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 185.47509802878028,
            "unit": "iter/sec",
            "range": "stddev: 0.00041289916988054495",
            "extra": "mean: 5.391559355557421 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 40.82283139053212,
            "unit": "iter/sec",
            "range": "stddev: 0.02133253806930139",
            "extra": "mean: 24.496096079997187 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.36042313644064,
            "unit": "iter/sec",
            "range": "stddev: 0.0007543410106910916",
            "extra": "mean: 12.141754035714111 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.704274350415627,
            "unit": "iter/sec",
            "range": "stddev: 0.0014313340227243448",
            "extra": "mean: 31.541488347828736 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.45932828218950594,
            "unit": "iter/sec",
            "range": "stddev: 0.10670578906918404",
            "extra": "mean: 2.1770921556000076 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 211.6049872677996,
            "unit": "iter/sec",
            "range": "stddev: 0.00040394215180163297",
            "extra": "mean: 4.72578653703675 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 61.36072375136537,
            "unit": "iter/sec",
            "range": "stddev: 0.0013706705131179898",
            "extra": "mean: 16.297069833335343 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 64.63249397382735,
            "unit": "iter/sec",
            "range": "stddev: 0.0010340624070500938",
            "extra": "mean: 15.472093656248909 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 118.95838956477284,
            "unit": "iter/sec",
            "range": "stddev: 0.00038928478810214615",
            "extra": "mean: 8.406300754899677 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 56.264910801877406,
            "unit": "iter/sec",
            "range": "stddev: 0.01667680966998504",
            "extra": "mean: 17.773066476924598 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 266335.597548424,
            "unit": "iter/sec",
            "range": "stddev: 0.000014425181114047616",
            "extra": "mean: 3.7546614467042256 usec\nrounds: 1660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.465954810708503,
            "unit": "iter/sec",
            "range": "stddev: 0.004485240284248635",
            "extra": "mean: 57.25424179998981 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 82.25271263990365,
            "unit": "iter/sec",
            "range": "stddev: 0.0016581260314814414",
            "extra": "mean: 12.157653746666407 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 305.0047639867777,
            "unit": "iter/sec",
            "range": "stddev: 0.0004217861126639796",
            "extra": "mean: 3.2786373134924256 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 27.82755695416242,
            "unit": "iter/sec",
            "range": "stddev: 0.0007216815483540002",
            "extra": "mean: 35.93560159259402 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.252785217412,
            "unit": "iter/sec",
            "range": "stddev: 0.001716568203709963",
            "extra": "mean: 11.869043823530907 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.5383332438356532,
            "unit": "iter/sec",
            "range": "stddev: 0.05693621876789585",
            "extra": "mean: 650.0542090000067 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 81.93882840378602,
            "unit": "iter/sec",
            "range": "stddev: 0.0004921789131866508",
            "extra": "mean: 12.20422624390117 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 100.90958245366234,
            "unit": "iter/sec",
            "range": "stddev: 0.0005880653416250952",
            "extra": "mean: 9.909861637364319 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 83.93268494728282,
            "unit": "iter/sec",
            "range": "stddev: 0.0006086148876415956",
            "extra": "mean: 11.914309671233427 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7415.069532325633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000458733818969862",
            "extra": "mean: 134.86050206819354 usec\nrounds: 3384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2611.4717829282204,
            "unit": "iter/sec",
            "range": "stddev: 0.0001911798721080428",
            "extra": "mean: 382.9258300002418 usec\nrounds: 300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 64.92721937111462,
            "unit": "iter/sec",
            "range": "stddev: 0.0010129535092544427",
            "extra": "mean: 15.401860878780965 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2653.1530226200503,
            "unit": "iter/sec",
            "range": "stddev: 0.00015843320481997983",
            "extra": "mean: 376.91003552161374 usec\nrounds: 1661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 470.1315618096647,
            "unit": "iter/sec",
            "range": "stddev: 0.00025496720324578325",
            "extra": "mean: 2.127064169337466 msec\nrounds: 437"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.04029493340543,
            "unit": "iter/sec",
            "range": "stddev: 0.0011311829385669098",
            "extra": "mean: 11.622461322035132 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4075514.9716748013,
            "unit": "iter/sec",
            "range": "stddev: 4.2980696010388345e-7",
            "extra": "mean: 245.36776504310532 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.55130663493834,
            "unit": "iter/sec",
            "range": "stddev: 0.0056448088934062755",
            "extra": "mean: 104.69771709998668 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1071.0515826519213,
            "unit": "iter/sec",
            "range": "stddev: 0.0002777934742100506",
            "extra": "mean: 933.6618480353694 usec\nrounds: 941"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 62.11898206919217,
            "unit": "iter/sec",
            "range": "stddev: 0.0009635462209653292",
            "extra": "mean: 16.098138873012033 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 55.52730251900789,
            "unit": "iter/sec",
            "range": "stddev: 0.0012345147625767573",
            "extra": "mean: 18.009158641511245 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 6102.546545961317,
            "unit": "iter/sec",
            "range": "stddev: 0.00007128895622719519",
            "extra": "mean: 163.86601764828862 usec\nrounds: 4023"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 469723.0509214772,
            "unit": "iter/sec",
            "range": "stddev: 0.000014090531041813176",
            "extra": "mean: 2.1289140442187247 usec\nrounds: 17730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 72.78913672056282,
            "unit": "iter/sec",
            "range": "stddev: 0.0008985967922261252",
            "extra": "mean: 13.738313779417327 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1414064.6037002243,
            "unit": "iter/sec",
            "range": "stddev: 0.000002446024992689415",
            "extra": "mean: 707.1812683686945 nsec\nrounds: 102031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2251.630151916818,
            "unit": "iter/sec",
            "range": "stddev: 0.0002458461787517155",
            "extra": "mean: 444.1226722553426 usec\nrounds: 1193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 110.26787042968573,
            "unit": "iter/sec",
            "range": "stddev: 0.0006980392317666389",
            "extra": "mean: 9.068824818174644 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 73.26383341906607,
            "unit": "iter/sec",
            "range": "stddev: 0.01824911101222656",
            "extra": "mean: 13.649299433733445 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 167.88831459744048,
            "unit": "iter/sec",
            "range": "stddev: 0.0004530143968504417",
            "extra": "mean: 5.956340692309536 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.194990980216774,
            "unit": "iter/sec",
            "range": "stddev: 0.0016760081113538754",
            "extra": "mean: 161.42073542857815 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.9836076110304137,
            "unit": "iter/sec",
            "range": "stddev: 0.04919625392067584",
            "extra": "mean: 1.0166655776000084 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1197539.666863249,
            "unit": "iter/sec",
            "range": "stddev: 0.000003486469347046867",
            "extra": "mean: 835.0454082404882 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.89402460665384,
            "unit": "iter/sec",
            "range": "stddev: 0.0008287209232242766",
            "extra": "mean: 35.849971959996765 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.593537360849081,
            "unit": "iter/sec",
            "range": "stddev: 0.002856121961045773",
            "extra": "mean: 278.2773349999957 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4052425479869011,
            "unit": "iter/sec",
            "range": "stddev: 0.07356613651242727",
            "extra": "mean: 2.467657961800012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 68.93963495795579,
            "unit": "iter/sec",
            "range": "stddev: 0.0007508245892130843",
            "extra": "mean: 14.50544379310784 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3651163.885733336,
            "unit": "iter/sec",
            "range": "stddev: 4.682316852023025e-7",
            "extra": "mean: 273.88526817597864 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 60.917556892708156,
            "unit": "iter/sec",
            "range": "stddev: 0.0008180460707776198",
            "extra": "mean: 16.415628777780157 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 61.00618333325259,
            "unit": "iter/sec",
            "range": "stddev: 0.0013598926519881598",
            "extra": "mean: 16.391781051723832 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 408.990410128334,
            "unit": "iter/sec",
            "range": "stddev: 0.00018773174791905816",
            "extra": "mean: 2.445045104324616 msec\nrounds: 393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.46542969825353,
            "unit": "iter/sec",
            "range": "stddev: 0.0009971414220480337",
            "extra": "mean: 11.839163117649738 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2396.643713783066,
            "unit": "iter/sec",
            "range": "stddev: 0.00013056600039938846",
            "extra": "mean: 417.2501712494909 usec\nrounds: 2073"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 47.77258467343178,
            "unit": "iter/sec",
            "range": "stddev: 0.0017607309416417174",
            "extra": "mean: 20.932507772729736 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1200772.5045491979,
            "unit": "iter/sec",
            "range": "stddev: 0.000003974207351859891",
            "extra": "mean: 832.7972169677776 nsec\nrounds: 111099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 712.5180517459152,
            "unit": "iter/sec",
            "range": "stddev: 0.00026457892940316436",
            "extra": "mean: 1.4034732138359933 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2343.8136881887203,
            "unit": "iter/sec",
            "range": "stddev: 0.00011909174500618707",
            "extra": "mean: 426.65507290077807 usec\nrounds: 1358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 188.0107558060798,
            "unit": "iter/sec",
            "range": "stddev: 0.0003621902868916734",
            "extra": "mean: 5.318844635843235 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 88.60780509095295,
            "unit": "iter/sec",
            "range": "stddev: 0.0012054603498877865",
            "extra": "mean: 11.285687518989251 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08187779033704333,
            "unit": "iter/sec",
            "range": "stddev: 0.0715288228163984",
            "extra": "mean: 12.2133242224 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2608.507205897178,
            "unit": "iter/sec",
            "range": "stddev: 0.0001453538816817597",
            "extra": "mean: 383.36102646726516 usec\nrounds: 1398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 167.21425848311577,
            "unit": "iter/sec",
            "range": "stddev: 0.0006854161313001126",
            "extra": "mean: 5.980351251570892 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3410065.774287437,
            "unit": "iter/sec",
            "range": "stddev: 6.070866202112559e-7",
            "extra": "mean: 293.24947557948667 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 173.91399457743256,
            "unit": "iter/sec",
            "range": "stddev: 0.0005728560875649516",
            "extra": "mean: 5.749968554455606 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9210151.37108561,
            "unit": "iter/sec",
            "range": "stddev: 1.6278408496417286e-7",
            "extra": "mean: 108.57584850768534 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 208.79535201505075,
            "unit": "iter/sec",
            "range": "stddev: 0.00032957762377962746",
            "extra": "mean: 4.789378644443753 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5339614316812971,
            "unit": "iter/sec",
            "range": "stddev: 0.04626575603495058",
            "extra": "mean: 1.8727944391999927 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1177519.2892591269,
            "unit": "iter/sec",
            "range": "stddev: 0.000004181747956436376",
            "extra": "mean: 849.2429883073773 nsec\nrounds: 129854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 147.93156030410256,
            "unit": "iter/sec",
            "range": "stddev: 0.0007495230290144601",
            "extra": "mean: 6.759882731881569 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2744.2329146934835,
            "unit": "iter/sec",
            "range": "stddev: 0.00012422904588969784",
            "extra": "mean: 364.40055603359554 usec\nrounds: 1624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2526.1037556599317,
            "unit": "iter/sec",
            "range": "stddev: 0.00012300916058069548",
            "extra": "mean: 395.8665584338816 usec\nrounds: 1583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5310574022914677,
            "unit": "iter/sec",
            "range": "stddev: 0.056296304456395836",
            "extra": "mean: 1.8830356110000253 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.9377858373409,
            "unit": "iter/sec",
            "range": "stddev: 0.0015103474254674202",
            "extra": "mean: 18.53987857446874 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 160.83670399582215,
            "unit": "iter/sec",
            "range": "stddev: 0.000514740940169277",
            "extra": "mean: 6.217486277423191 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 100427.92439583033,
            "unit": "iter/sec",
            "range": "stddev: 0.000012804938242627947",
            "extra": "mean: 9.957389899432384 usec\nrounds: 30395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 169.43137156664952,
            "unit": "iter/sec",
            "range": "stddev: 0.0006464723091770123",
            "extra": "mean: 5.90209469918992 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 78.48725935359482,
            "unit": "iter/sec",
            "range": "stddev: 0.0010148325274419866",
            "extra": "mean: 12.74092137037014 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7968.129062112499,
            "unit": "iter/sec",
            "range": "stddev: 0.000053620990973801816",
            "extra": "mean: 125.4999752394675 usec\nrounds: 4806"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 46054.061395825,
            "unit": "iter/sec",
            "range": "stddev: 0.00004327501978504044",
            "extra": "mean: 21.71361156196865 usec\nrounds: 9479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 118.56921259242473,
            "unit": "iter/sec",
            "range": "stddev: 0.000577041769513961",
            "extra": "mean: 8.433892560604633 msec\nrounds: 66"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1680025170077,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "e91f4950ac6ec918e8f63211955d4cc7fee2701e",
          "message": "refactor(api): remove deprecated `Table.sort_by()` and `Table.groupby()` methods\n\nBREAKING CHANGE: removed `Table.sort_by()` and `Table.groupby()`, use `.order_by()` and `.group_by()` respectively",
          "timestamp": "2023-03-28T19:34:12+02:00",
          "tree_id": "7a74ac98330e489dc1f994bc2bd3fdb937874d57",
          "url": "https://github.com/ibis-project/ibis/commit/e91f4950ac6ec918e8f63211955d4cc7fee2701e"
        },
        "date": 1680025091670,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6814751909869174,
            "unit": "iter/sec",
            "range": "stddev: 0.028314408828031632",
            "extra": "mean: 1.467404849400009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5557.800442456785,
            "unit": "iter/sec",
            "range": "stddev: 0.000055593444945764215",
            "extra": "mean: 179.9272950429932 usec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8343445129941293,
            "unit": "iter/sec",
            "range": "stddev: 0.0004705264650620302",
            "extra": "mean: 1.198545666000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 116.38374387141721,
            "unit": "iter/sec",
            "range": "stddev: 0.0005383535623234098",
            "extra": "mean: 8.59226526605655 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.158004080183957,
            "unit": "iter/sec",
            "range": "stddev: 0.000569897831215649",
            "extra": "mean: 38.22921645453645 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8910069170338814,
            "unit": "iter/sec",
            "range": "stddev: 0.004817014930897327",
            "extra": "mean: 1.1223257428000124 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.29170384216596,
            "unit": "iter/sec",
            "range": "stddev: 0.00005645853248138035",
            "extra": "mean: 10.385110659575865 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1972813.3522783688,
            "unit": "iter/sec",
            "range": "stddev: 8.490307631421165e-8",
            "extra": "mean: 506.89032434067667 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.09276791045691,
            "unit": "iter/sec",
            "range": "stddev: 0.00022697761826712763",
            "extra": "mean: 8.326896093739933 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.521194622228064,
            "unit": "iter/sec",
            "range": "stddev: 0.00012034771717672421",
            "extra": "mean: 64.42803046666843 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73830.1135153483,
            "unit": "iter/sec",
            "range": "stddev: 6.586409803229451e-7",
            "extra": "mean: 13.544608729229616 usec\nrounds: 14205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.10724901821025,
            "unit": "iter/sec",
            "range": "stddev: 0.00006995642188938197",
            "extra": "mean: 8.920029781816911 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.52727236924311,
            "unit": "iter/sec",
            "range": "stddev: 0.0021024945012528048",
            "extra": "mean: 10.149474109588425 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.80579676196719,
            "unit": "iter/sec",
            "range": "stddev: 0.0006466998254004435",
            "extra": "mean: 9.275939049993553 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 317.89907330274855,
            "unit": "iter/sec",
            "range": "stddev: 0.00018402931088815633",
            "extra": "mean: 3.145652453814039 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13922.338366931112,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013603422858413698",
            "extra": "mean: 71.82701451756407 usec\nrounds: 6888"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.50717551530434,
            "unit": "iter/sec",
            "range": "stddev: 0.00002405031164126977",
            "extra": "mean: 5.2217364561365205 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16906256636108333,
            "unit": "iter/sec",
            "range": "stddev: 0.06250177499111818",
            "extra": "mean: 5.914969951799992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.94679670198149,
            "unit": "iter/sec",
            "range": "stddev: 0.0002525978647710721",
            "extra": "mean: 20.43034615908823 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 738.0502715853343,
            "unit": "iter/sec",
            "range": "stddev: 0.00005970376347479204",
            "extra": "mean: 1.3549212546890566 msec\nrounds: 640"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5281.888394689642,
            "unit": "iter/sec",
            "range": "stddev: 0.00004755600598149068",
            "extra": "mean: 189.32622677249108 usec\nrounds: 2271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1169.110475250352,
            "unit": "iter/sec",
            "range": "stddev: 0.00006032173363485573",
            "extra": "mean: 855.3511589962113 usec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5717.3671524341435,
            "unit": "iter/sec",
            "range": "stddev: 0.00004736184669669415",
            "extra": "mean: 174.90568181794214 usec\nrounds: 330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6129713.6643969305,
            "unit": "iter/sec",
            "range": "stddev: 2.015311819841818e-8",
            "extra": "mean: 163.1397573767624 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 788900.7313965862,
            "unit": "iter/sec",
            "range": "stddev: 1.5456453107788942e-7",
            "extra": "mean: 1.2675866052623708 usec\nrounds: 19306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.36411549539864,
            "unit": "iter/sec",
            "range": "stddev: 0.02101106225446447",
            "extra": "mean: 26.06602516666751 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.90488915271082,
            "unit": "iter/sec",
            "range": "stddev: 0.0006173636907692609",
            "extra": "mean: 8.270964119051746 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.19678176727969,
            "unit": "iter/sec",
            "range": "stddev: 0.00008985848424345655",
            "extra": "mean: 15.338180396227317 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12670.961027106365,
            "unit": "iter/sec",
            "range": "stddev: 0.000001727904094521679",
            "extra": "mean: 78.92061208780842 usec\nrounds: 6370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.90142066819203,
            "unit": "iter/sec",
            "range": "stddev: 0.00024296284449370985",
            "extra": "mean: 3.2690269885496512 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.22734811781358,
            "unit": "iter/sec",
            "range": "stddev: 0.0005516742538960455",
            "extra": "mean: 22.610444499999925 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.3916295741081,
            "unit": "iter/sec",
            "range": "stddev: 0.000606608417254407",
            "extra": "mean: 8.306225304346773 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.51590583327827,
            "unit": "iter/sec",
            "range": "stddev: 0.0006159499762662646",
            "extra": "mean: 8.229375349199271 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149163.2055235904,
            "unit": "iter/sec",
            "range": "stddev: 3.163360880081077e-7",
            "extra": "mean: 6.704066170271784 usec\nrounds: 37736"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 242.77312508702937,
            "unit": "iter/sec",
            "range": "stddev: 0.003906649909778684",
            "extra": "mean: 4.119072074561465 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 307.3717683925171,
            "unit": "iter/sec",
            "range": "stddev: 0.00023334858995937676",
            "extra": "mean: 3.2533892270905933 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.33659872902993,
            "unit": "iter/sec",
            "range": "stddev: 0.0005526963346116517",
            "extra": "mean: 8.746105893616207 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5410.409703625069,
            "unit": "iter/sec",
            "range": "stddev: 0.00005086074547428833",
            "extra": "mean: 184.82888630966016 usec\nrounds: 2929"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5280.200657473337,
            "unit": "iter/sec",
            "range": "stddev: 0.00004990674263730827",
            "extra": "mean: 189.38674207099479 usec\nrounds: 1671"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 107.68711450824682,
            "unit": "iter/sec",
            "range": "stddev: 0.0005192460152805167",
            "extra": "mean: 9.28616208695441 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 164.69173407996328,
            "unit": "iter/sec",
            "range": "stddev: 0.00005854871103487298",
            "extra": "mean: 6.071950153335971 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 286.1358334505468,
            "unit": "iter/sec",
            "range": "stddev: 0.00023549253182693033",
            "extra": "mean: 3.4948436480005967 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5985955268890577,
            "unit": "iter/sec",
            "range": "stddev: 0.0022410431626600697",
            "extra": "mean: 384.8232592000045 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5306.704920591395,
            "unit": "iter/sec",
            "range": "stddev: 0.000048644453215229096",
            "extra": "mean: 188.44085265034047 usec\nrounds: 2226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.4166869811603,
            "unit": "iter/sec",
            "range": "stddev: 0.000026466825090197998",
            "extra": "mean: 1.847006241303377 msec\nrounds: 460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 114.12065177856172,
            "unit": "iter/sec",
            "range": "stddev: 0.01596886537256669",
            "extra": "mean: 8.762655877048333 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2702618.7257319316,
            "unit": "iter/sec",
            "range": "stddev: 1.603631424480938e-8",
            "extra": "mean: 370.0114968046634 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.6063588181948,
            "unit": "iter/sec",
            "range": "stddev: 0.00026749186317438523",
            "extra": "mean: 3.315579962963545 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.04528260161945,
            "unit": "iter/sec",
            "range": "stddev: 0.0002120124230636331",
            "extra": "mean: 6.209433668875094 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.31549396111994,
            "unit": "iter/sec",
            "range": "stddev: 0.0001758494346290376",
            "extra": "mean: 10.832417799997529 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.4473594291439,
            "unit": "iter/sec",
            "range": "stddev: 0.0000351354359215619",
            "extra": "mean: 3.4429646802967584 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.68591623734534,
            "unit": "iter/sec",
            "range": "stddev: 0.0007024238827704445",
            "extra": "mean: 9.286265418366764 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.6795342521914,
            "unit": "iter/sec",
            "range": "stddev: 0.000025630519048366957",
            "extra": "mean: 3.4520906096507757 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5603.989739284221,
            "unit": "iter/sec",
            "range": "stddev: 0.00005559222283281414",
            "extra": "mean: 178.444295318736 usec\nrounds: 2350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.49870322836804,
            "unit": "iter/sec",
            "range": "stddev: 0.0006387891214814305",
            "extra": "mean: 8.368291646554102 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12095.774661980186,
            "unit": "iter/sec",
            "range": "stddev: 0.000012283650931369994",
            "extra": "mean: 82.67349780772876 usec\nrounds: 4333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.9327252531531,
            "unit": "iter/sec",
            "range": "stddev: 0.000398692723674661",
            "extra": "mean: 15.6414417818155 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 300.46480986513427,
            "unit": "iter/sec",
            "range": "stddev: 0.00019263718919082049",
            "extra": "mean: 3.3281767686833508 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11531877.391345497,
            "unit": "iter/sec",
            "range": "stddev: 2.7917030136960797e-9",
            "extra": "mean: 86.71614916325322 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 117.98502598403665,
            "unit": "iter/sec",
            "range": "stddev: 0.0006916929313349974",
            "extra": "mean: 8.475651818183264 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 505887.9189909492,
            "unit": "iter/sec",
            "range": "stddev: 1.6289726159415097e-7",
            "extra": "mean: 1.9767224368484888 usec\nrounds: 2086"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.0464074593307,
            "unit": "iter/sec",
            "range": "stddev: 0.000026865286366287238",
            "extra": "mean: 1.4576273399686606 msec\nrounds: 603"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 169.1791827923291,
            "unit": "iter/sec",
            "range": "stddev: 0.0037781787566012657",
            "extra": "mean: 5.910892720338532 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.43629512903081,
            "unit": "iter/sec",
            "range": "stddev: 0.0006776416227547056",
            "extra": "mean: 9.222004484845938 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.49206539123252,
            "unit": "iter/sec",
            "range": "stddev: 0.0006649317234833631",
            "extra": "mean: 9.662576509799916 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 332.1640722447896,
            "unit": "iter/sec",
            "range": "stddev: 0.000011056466543290102",
            "extra": "mean: 3.010560393368028 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5568697.432867736,
            "unit": "iter/sec",
            "range": "stddev: 9.117872286721083e-9",
            "extra": "mean: 179.57520803668146 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.600997537661041,
            "unit": "iter/sec",
            "range": "stddev: 0.0002082699521350092",
            "extra": "mean: 178.5396250000133 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 309.8222899026991,
            "unit": "iter/sec",
            "range": "stddev: 0.0001875053021357963",
            "extra": "mean: 3.227656732877592 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.53431170937546,
            "unit": "iter/sec",
            "range": "stddev: 0.0005995965321512612",
            "extra": "mean: 9.658633775506576 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1789.7211314465585,
            "unit": "iter/sec",
            "range": "stddev: 0.000005067811941292726",
            "extra": "mean: 558.7462663480655 usec\nrounds: 1468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.10428859285331,
            "unit": "iter/sec",
            "range": "stddev: 0.020830494066937814",
            "extra": "mean: 11.750289163265219 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.66046428182444,
            "unit": "iter/sec",
            "range": "stddev: 0.0002710933888808416",
            "extra": "mean: 17.047256823533928 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.583749493580138,
            "unit": "iter/sec",
            "range": "stddev: 0.00020876589879592427",
            "extra": "mean: 94.48447363635896 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5586.584793620771,
            "unit": "iter/sec",
            "range": "stddev: 0.000021118534315750163",
            "extra": "mean: 179.0002366279097 usec\nrounds: 2337"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8865562037980235,
            "unit": "iter/sec",
            "range": "stddev: 0.005330907748193162",
            "extra": "mean: 1.1279600726000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7152314327175873,
            "unit": "iter/sec",
            "range": "stddev: 0.0015823522136384327",
            "extra": "mean: 583.0117038000026 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.38421675883197,
            "unit": "iter/sec",
            "range": "stddev: 0.0007094611788007707",
            "extra": "mean: 10.70844768749879 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5690.941362329612,
            "unit": "iter/sec",
            "range": "stddev: 0.00005030921427131217",
            "extra": "mean: 175.71785339756963 usec\nrounds: 3547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1991623.96984576,
            "unit": "iter/sec",
            "range": "stddev: 1.437327925096629e-7",
            "extra": "mean: 502.10281415594955 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.51457384062357,
            "unit": "iter/sec",
            "range": "stddev: 0.0006147757187043325",
            "extra": "mean: 8.36718040206152 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 305.4060958195509,
            "unit": "iter/sec",
            "range": "stddev: 0.00026195935230819144",
            "extra": "mean: 3.27432888108052 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.44854004222304,
            "unit": "iter/sec",
            "range": "stddev: 0.000051039532026289686",
            "extra": "mean: 6.232527885494276 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2515908.420364731,
            "unit": "iter/sec",
            "range": "stddev: 1.6513600698882735e-8",
            "extra": "mean: 397.4707473076653 nsec\nrounds: 108684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8300.864055253112,
            "unit": "iter/sec",
            "range": "stddev: 0.00003313719221888477",
            "extra": "mean: 120.46938648117732 usec\nrounds: 3299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.128024558116174,
            "unit": "iter/sec",
            "range": "stddev: 0.03209184136965806",
            "extra": "mean: 27.67934345237677 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7044819.210893687,
            "unit": "iter/sec",
            "range": "stddev: 5.0691971370473986e-9",
            "extra": "mean: 141.94828427300075 nsec\nrounds: 65360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.34544605471763,
            "unit": "iter/sec",
            "range": "stddev: 0.00026347081302259036",
            "extra": "mean: 13.2722022678554 msec\nrounds: 56"
          }
        ]
      }
    ]
  }
}
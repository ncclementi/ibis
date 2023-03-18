window.BENCHMARK_DATA = {
  "lastUpdate": 1679099550163,
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
          "id": "4fb2fd0ec0c8bf37cb3931eb1b79548d47935660",
          "message": "chore(flake/flake-utils): `3db36a8b` -> `93a2b84f`",
          "timestamp": "2023-03-18T00:27:09Z",
          "tree_id": "1c97db76f04dfc813b71f549b4e76daab212c3ca",
          "url": "https://github.com/ibis-project/ibis/commit/4fb2fd0ec0c8bf37cb3931eb1b79548d47935660"
        },
        "date": 1679099451581,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 155.65078150057386,
            "unit": "iter/sec",
            "range": "stddev: 0.004023117928508973",
            "extra": "mean: 6.424638478261115 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 117.88715183704919,
            "unit": "iter/sec",
            "range": "stddev: 0.010966002816078147",
            "extra": "mean: 8.482688608698096 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.63477684639538,
            "unit": "iter/sec",
            "range": "stddev: 0.0006181080755299958",
            "extra": "mean: 9.2051553750044 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 290.86726698273446,
            "unit": "iter/sec",
            "range": "stddev: 0.00004363733977621771",
            "extra": "mean: 3.437994279567246 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 316.5575986069134,
            "unit": "iter/sec",
            "range": "stddev: 0.0002293165457289916",
            "extra": "mean: 3.15898277091037 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 328.9114838897993,
            "unit": "iter/sec",
            "range": "stddev: 0.000045531542806040636",
            "extra": "mean: 3.0403316666652076 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5409.715765782321,
            "unit": "iter/sec",
            "range": "stddev: 0.000049744932355625475",
            "extra": "mean: 184.8525954589383 usec\nrounds: 1938"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.48594967185707,
            "unit": "iter/sec",
            "range": "stddev: 0.00018458424867361643",
            "extra": "mean: 6.270144812489775 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1820.8157044408138,
            "unit": "iter/sec",
            "range": "stddev: 0.000006115313992893789",
            "extra": "mean: 549.204401939793 usec\nrounds: 1341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 690.2062514466234,
            "unit": "iter/sec",
            "range": "stddev: 0.00005602372068115872",
            "extra": "mean: 1.4488422814254014 msec\nrounds: 533"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5801.004349145806,
            "unit": "iter/sec",
            "range": "stddev: 0.000046065397768993335",
            "extra": "mean: 172.3839424714876 usec\nrounds: 2225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 107.4395658932715,
            "unit": "iter/sec",
            "range": "stddev: 0.0005748045596019634",
            "extra": "mean: 9.30755808333572 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4137.952150320106,
            "unit": "iter/sec",
            "range": "stddev: 0.002414385038037495",
            "extra": "mean: 241.66543344940357 usec\nrounds: 2870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5703.683649150994,
            "unit": "iter/sec",
            "range": "stddev: 0.00005062978761711157",
            "extra": "mean: 175.32529177856003 usec\nrounds: 377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1996905.75658986,
            "unit": "iter/sec",
            "range": "stddev: 1.1587295183947307e-7",
            "extra": "mean: 500.7747594997733 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1909567.6984653424,
            "unit": "iter/sec",
            "range": "stddev: 9.041159900630679e-7",
            "extra": "mean: 523.6787367128526 nsec\nrounds: 116266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.810382297593385,
            "unit": "iter/sec",
            "range": "stddev: 0.00045831046216285006",
            "extra": "mean: 27.92486245161377 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.5676634436612,
            "unit": "iter/sec",
            "range": "stddev: 0.0006240027159017017",
            "extra": "mean: 10.463790407406133 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 488897.1160097605,
            "unit": "iter/sec",
            "range": "stddev: 5.052104393097105e-7",
            "extra": "mean: 2.0454201247119563 usec\nrounds: 1928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.84908790016314,
            "unit": "iter/sec",
            "range": "stddev: 0.0006467816443640278",
            "extra": "mean: 8.274783181037563 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7077075105872879,
            "unit": "iter/sec",
            "range": "stddev: 0.0028612413836470764",
            "extra": "mean: 585.5803724000111 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5753.120340019331,
            "unit": "iter/sec",
            "range": "stddev: 0.00004816875657350962",
            "extra": "mean: 173.81871765203505 usec\nrounds: 2249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 759.0549746999393,
            "unit": "iter/sec",
            "range": "stddev: 0.000027329506411637934",
            "extra": "mean: 1.3174276347972138 msec\nrounds: 638"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.58415796657592,
            "unit": "iter/sec",
            "range": "stddev: 0.0007249158205416948",
            "extra": "mean: 8.36231167241653 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16919468241538396,
            "unit": "iter/sec",
            "range": "stddev: 0.07474459524452469",
            "extra": "mean: 5.910351233999984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1178.0586438972016,
            "unit": "iter/sec",
            "range": "stddev: 0.000019895572965165285",
            "extra": "mean: 848.854176471083 usec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 105.63874254401378,
            "unit": "iter/sec",
            "range": "stddev: 0.013107776262335523",
            "extra": "mean: 9.466224000000338 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145556.2149585087,
            "unit": "iter/sec",
            "range": "stddev: 6.028720740228728e-7",
            "extra": "mean: 6.870197883924458 usec\nrounds: 41494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.17943966744282,
            "unit": "iter/sec",
            "range": "stddev: 0.00025799145133862105",
            "extra": "mean: 11.34051207142355 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.651807368353453,
            "unit": "iter/sec",
            "range": "stddev: 0.000689335680588802",
            "extra": "mean: 176.9345511666529 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 789104.8838351914,
            "unit": "iter/sec",
            "range": "stddev: 1.7163051552717353e-7",
            "extra": "mean: 1.267258662929344 usec\nrounds: 26954"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.30532627941548,
            "unit": "iter/sec",
            "range": "stddev: 0.0006315176199293994",
            "extra": "mean: 8.24366110434915 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8688639648406141,
            "unit": "iter/sec",
            "range": "stddev: 0.009617355931266855",
            "extra": "mean: 1.1509281550000083 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.350710049839485,
            "unit": "iter/sec",
            "range": "stddev: 0.00048372370917940967",
            "extra": "mean: 21.574642522730095 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.026426012211882,
            "unit": "iter/sec",
            "range": "stddev: 0.0006319807151746503",
            "extra": "mean: 47.5592000000006 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5041.61420372286,
            "unit": "iter/sec",
            "range": "stddev: 0.000044064865426541564",
            "extra": "mean: 198.34917143433424 usec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.70549160626062,
            "unit": "iter/sec",
            "range": "stddev: 0.0006382193108369312",
            "extra": "mean: 8.2846272086939 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.500520281871,
            "unit": "iter/sec",
            "range": "stddev: 0.00018801057789165715",
            "extra": "mean: 6.042277077418593 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 315.2610947067826,
            "unit": "iter/sec",
            "range": "stddev: 0.00020404072475967247",
            "extra": "mean: 3.1719740138886405 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.55118409794935,
            "unit": "iter/sec",
            "range": "stddev: 0.00009986069351291026",
            "extra": "mean: 10.465595057146565 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.15222124784481,
            "unit": "iter/sec",
            "range": "stddev: 0.0004901722157910116",
            "extra": "mean: 21.20790863157284 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.48030621216338,
            "unit": "iter/sec",
            "range": "stddev: 0.00019266382535697776",
            "extra": "mean: 10.36480955813891 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1878501.2993568943,
            "unit": "iter/sec",
            "range": "stddev: 9.061591242646157e-8",
            "extra": "mean: 532.339264467025 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.888579762417,
            "unit": "iter/sec",
            "range": "stddev: 0.000281533926134192",
            "extra": "mean: 3.216586472118745 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.5067754945409,
            "unit": "iter/sec",
            "range": "stddev: 0.00020532089313415595",
            "extra": "mean: 3.3057110815623574 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11960180.199759437,
            "unit": "iter/sec",
            "range": "stddev: 3.964905249772414e-9",
            "extra": "mean: 83.61078038101843 nsec\nrounds: 113624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.81549412852774,
            "unit": "iter/sec",
            "range": "stddev: 0.0062257839436162055",
            "extra": "mean: 1.2262503983999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5457.284087843526,
            "unit": "iter/sec",
            "range": "stddev: 0.00005481033951638394",
            "extra": "mean: 183.24133101803668 usec\nrounds: 1728"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 280.6236751715217,
            "unit": "iter/sec",
            "range": "stddev: 0.00031970545210742717",
            "extra": "mean: 3.563491210742586 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5494302.172870329,
            "unit": "iter/sec",
            "range": "stddev: 1.1358187687303676e-8",
            "extra": "mean: 182.00673507507173 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 225.25915573105692,
            "unit": "iter/sec",
            "range": "stddev: 0.004152686067650835",
            "extra": "mean: 4.439331208334668 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73640.87628948886,
            "unit": "iter/sec",
            "range": "stddev: 0.000002357517005526899",
            "extra": "mean: 13.579414727072374 usec\nrounds: 12331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5165.585329012393,
            "unit": "iter/sec",
            "range": "stddev: 0.000026397822306384953",
            "extra": "mean: 193.58890354274521 usec\nrounds: 1327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.35644029205574,
            "unit": "iter/sec",
            "range": "stddev: 0.00011781385159749477",
            "extra": "mean: 6.1592875416653925 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.15193993761613,
            "unit": "iter/sec",
            "range": "stddev: 0.00024203900869411974",
            "extra": "mean: 13.306376399998499 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.00340072195473,
            "unit": "iter/sec",
            "range": "stddev: 0.00013498599362316718",
            "extra": "mean: 8.928300333330697 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.859517267110035,
            "unit": "iter/sec",
            "range": "stddev: 0.012907976474627665",
            "extra": "mean: 1.1634437587999968 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.25718420715145,
            "unit": "iter/sec",
            "range": "stddev: 0.0005853719995403243",
            "extra": "mean: 8.676248746479027 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.5446577420115,
            "unit": "iter/sec",
            "range": "stddev: 0.00024462512828082005",
            "extra": "mean: 15.736964137252194 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.405830282562881,
            "unit": "iter/sec",
            "range": "stddev: 0.003249804542670401",
            "extra": "mean: 415.65691780000407 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.92262168103443,
            "unit": "iter/sec",
            "range": "stddev: 0.051748856460336064",
            "extra": "mean: 112.07468340001014 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.2646052371821,
            "unit": "iter/sec",
            "range": "stddev: 0.00021307446799438213",
            "extra": "mean: 3.243966329610204 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.79776736640349,
            "unit": "iter/sec",
            "range": "stddev: 0.00012700896218257747",
            "extra": "mean: 8.34740097402219 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.87035486657383,
            "unit": "iter/sec",
            "range": "stddev: 0.0007270135504857182",
            "extra": "mean: 9.913715494733305 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12133.438359033325,
            "unit": "iter/sec",
            "range": "stddev: 0.000036171507764308616",
            "extra": "mean: 82.4168690201077 usec\nrounds: 5100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.827632523462471,
            "unit": "iter/sec",
            "range": "stddev: 0.00008522477363464835",
            "extra": "mean: 63.180642999995484 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1916924.7738091087,
            "unit": "iter/sec",
            "range": "stddev: 9.190734718584447e-8",
            "extra": "mean: 521.6688801057678 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13878.355299455812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015214253285055168",
            "extra": "mean: 72.05464757334835 usec\nrounds: 5377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.66736568764444,
            "unit": "iter/sec",
            "range": "stddev: 0.08136186785260617",
            "extra": "mean: 1.498428850200014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 318.5556099924379,
            "unit": "iter/sec",
            "range": "stddev: 0.00021422441113423316",
            "extra": "mean: 3.1391693275272687 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.02175023727792,
            "unit": "iter/sec",
            "range": "stddev: 0.0008895739336989457",
            "extra": "mean: 27.01114867857005 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.53990637404326,
            "unit": "iter/sec",
            "range": "stddev: 0.00139312648816921",
            "extra": "mean: 29.815229322581114 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.92764993998425,
            "unit": "iter/sec",
            "range": "stddev: 0.01819044803218769",
            "extra": "mean: 10.646492280377048 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5926322.806276533,
            "unit": "iter/sec",
            "range": "stddev: 8.57582583773167e-9",
            "extra": "mean: 168.73869896875706 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7007524.025737019,
            "unit": "iter/sec",
            "range": "stddev: 4.838848659899664e-9",
            "extra": "mean: 142.7037561808119 nsec\nrounds: 62497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.12999405082938,
            "unit": "iter/sec",
            "range": "stddev: 0.0010030928462451203",
            "extra": "mean: 9.334453986112756 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.48448826165779,
            "unit": "iter/sec",
            "range": "stddev: 0.0006879214205510954",
            "extra": "mean: 9.21790770297098 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12769.708923410639,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016488172768360143",
            "extra": "mean: 78.31032061871866 usec\nrounds: 6528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.05203865443642,
            "unit": "iter/sec",
            "range": "stddev: 0.0007556123585592833",
            "extra": "mean: 8.329721104349158 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.98245352564342,
            "unit": "iter/sec",
            "range": "stddev: 0.0008266696666615656",
            "extra": "mean: 9.805608371135635 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.6537047291457,
            "unit": "iter/sec",
            "range": "stddev: 0.000046159472425408536",
            "extra": "mean: 5.137328371897507 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 288.4539703178108,
            "unit": "iter/sec",
            "range": "stddev: 0.00003911554116273242",
            "extra": "mean: 3.466757621322484 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 41.884240969676405,
            "unit": "iter/sec",
            "range": "stddev: 0.0010184674972634243",
            "extra": "mean: 23.87532821053116 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 303.45413397275723,
            "unit": "iter/sec",
            "range": "stddev: 0.00023977523993061177",
            "extra": "mean: 3.2953909274795894 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5475.972793361425,
            "unit": "iter/sec",
            "range": "stddev: 0.00004838767716661478",
            "extra": "mean: 182.6159547783564 usec\nrounds: 2344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.4095753075036,
            "unit": "iter/sec",
            "range": "stddev: 0.000060040179343208966",
            "extra": "mean: 1.857322094297574 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.69477654938669,
            "unit": "iter/sec",
            "range": "stddev: 0.0007137375301611343",
            "extra": "mean: 9.643687303031413 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8476.695826192665,
            "unit": "iter/sec",
            "range": "stddev: 0.000011829519001752971",
            "extra": "mean: 117.970494695591 usec\nrounds: 3582"
          }
        ]
      }
    ]
  }
}
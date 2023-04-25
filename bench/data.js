window.BENCHMARK_DATA = {
  "lastUpdate": 1682451788184,
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
          "id": "56cfbe663fb9b99d8c270ef37c163a3948ae7384",
          "message": "test(bigquery): enable xpassing test",
          "timestamp": "2023-04-25T15:37:35-04:00",
          "tree_id": "cb3dad8fc94db4e868d92a752d3e69823687d3f5",
          "url": "https://github.com/ibis-project/ibis/commit/56cfbe663fb9b99d8c270ef37c163a3948ae7384"
        },
        "date": 1682451700490,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5377019256845297,
            "unit": "iter/sec",
            "range": "stddev: 0.0012016518986265195",
            "extra": "mean: 394.0573121999961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 435.5844223425048,
            "unit": "iter/sec",
            "range": "stddev: 0.00007533422500567214",
            "extra": "mean: 2.295766213635824 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6392407.405321149,
            "unit": "iter/sec",
            "range": "stddev: 9.141736875178641e-9",
            "extra": "mean: 156.43558625020168 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1862391.8014866784,
            "unit": "iter/sec",
            "range": "stddev: 1.0935510330829395e-7",
            "extra": "mean: 536.9439444491417 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4696.451932032931,
            "unit": "iter/sec",
            "range": "stddev: 0.000034834252869491885",
            "extra": "mean: 212.92669753081765 usec\nrounds: 972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.568395065801713,
            "unit": "iter/sec",
            "range": "stddev: 0.00014295722596632693",
            "extra": "mean: 116.70797066666694 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.26504935015966,
            "unit": "iter/sec",
            "range": "stddev: 0.0004971414081536336",
            "extra": "mean: 9.973565130434034 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.21439067433872,
            "unit": "iter/sec",
            "range": "stddev: 0.00013664266072453953",
            "extra": "mean: 6.61312720000069 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12257976.894986935,
            "unit": "iter/sec",
            "range": "stddev: 3.336196259802525e-9",
            "extra": "mean: 81.57953050206152 nsec\nrounds: 128222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.93596922891562,
            "unit": "iter/sec",
            "range": "stddev: 0.0006888422139047465",
            "extra": "mean: 9.810079872339463 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5801959.199055465,
            "unit": "iter/sec",
            "range": "stddev: 8.922864010416189e-9",
            "extra": "mean: 172.35557260753276 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.11014789918676,
            "unit": "iter/sec",
            "range": "stddev: 0.0002980916034479601",
            "extra": "mean: 3.634907718367579 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.129250739436195,
            "unit": "iter/sec",
            "range": "stddev: 0.000493926348204595",
            "extra": "mean: 17.504167953487656 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6182363.392940737,
            "unit": "iter/sec",
            "range": "stddev: 8.443391350506757e-9",
            "extra": "mean: 161.75044015361706 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.587658477585784,
            "unit": "iter/sec",
            "range": "stddev: 0.020316020843591045",
            "extra": "mean: 25.91502152380832 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7289355.484241812,
            "unit": "iter/sec",
            "range": "stddev: 4.386446115822441e-9",
            "extra": "mean: 137.186340021636 nsec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.67521749918152,
            "unit": "iter/sec",
            "range": "stddev: 0.0010379360142198741",
            "extra": "mean: 23.43280382857285 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4705039.779536192,
            "unit": "iter/sec",
            "range": "stddev: 1.2073439277892315e-8",
            "extra": "mean: 212.53805426877696 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.24191777088672,
            "unit": "iter/sec",
            "range": "stddev: 0.0007480080839376938",
            "extra": "mean: 9.877331662790384 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 678.4476955846319,
            "unit": "iter/sec",
            "range": "stddev: 0.00005623010843829892",
            "extra": "mean: 1.473952976048183 msec\nrounds: 501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 281.1180012571393,
            "unit": "iter/sec",
            "range": "stddev: 0.00023690528429746115",
            "extra": "mean: 3.55722506395205 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 77.11087062838766,
            "unit": "iter/sec",
            "range": "stddev: 0.020562954689557662",
            "extra": "mean: 12.968340155555955 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 115.64438773904635,
            "unit": "iter/sec",
            "range": "stddev: 0.0001505984148693089",
            "extra": "mean: 8.647198705885478 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.82618384210019,
            "unit": "iter/sec",
            "range": "stddev: 0.0008586384311662584",
            "extra": "mean: 10.54561049999808 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9378488502886883,
            "unit": "iter/sec",
            "range": "stddev: 0.0068199806455877",
            "extra": "mean: 1.0662699001999953 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.08628487533302,
            "unit": "iter/sec",
            "range": "stddev: 0.00017637583682455888",
            "extra": "mean: 18.15333893478426 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.37498715745951,
            "unit": "iter/sec",
            "range": "stddev: 0.0006916174419066727",
            "extra": "mean: 10.943913986841679 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.60088613692575,
            "unit": "iter/sec",
            "range": "stddev: 0.00010516694742537481",
            "extra": "mean: 8.090556882352724 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2393.002386732053,
            "unit": "iter/sec",
            "range": "stddev: 0.0000831129975964446",
            "extra": "mean: 417.885082582649 usec\nrounds: 1332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13531.265633733541,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016600204541895762",
            "extra": "mean: 73.90291692352805 usec\nrounds: 6813"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 102.7249346922206,
            "unit": "iter/sec",
            "range": "stddev: 0.0007800581508453264",
            "extra": "mean: 9.734734833330883 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3046861369882794,
            "unit": "iter/sec",
            "range": "stddev: 0.054188376985996115",
            "extra": "mean: 766.4678665999986 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.99562679218297,
            "unit": "iter/sec",
            "range": "stddev: 0.000900038355722269",
            "extra": "mean: 10.638792826084584 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 99.7639161108407,
            "unit": "iter/sec",
            "range": "stddev: 0.0007673121257226518",
            "extra": "mean: 10.023664256412811 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1623195.6497224842,
            "unit": "iter/sec",
            "range": "stddev: 1.051020826479953e-7",
            "extra": "mean: 616.0686791952461 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11603.720508022747,
            "unit": "iter/sec",
            "range": "stddev: 0.00004326827027274716",
            "extra": "mean: 86.17925598161432 usec\nrounds: 4305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1827361.1728816235,
            "unit": "iter/sec",
            "range": "stddev: 1.0726412990468344e-7",
            "extra": "mean: 547.2371936320988 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17690763807647045,
            "unit": "iter/sec",
            "range": "stddev: 0.0601807389804697",
            "extra": "mean: 5.652667182000011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9927.499490696635,
            "unit": "iter/sec",
            "range": "stddev: 0.000002231325358706953",
            "extra": "mean: 100.73029980380566 usec\nrounds: 5090"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.38492700409601,
            "unit": "iter/sec",
            "range": "stddev: 0.00007183811502636757",
            "extra": "mean: 8.977875435185467 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.78876570050546,
            "unit": "iter/sec",
            "range": "stddev: 0.0008692057432275037",
            "extra": "mean: 10.021168144330847 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2314.2847634061964,
            "unit": "iter/sec",
            "range": "stddev: 0.00008728529924551032",
            "extra": "mean: 432.0989429702618 usec\nrounds: 1771"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.09359749168976,
            "unit": "iter/sec",
            "range": "stddev: 0.0002551722918279731",
            "extra": "mean: 3.5830273750001584 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1159.1919371010322,
            "unit": "iter/sec",
            "range": "stddev: 0.000016734951792575865",
            "extra": "mean: 862.6699065047436 usec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.47292760225241,
            "unit": "iter/sec",
            "range": "stddev: 0.00041675054508532423",
            "extra": "mean: 15.273488396226806 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1740249.7611933635,
            "unit": "iter/sec",
            "range": "stddev: 1.1411380171617208e-7",
            "extra": "mean: 574.6301607386846 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2310.8826551213524,
            "unit": "iter/sec",
            "range": "stddev: 0.00010620029399830082",
            "extra": "mean: 432.7350840527584 usec\nrounds: 1273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.87173467758863,
            "unit": "iter/sec",
            "range": "stddev: 0.023657879879680974",
            "extra": "mean: 27.121045666664006 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.87079036399743,
            "unit": "iter/sec",
            "range": "stddev: 0.000043589811437098577",
            "extra": "mean: 7.414503891473754 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2330.6063680278457,
            "unit": "iter/sec",
            "range": "stddev: 0.00008106809455775989",
            "extra": "mean: 429.0728858027612 usec\nrounds: 1296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8000517158549446,
            "unit": "iter/sec",
            "range": "stddev: 0.0021733035184671873",
            "extra": "mean: 1.249919199200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.44901112862615,
            "unit": "iter/sec",
            "range": "stddev: 0.0004256440392610285",
            "extra": "mean: 3.976949424105948 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2239.660861759302,
            "unit": "iter/sec",
            "range": "stddev: 0.00008998452907113819",
            "extra": "mean: 446.496171395556 usec\nrounds: 1727"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 234.96543114972286,
            "unit": "iter/sec",
            "range": "stddev: 0.008223407382758115",
            "extra": "mean: 4.25594520481946 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.577786155573417,
            "unit": "iter/sec",
            "range": "stddev: 0.000455312047138114",
            "extra": "mean: 37.625406199992995 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 268.0583400237605,
            "unit": "iter/sec",
            "range": "stddev: 0.0003297632807817012",
            "extra": "mean: 3.730531196721433 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 273.07837275849056,
            "unit": "iter/sec",
            "range": "stddev: 0.000272435512178166",
            "extra": "mean: 3.6619523908046574 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.03758331067348,
            "unit": "iter/sec",
            "range": "stddev: 0.0006960319833847926",
            "extra": "mean: 10.097176915788372 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 406.52159458112357,
            "unit": "iter/sec",
            "range": "stddev: 0.00002622712167351294",
            "extra": "mean: 2.4598939228072045 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.32337251318886,
            "unit": "iter/sec",
            "range": "stddev: 0.000115894427729775",
            "extra": "mean: 10.068123692308303 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.91605703369893,
            "unit": "iter/sec",
            "range": "stddev: 0.0007367067406114258",
            "extra": "mean: 9.716656747474875 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1745.3922894973618,
            "unit": "iter/sec",
            "range": "stddev: 0.000016499953884117838",
            "extra": "mean: 572.937101886694 usec\nrounds: 1325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.8685041018176,
            "unit": "iter/sec",
            "range": "stddev: 0.000014050346867313854",
            "extra": "mean: 1.3300198033891582 msec\nrounds: 590"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6874235461506861,
            "unit": "iter/sec",
            "range": "stddev: 0.0005634071237142555",
            "extra": "mean: 592.6194418000023 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8179.685283202577,
            "unit": "iter/sec",
            "range": "stddev: 0.00001139855067976323",
            "extra": "mean: 122.2540923491951 usec\nrounds: 3725"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.414727692890295,
            "unit": "iter/sec",
            "range": "stddev: 0.0003512831045737277",
            "extra": "mean: 20.23688172916671 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2323.5026929285054,
            "unit": "iter/sec",
            "range": "stddev: 0.00008296987801220202",
            "extra": "mean: 430.3846959349189 usec\nrounds: 1230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.92519114281224,
            "unit": "iter/sec",
            "range": "stddev: 0.01673841288833546",
            "extra": "mean: 11.775069170210946 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.88992567273917,
            "unit": "iter/sec",
            "range": "stddev: 0.0007884501399857975",
            "extra": "mean: 10.428624206184915 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2436.711976981083,
            "unit": "iter/sec",
            "range": "stddev: 0.00007660892376457992",
            "extra": "mean: 410.38908555738726 usec\nrounds: 1274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2280.0641230102024,
            "unit": "iter/sec",
            "range": "stddev: 0.00008505467497323846",
            "extra": "mean: 438.584156431431 usec\nrounds: 1547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.94238882332331,
            "unit": "iter/sec",
            "range": "stddev: 0.00008336199075298024",
            "extra": "mean: 9.620714044774898 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 182.5605149585858,
            "unit": "iter/sec",
            "range": "stddev: 0.003535605110104957",
            "extra": "mean: 5.477635732057679 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.57732771686204,
            "unit": "iter/sec",
            "range": "stddev: 0.00006679896219878563",
            "extra": "mean: 6.113316643312036 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140001.01075317134,
            "unit": "iter/sec",
            "range": "stddev: 3.2858607469128593e-7",
            "extra": "mean: 7.142805574190096 usec\nrounds: 35844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 227.50020712367382,
            "unit": "iter/sec",
            "range": "stddev: 0.004074104122304218",
            "extra": "mean: 4.395600393701529 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.15362328275174,
            "unit": "iter/sec",
            "range": "stddev: 0.00018678829484971264",
            "extra": "mean: 52.20944284210299 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 171.76798348236306,
            "unit": "iter/sec",
            "range": "stddev: 0.00006240220369788669",
            "extra": "mean: 5.821806716981567 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.023294233344004,
            "unit": "iter/sec",
            "range": "stddev: 0.00017621186440227427",
            "extra": "mean: 33.307470933332674 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 193.06737251051592,
            "unit": "iter/sec",
            "range": "stddev: 0.000053257491677068155",
            "extra": "mean: 5.179539074866378 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9320896643383124,
            "unit": "iter/sec",
            "range": "stddev: 0.0020314916451046844",
            "extra": "mean: 1.0728581575999954 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 100.81453175213123,
            "unit": "iter/sec",
            "range": "stddev: 0.000736892124961525",
            "extra": "mean: 9.919204926316189 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.0915793139348,
            "unit": "iter/sec",
            "range": "stddev: 0.00002592716711717857",
            "extra": "mean: 5.073783484210469 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 954736.3353835992,
            "unit": "iter/sec",
            "range": "stddev: 1.3601683051239473e-7",
            "extra": "mean: 1.047409596701077 usec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.5254075878806,
            "unit": "iter/sec",
            "range": "stddev: 0.0003051116622393898",
            "extra": "mean: 3.6032736919171704 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.16967919860082,
            "unit": "iter/sec",
            "range": "stddev: 0.00005322507711792174",
            "extra": "mean: 9.418885010751533 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.5109257530134,
            "unit": "iter/sec",
            "range": "stddev: 0.0007804379937436085",
            "extra": "mean: 9.949167142856798 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 532.0109976388152,
            "unit": "iter/sec",
            "range": "stddev: 0.0001259856421556091",
            "extra": "mean: 1.879660391304363 msec\nrounds: 414"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1679694533406,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "91a08113a9913971abba49683953b7e342bbb8aa",
          "message": "feat: default repr to showing all columns in Jupyter notebooks",
          "timestamp": "2023-03-24T16:31:08-04:00",
          "tree_id": "97407ea80b3ab239ca1835e28806c69547442012",
          "url": "https://github.com/ibis-project/ibis/commit/91a08113a9913971abba49683953b7e342bbb8aa"
        },
        "date": 1679690160356,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3672.8730012893125,
            "unit": "iter/sec",
            "range": "stddev: 0.00007410226733778478",
            "extra": "mean: 272.266424580693 usec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 71.50840386857305,
            "unit": "iter/sec",
            "range": "stddev: 0.0006965486530828263",
            "extra": "mean: 13.984370310347341 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.26158268915752,
            "unit": "iter/sec",
            "range": "stddev: 0.000670105063695359",
            "extra": "mean: 11.592646098362081 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 551.444132400168,
            "unit": "iter/sec",
            "range": "stddev: 0.0004565996574916961",
            "extra": "mean: 1.8134203289959523 msec\nrounds: 538"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 611189.1882993738,
            "unit": "iter/sec",
            "range": "stddev: 0.000005261887922650691",
            "extra": "mean: 1.63615459688102 usec\nrounds: 20492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3292.059614932354,
            "unit": "iter/sec",
            "range": "stddev: 0.00010478577007396753",
            "extra": "mean: 303.76120634757956 usec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3695.9383638944887,
            "unit": "iter/sec",
            "range": "stddev: 0.00017162349111557186",
            "extra": "mean: 270.56728266060117 usec\nrounds: 421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 69.02313858666345,
            "unit": "iter/sec",
            "range": "stddev: 0.0016236234197505473",
            "extra": "mean: 14.487895225807923 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 85.05506039333358,
            "unit": "iter/sec",
            "range": "stddev: 0.0015653587453061165",
            "extra": "mean: 11.757090000001666 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 405124.4143170994,
            "unit": "iter/sec",
            "range": "stddev: 0.000003240210081724412",
            "extra": "mean: 2.4683775271496695 usec\nrounds: 2127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3797.06224471759,
            "unit": "iter/sec",
            "range": "stddev: 0.0000973442627563283",
            "extra": "mean: 263.36149779772074 usec\nrounds: 1816"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 75.97983782255749,
            "unit": "iter/sec",
            "range": "stddev: 0.0011287150711450247",
            "extra": "mean: 13.161386344827289 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 54896.89823060019,
            "unit": "iter/sec",
            "range": "stddev: 0.00005277418208549119",
            "extra": "mean: 18.215965423026173 usec\nrounds: 9515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 68.01301453583824,
            "unit": "iter/sec",
            "range": "stddev: 0.016035883194406107",
            "extra": "mean: 14.70306832926907 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8835407124089285,
            "unit": "iter/sec",
            "range": "stddev: 0.004841780381419955",
            "extra": "mean: 530.9149907999938 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 219.78069739751263,
            "unit": "iter/sec",
            "range": "stddev: 0.0005480584050625415",
            "extra": "mean: 4.549990112149483 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 87.20540111169572,
            "unit": "iter/sec",
            "range": "stddev: 0.0013791356089980502",
            "extra": "mean: 11.467179638554327 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 107.75661362012734,
            "unit": "iter/sec",
            "range": "stddev: 0.0005746558479241263",
            "extra": "mean: 9.28017284883584 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1323875.1982128848,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021989773881867515",
            "extra": "mean: 755.3582100109679 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 229.34518453259653,
            "unit": "iter/sec",
            "range": "stddev: 0.0003577963992215541",
            "extra": "mean: 4.3602397932966905 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 75.53081383853356,
            "unit": "iter/sec",
            "range": "stddev: 0.001385900167361977",
            "extra": "mean: 13.239629618419787 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 205.5903927064566,
            "unit": "iter/sec",
            "range": "stddev: 0.0006928194594900488",
            "extra": "mean: 4.864040516853367 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 119.9791407161895,
            "unit": "iter/sec",
            "range": "stddev: 0.000538713114161279",
            "extra": "mean: 8.334782146552445 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 382.61353729672766,
            "unit": "iter/sec",
            "range": "stddev: 0.00021761936633178395",
            "extra": "mean: 2.6136032903207798 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.92562484819086,
            "unit": "iter/sec",
            "range": "stddev: 0.00037105534803756477",
            "extra": "mean: 13.527109200003906 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.82706466479324,
            "unit": "iter/sec",
            "range": "stddev: 0.001954528000065849",
            "extra": "mean: 32.439027551723825 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 55.007336710862376,
            "unit": "iter/sec",
            "range": "stddev: 0.0009568537260023389",
            "extra": "mean: 18.179393146342395 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9433.913949832853,
            "unit": "iter/sec",
            "range": "stddev: 0.00008238168329132387",
            "extra": "mean: 106.00054286245823 usec\nrounds: 5471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.32211065374982,
            "unit": "iter/sec",
            "range": "stddev: 0.0018940210089713786",
            "extra": "mean: 51.75418037500634 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.91157978303881,
            "unit": "iter/sec",
            "range": "stddev: 0.0027957358090948737",
            "extra": "mean: 32.350336249999756 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 218.1989902865933,
            "unit": "iter/sec",
            "range": "stddev: 0.0008340664118566121",
            "extra": "mean: 4.5829726282717935 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 74.50543653263205,
            "unit": "iter/sec",
            "range": "stddev: 0.0014202531100420278",
            "extra": "mean: 13.421839352112487 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 82.79005332084625,
            "unit": "iter/sec",
            "range": "stddev: 0.000752165951783983",
            "extra": "mean: 12.078745693333227 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9232228.315293485,
            "unit": "iter/sec",
            "range": "stddev: 1.355933429373589e-7",
            "extra": "mean: 108.3162120615931 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3409.9709993312254,
            "unit": "iter/sec",
            "range": "stddev: 0.00012205169721381864",
            "extra": "mean: 293.25762600213415 usec\nrounds: 1746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 76.51721183355552,
            "unit": "iter/sec",
            "range": "stddev: 0.0012045765765717497",
            "extra": "mean: 13.068955023808963 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3702.968344029106,
            "unit": "iter/sec",
            "range": "stddev: 0.00016657752036134071",
            "extra": "mean: 270.05361836604993 usec\nrounds: 1677"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1301.9971050090633,
            "unit": "iter/sec",
            "range": "stddev: 0.00021118303083489251",
            "extra": "mean: 768.0508629034463 usec\nrounds: 992"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4140482.9389088806,
            "unit": "iter/sec",
            "range": "stddev: 4.313775475886518e-7",
            "extra": "mean: 241.5177202164707 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 224.1579981972239,
            "unit": "iter/sec",
            "range": "stddev: 0.0008572874757987886",
            "extra": "mean: 4.4611390538924995 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 90.63999800153104,
            "unit": "iter/sec",
            "range": "stddev: 0.0008223923769602153",
            "extra": "mean: 11.0326569069773 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.560176900271016,
            "unit": "iter/sec",
            "range": "stddev: 0.016247183319888996",
            "extra": "mean: 1.785150368599983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.12871315445948,
            "unit": "iter/sec",
            "range": "stddev: 0.001894590413994347",
            "extra": "mean: 242.2062184000083 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5077766.7108163,
            "unit": "iter/sec",
            "range": "stddev: 4.956737299430165e-7",
            "extra": "mean: 196.93697189157527 nsec\nrounds: 55249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 485.90328435259454,
            "unit": "iter/sec",
            "range": "stddev: 0.0003337695247624017",
            "extra": "mean: 2.0580227222221295 msec\nrounds: 396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 136.87660491321006,
            "unit": "iter/sec",
            "range": "stddev: 0.000488400362466785",
            "extra": "mean: 7.3058504090898095 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.171928878514619,
            "unit": "iter/sec",
            "range": "stddev: 0.007581769382018999",
            "extra": "mean: 853.294102000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 197.00712270880902,
            "unit": "iter/sec",
            "range": "stddev: 0.0006239525193409288",
            "extra": "mean: 5.075958606217874 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 219.62613899947863,
            "unit": "iter/sec",
            "range": "stddev: 0.0005895369099676705",
            "extra": "mean: 4.553192095237689 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1529974.0539513095,
            "unit": "iter/sec",
            "range": "stddev: 0.00000146211387530501",
            "extra": "mean: 653.6058552217935 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 87.90242856799303,
            "unit": "iter/sec",
            "range": "stddev: 0.0012196377841757638",
            "extra": "mean: 11.37624996590958 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3675.553069598512,
            "unit": "iter/sec",
            "range": "stddev: 0.00010129736228451473",
            "extra": "mean: 272.0678986439534 usec\nrounds: 1401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4900091984350306,
            "unit": "iter/sec",
            "range": "stddev: 0.015595020487566868",
            "extra": "mean: 2.040778016400009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 118347.13828491895,
            "unit": "iter/sec",
            "range": "stddev: 0.000010079771515949339",
            "extra": "mean: 8.449718467991302 usec\nrounds: 32895"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1572826.3620028142,
            "unit": "iter/sec",
            "range": "stddev: 0.000001306078006583942",
            "extra": "mean: 635.7980919944746 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 231.10019070856663,
            "unit": "iter/sec",
            "range": "stddev: 0.00045945986681820067",
            "extra": "mean: 4.327127541236301 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 119.31868044828181,
            "unit": "iter/sec",
            "range": "stddev: 0.004536349744000067",
            "extra": "mean: 8.380917357139612 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 878.6628903542888,
            "unit": "iter/sec",
            "range": "stddev: 0.00011690299089430049",
            "extra": "mean: 1.1380929034077976 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 210.17482403407917,
            "unit": "iter/sec",
            "range": "stddev: 0.0006444977308864402",
            "extra": "mean: 4.757943795579689 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5525595411318157,
            "unit": "iter/sec",
            "range": "stddev: 0.01650727199466302",
            "extra": "mean: 1.809759719200008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 112.41599561658731,
            "unit": "iter/sec",
            "range": "stddev: 0.0010151991600852606",
            "extra": "mean: 8.895531232144751 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5732.491753042021,
            "unit": "iter/sec",
            "range": "stddev: 0.00008107502140002977",
            "extra": "mean: 174.44421083891436 usec\nrounds: 3377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9938.641660885021,
            "unit": "iter/sec",
            "range": "stddev: 0.00005084141785571479",
            "extra": "mean: 100.61737148001284 usec\nrounds: 5575"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.211908910514176,
            "unit": "iter/sec",
            "range": "stddev: 0.007753929925086674",
            "extra": "mean: 138.65954387500778 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 175.64147137819617,
            "unit": "iter/sec",
            "range": "stddev: 0.004788726916065817",
            "extra": "mean: 5.69341620833255 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 37.75955025430714,
            "unit": "iter/sec",
            "range": "stddev: 0.002202329799729044",
            "extra": "mean: 26.48336628124781 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 78.5351570301614,
            "unit": "iter/sec",
            "range": "stddev: 0.0012953102618318175",
            "extra": "mean: 12.733150830983254 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3622.3716746213236,
            "unit": "iter/sec",
            "range": "stddev: 0.00011241382907509258",
            "extra": "mean: 276.0622293416476 usec\nrounds: 2965"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3751.3899652311197,
            "unit": "iter/sec",
            "range": "stddev: 0.00010576450233764949",
            "extra": "mean: 266.5678613176092 usec\nrounds: 2704"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 89.57366983633263,
            "unit": "iter/sec",
            "range": "stddev: 0.0011846500284938962",
            "extra": "mean: 11.163994975612606 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 242.68289223822555,
            "unit": "iter/sec",
            "range": "stddev: 0.00047899053286293693",
            "extra": "mean: 4.120603602409546 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1506106.913525413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025366046733676075",
            "extra": "mean: 663.9634882621011 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8299.24941837998,
            "unit": "iter/sec",
            "range": "stddev: 0.00005693648895503465",
            "extra": "mean: 120.49282406013056 usec\nrounds: 3433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 212.6414106443474,
            "unit": "iter/sec",
            "range": "stddev: 0.0009127671832048022",
            "extra": "mean: 4.70275285030227 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.61881513006074,
            "unit": "iter/sec",
            "range": "stddev: 0.0028883836448068295",
            "extra": "mean: 86.06729591666824 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.4025488975917,
            "unit": "iter/sec",
            "range": "stddev: 0.0024055347182709505",
            "extra": "mean: 20.660068999997552 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 122.1060952686993,
            "unit": "iter/sec",
            "range": "stddev: 0.000502019539996838",
            "extra": "mean: 8.189599362746472 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 84.99553473596823,
            "unit": "iter/sec",
            "range": "stddev: 0.0017525506218142677",
            "extra": "mean: 11.765323944445072 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 76.66986470162136,
            "unit": "iter/sec",
            "range": "stddev: 0.0013101734774537495",
            "extra": "mean: 13.042934194441754 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.0981350705923501,
            "unit": "iter/sec",
            "range": "stddev: 0.20112483431928432",
            "extra": "mean: 10.190036996599996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.67284475471627,
            "unit": "iter/sec",
            "range": "stddev: 0.001660979927586536",
            "extra": "mean: 28.84101397143013 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4799203.15425881,
            "unit": "iter/sec",
            "range": "stddev: 1.7308895081515026e-7",
            "extra": "mean: 208.36792439438668 nsec\nrounds: 48781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.460555417067035,
            "unit": "iter/sec",
            "range": "stddev: 0.0029373743423007467",
            "extra": "mean: 32.829342285718816 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 91.86483716533283,
            "unit": "iter/sec",
            "range": "stddev: 0.001305705272726809",
            "extra": "mean: 10.885557857140267 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.82236023215283,
            "unit": "iter/sec",
            "range": "stddev: 0.0008876637962610902",
            "extra": "mean: 18.57963856818401 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5467162143310746,
            "unit": "iter/sec",
            "range": "stddev: 0.013555820827130841",
            "extra": "mean: 1.829102510199982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 88.26412095617148,
            "unit": "iter/sec",
            "range": "stddev: 0.0015639712747760855",
            "extra": "mean: 11.329631895349197 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 89.81600843123721,
            "unit": "iter/sec",
            "range": "stddev: 0.001092308246291201",
            "extra": "mean: 11.133872652174208 msec\nrounds: 69"
          }
        ]
      },
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
          "id": "bf00b1be0bff049991546a9b8b4949745053897e",
          "message": "test(snowflake): skip local test of schema-dependent database",
          "timestamp": "2023-03-24T17:35:37-04:00",
          "tree_id": "7a44ae84b6beb6ddb4ab8bf0409818c41f155257",
          "url": "https://github.com/ibis-project/ibis/commit/bf00b1be0bff049991546a9b8b4949745053897e"
        },
        "date": 1679694448167,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7630561865308272,
            "unit": "iter/sec",
            "range": "stddev: 0.0020678588501992557",
            "extra": "mean: 567.1968980000031 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11417.400738776802,
            "unit": "iter/sec",
            "range": "stddev: 0.000026969096008787795",
            "extra": "mean: 87.58560927126874 usec\nrounds: 453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8540357233581284,
            "unit": "iter/sec",
            "range": "stddev: 0.0024753968235000164",
            "extra": "mean: 1.1709112074000019 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4361.254613919353,
            "unit": "iter/sec",
            "range": "stddev: 0.000057607287099553745",
            "extra": "mean: 229.29181818653888 usec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1755.8569732148883,
            "unit": "iter/sec",
            "range": "stddev: 0.000013364053192059548",
            "extra": "mean: 569.52246979949 usec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.7712710817041,
            "unit": "iter/sec",
            "range": "stddev: 0.00019645112942364492",
            "extra": "mean: 3.2811491596657634 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.718261939343,
            "unit": "iter/sec",
            "range": "stddev: 0.0006084660323983761",
            "extra": "mean: 8.283750808990835 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.7284700471643,
            "unit": "iter/sec",
            "range": "stddev: 0.0006182921774175785",
            "extra": "mean: 9.927679826088573 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 349.0298400071303,
            "unit": "iter/sec",
            "range": "stddev: 0.000030237553905020103",
            "extra": "mean: 2.8650845440022294 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.3229079688816,
            "unit": "iter/sec",
            "range": "stddev: 0.00004590499913321073",
            "extra": "mean: 3.409212075949039 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6674065901864322,
            "unit": "iter/sec",
            "range": "stddev: 0.04851940467521281",
            "extra": "mean: 1.4983370177999915 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13302.500277758958,
            "unit": "iter/sec",
            "range": "stddev: 0.000002028989072656985",
            "extra": "mean: 75.17383793420734 usec\nrounds: 6448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 746.0928358264819,
            "unit": "iter/sec",
            "range": "stddev: 0.00002510700860281631",
            "extra": "mean: 1.340315778387355 msec\nrounds: 546"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.5442812715064,
            "unit": "iter/sec",
            "range": "stddev: 0.00006677132480370093",
            "extra": "mean: 1.8397765084763882 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5584.114763977392,
            "unit": "iter/sec",
            "range": "stddev: 0.000041714771964725664",
            "extra": "mean: 179.07941406414272 usec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.35346417472404,
            "unit": "iter/sec",
            "range": "stddev: 0.0007692157744043932",
            "extra": "mean: 24.781019931031448 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.3747250585135,
            "unit": "iter/sec",
            "range": "stddev: 0.00039788744816198",
            "extra": "mean: 39.40929399999504 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.57581316400716,
            "unit": "iter/sec",
            "range": "stddev: 0.0005751196291774039",
            "extra": "mean: 9.471866424997799 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5840.52288992875,
            "unit": "iter/sec",
            "range": "stddev: 0.00005406859747656649",
            "extra": "mean: 171.21754658720278 usec\nrounds: 2168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.66114373432059,
            "unit": "iter/sec",
            "range": "stddev: 0.021235751438676828",
            "extra": "mean: 25.865763487805765 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.39178245599109,
            "unit": "iter/sec",
            "range": "stddev: 0.0006000434437567866",
            "extra": "mean: 8.306214756522502 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1834229.5929678823,
            "unit": "iter/sec",
            "range": "stddev: 9.514038118595942e-8",
            "extra": "mean: 545.1880199915138 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 190.1008667594297,
            "unit": "iter/sec",
            "range": "stddev: 0.0003252795279881492",
            "extra": "mean: 5.260365284212448 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2509872.5502355117,
            "unit": "iter/sec",
            "range": "stddev: 1.634146555343625e-8",
            "extra": "mean: 398.4266053294965 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5617.6518527606495,
            "unit": "iter/sec",
            "range": "stddev: 0.000029019850896601044",
            "extra": "mean: 178.0103192953433 usec\nrounds: 2327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.18627788732155,
            "unit": "iter/sec",
            "range": "stddev: 0.0006593378218922696",
            "extra": "mean: 9.691211084210158 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.83165955075462,
            "unit": "iter/sec",
            "range": "stddev: 0.0006883149530555831",
            "extra": "mean: 8.942011627272253 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.82277808945592,
            "unit": "iter/sec",
            "range": "stddev: 0.0002610703178547219",
            "extra": "mean: 20.48224290243669 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.79039241786,
            "unit": "iter/sec",
            "range": "stddev: 0.0005508848557290034",
            "extra": "mean: 10.662072886365014 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5850.258674635352,
            "unit": "iter/sec",
            "range": "stddev: 0.00005279653638270746",
            "extra": "mean: 170.93261266132484 usec\nrounds: 3870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.1113813669569,
            "unit": "iter/sec",
            "range": "stddev: 0.00004457229610463649",
            "extra": "mean: 10.089658586207472 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.43267809963643,
            "unit": "iter/sec",
            "range": "stddev: 0.0007425863633985045",
            "extra": "mean: 22.505958289473046 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70563.97969455142,
            "unit": "iter/sec",
            "range": "stddev: 5.352781939028208e-7",
            "extra": "mean: 14.171536304055916 usec\nrounds: 13263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.36142256055108,
            "unit": "iter/sec",
            "range": "stddev: 0.0006057906786689876",
            "extra": "mean: 8.23985067825872 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.8806096917069,
            "unit": "iter/sec",
            "range": "stddev: 0.00004906182673975888",
            "extra": "mean: 1.4495261730096733 msec\nrounds: 578"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.680981578955276,
            "unit": "iter/sec",
            "range": "stddev: 0.00009596568905006724",
            "extra": "mean: 63.77151806249515 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.45582060680957,
            "unit": "iter/sec",
            "range": "stddev: 0.0002150791850112229",
            "extra": "mean: 13.801513689654046 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.920813557629068,
            "unit": "iter/sec",
            "range": "stddev: 0.0023619531825768087",
            "extra": "mean: 1.085996173399991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.06282845096646,
            "unit": "iter/sec",
            "range": "stddev: 0.0005481894159165921",
            "extra": "mean: 8.260173769234424 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.0675541836265,
            "unit": "iter/sec",
            "range": "stddev: 0.00024271887638705356",
            "extra": "mean: 14.910339465519597 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5464.221444383867,
            "unit": "iter/sec",
            "range": "stddev: 0.00007012813788018507",
            "extra": "mean: 183.0086884615193 usec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9219310197238306,
            "unit": "iter/sec",
            "range": "stddev: 0.004701135899979859",
            "extra": "mean: 1.084679849799994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.9764697616874,
            "unit": "iter/sec",
            "range": "stddev: 0.00007242253376293204",
            "extra": "mean: 6.0984359612896535 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 297.1489590694812,
            "unit": "iter/sec",
            "range": "stddev: 0.00018650266405013352",
            "extra": "mean: 3.3653155075201657 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6874859.052964063,
            "unit": "iter/sec",
            "range": "stddev: 8.281271168625382e-9",
            "extra": "mean: 145.45752753557898 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.20047305994714,
            "unit": "iter/sec",
            "range": "stddev: 0.00009395066929092557",
            "extra": "mean: 6.570281812502188 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 311.57997304632505,
            "unit": "iter/sec",
            "range": "stddev: 0.000182448204407403",
            "extra": "mean: 3.2094488943656274 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5247.464517477296,
            "unit": "iter/sec",
            "range": "stddev: 0.00004920995923108965",
            "extra": "mean: 190.568225219891 usec\nrounds: 3299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.350387304859547,
            "unit": "iter/sec",
            "range": "stddev: 0.00026140725560508485",
            "extra": "mean: 96.6147420909067 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 312.8607342927629,
            "unit": "iter/sec",
            "range": "stddev: 0.00018838894149029705",
            "extra": "mean: 3.196310340000158 msec\nrounds: 300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5730435.088918554,
            "unit": "iter/sec",
            "range": "stddev: 9.085808705392888e-9",
            "extra": "mean: 174.50681920025204 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.46905876209274,
            "unit": "iter/sec",
            "range": "stddev: 0.0007447996847309013",
            "extra": "mean: 9.855221012196719 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.80510366063925,
            "unit": "iter/sec",
            "range": "stddev: 0.00020829160440598938",
            "extra": "mean: 7.204346048001753 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5773540604036573,
            "unit": "iter/sec",
            "range": "stddev: 0.0012160047474290504",
            "extra": "mean: 387.994810400005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.48243477039761,
            "unit": "iter/sec",
            "range": "stddev: 0.00009264134330176624",
            "extra": "mean: 17.099151290913348 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 279.3154634049522,
            "unit": "iter/sec",
            "range": "stddev: 0.00027865781006267056",
            "extra": "mean: 3.580181303998188 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8057.6985067501655,
            "unit": "iter/sec",
            "range": "stddev: 0.000011233854609541597",
            "extra": "mean: 124.1049164550239 usec\nrounds: 4333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 104.975213741254,
            "unit": "iter/sec",
            "range": "stddev: 0.013189620999877891",
            "extra": "mean: 9.526058241375239 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.05257360659321,
            "unit": "iter/sec",
            "range": "stddev: 0.00014034527988451273",
            "extra": "mean: 8.470802198116164 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 313.02698869353975,
            "unit": "iter/sec",
            "range": "stddev: 0.00018232069420055772",
            "extra": "mean: 3.1946127206910644 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.57614568619618,
            "unit": "iter/sec",
            "range": "stddev: 0.000631325784223168",
            "extra": "mean: 9.382962702971163 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.25269735470322,
            "unit": "iter/sec",
            "range": "stddev: 0.0006377133215895158",
            "extra": "mean: 8.752528589285292 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11823.137654223103,
            "unit": "iter/sec",
            "range": "stddev: 0.00003084251384369319",
            "extra": "mean: 84.5799168753491 usec\nrounds: 5185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.1837195046445,
            "unit": "iter/sec",
            "range": "stddev: 0.0006605363444824849",
            "extra": "mean: 9.41763958415734 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 264.50493650551005,
            "unit": "iter/sec",
            "range": "stddev: 0.008572120654856337",
            "extra": "mean: 3.7806477762246544 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1807514531203714,
            "unit": "iter/sec",
            "range": "stddev: 0.12733916308495322",
            "extra": "mean: 5.53245898020001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.6172761062309,
            "unit": "iter/sec",
            "range": "stddev: 0.00005235197094296111",
            "extra": "mean: 6.225980319443399 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6311941.242595519,
            "unit": "iter/sec",
            "range": "stddev: 9.421381697336462e-9",
            "extra": "mean: 158.42986516578134 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5511.528243171238,
            "unit": "iter/sec",
            "range": "stddev: 0.00006696486091514366",
            "extra": "mean: 181.43787999979793 usec\nrounds: 2300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.73269774362242,
            "unit": "iter/sec",
            "range": "stddev: 0.0006033580907281014",
            "extra": "mean: 9.829681333332081 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141489.6653739001,
            "unit": "iter/sec",
            "range": "stddev: 5.214802276006202e-7",
            "extra": "mean: 7.067654003968442 usec\nrounds: 37038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1712550.7627736987,
            "unit": "iter/sec",
            "range": "stddev: 9.158040762014925e-8",
            "extra": "mean: 583.9242968660211 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.23259554351664,
            "unit": "iter/sec",
            "range": "stddev: 0.00006092982487393969",
            "extra": "mean: 10.50060637634358 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.14194902252783,
            "unit": "iter/sec",
            "range": "stddev: 0.0001521122503853473",
            "extra": "mean: 9.247105392854374 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11885932.141136738,
            "unit": "iter/sec",
            "range": "stddev: 3.4385619331479006e-9",
            "extra": "mean: 84.1330732941364 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1197.315015873236,
            "unit": "iter/sec",
            "range": "stddev: 0.000012141105725809717",
            "extra": "mean: 835.2020869550955 usec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.66034914815964,
            "unit": "iter/sec",
            "range": "stddev: 0.00020993029357143267",
            "extra": "mean: 3.3371115092226455 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 182.81207251321274,
            "unit": "iter/sec",
            "range": "stddev: 0.0035679128318681984",
            "extra": "mean: 5.470098261304516 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 242.93758559943944,
            "unit": "iter/sec",
            "range": "stddev: 0.0041154746762706255",
            "extra": "mean: 4.116283602360405 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.71417921282885,
            "unit": "iter/sec",
            "range": "stddev: 0.00009416197512820138",
            "extra": "mean: 13.565911072722967 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 717257.701150635,
            "unit": "iter/sec",
            "range": "stddev: 2.004902199013488e-7",
            "extra": "mean: 1.3941990422630328 usec\nrounds: 26738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.15523696999209,
            "unit": "iter/sec",
            "range": "stddev: 0.00008647238676399371",
            "extra": "mean: 8.99642722429681 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.49369313224155,
            "unit": "iter/sec",
            "range": "stddev: 0.00036462910935644463",
            "extra": "mean: 182.02691266666685 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 328.3096985903957,
            "unit": "iter/sec",
            "range": "stddev: 0.00002381349284402442",
            "extra": "mean: 3.04590453554531 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5824.661599426263,
            "unit": "iter/sec",
            "range": "stddev: 0.000043117793413011175",
            "extra": "mean: 171.68379362991686 usec\nrounds: 2355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1812006.2632062943,
            "unit": "iter/sec",
            "range": "stddev: 1.2621242448408674e-7",
            "extra": "mean: 551.8744721282188 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 500785.670243471,
            "unit": "iter/sec",
            "range": "stddev: 4.7428814336269647e-7",
            "extra": "mean: 1.996862249500514 usec\nrounds: 2098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.36292262667702,
            "unit": "iter/sec",
            "range": "stddev: 0.0006548865787636654",
            "extra": "mean: 8.377810948276036 msec\nrounds: 116"
          }
        ]
      }
    ]
  }
}
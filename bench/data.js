window.BENCHMARK_DATA = {
  "lastUpdate": 1679690263770,
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
      }
    ]
  }
}
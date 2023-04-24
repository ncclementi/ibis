window.BENCHMARK_DATA = {
  "lastUpdate": 1682336941723,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "c2cdff3faf516502a10956acfe7ea01ccaa130ad",
          "message": "chore(deps): lock file maintenance",
          "timestamp": "2023-04-24T07:42:19-04:00",
          "tree_id": "6282731a94840f5f26c4291f9419d073a6e4b8bb",
          "url": "https://github.com/ibis-project/ibis/commit/c2cdff3faf516502a10956acfe7ea01ccaa130ad"
        },
        "date": 1682336860840,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 96.60120142272532,
            "unit": "iter/sec",
            "range": "stddev: 0.0007984710292269081",
            "extra": "mean: 10.35183812698163 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4464.885907045174,
            "unit": "iter/sec",
            "range": "stddev: 0.000029903624098065506",
            "extra": "mean: 223.96988877635 usec\nrounds: 989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.53597399417956,
            "unit": "iter/sec",
            "range": "stddev: 0.0004135036047597191",
            "extra": "mean: 12.416811399987182 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.38125568749678,
            "unit": "iter/sec",
            "range": "stddev: 0.00025401354227196115",
            "extra": "mean: 22.532034853662847 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.47084290901793,
            "unit": "iter/sec",
            "range": "stddev: 0.00007586725631869274",
            "extra": "mean: 6.154950525861369 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.832546200676,
            "unit": "iter/sec",
            "range": "stddev: 0.0002916488247944992",
            "extra": "mean: 3.5863819113866975 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 105.07694172563043,
            "unit": "iter/sec",
            "range": "stddev: 0.0001392478052048188",
            "extra": "mean: 9.516835792681617 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5587900.291973162,
            "unit": "iter/sec",
            "range": "stddev: 1.1177608053735908e-8",
            "extra": "mean: 178.95809655657834 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16743906685502938,
            "unit": "iter/sec",
            "range": "stddev: 0.09437027496294594",
            "extra": "mean: 5.972321864799994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.869895059056074,
            "unit": "iter/sec",
            "range": "stddev: 0.005252005078755089",
            "extra": "mean: 1.1495639497999945 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.7643192601606,
            "unit": "iter/sec",
            "range": "stddev: 0.000012989658311229684",
            "extra": "mean: 1.3337524530198537 msec\nrounds: 596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 258.19646777992784,
            "unit": "iter/sec",
            "range": "stddev: 0.0001790836726346839",
            "extra": "mean: 3.873019676056699 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 274.7497522159178,
            "unit": "iter/sec",
            "range": "stddev: 0.00031426861658392436",
            "extra": "mean: 3.6396757119334153 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.521619923337623,
            "unit": "iter/sec",
            "range": "stddev: 0.00038299691396241126",
            "extra": "mean: 86.79335081818222 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.86720045240871,
            "unit": "iter/sec",
            "range": "stddev: 0.00015197971077665357",
            "extra": "mean: 20.891131934783527 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.1088392654351,
            "unit": "iter/sec",
            "range": "stddev: 0.0000378252829243253",
            "extra": "mean: 1.4574947045874302 msec\nrounds: 545"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2052.4878360642065,
            "unit": "iter/sec",
            "range": "stddev: 0.00007956815632102518",
            "extra": "mean: 487.21360605847593 usec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.61048486049013,
            "unit": "iter/sec",
            "range": "stddev: 0.0007233478791840529",
            "extra": "mean: 10.350843404254153 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.7963692553341,
            "unit": "iter/sec",
            "range": "stddev: 0.00006526899682672834",
            "extra": "mean: 6.0680948525668565 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.6163371612226,
            "unit": "iter/sec",
            "range": "stddev: 0.0002832839979659136",
            "extra": "mean: 3.6414439517227883 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7266700510200345,
            "unit": "iter/sec",
            "range": "stddev: 0.0016001432905027209",
            "extra": "mean: 1.376140379800006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 128.4034257988132,
            "unit": "iter/sec",
            "range": "stddev: 0.00046331560870579985",
            "extra": "mean: 7.787954205885701 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 302.68882744708424,
            "unit": "iter/sec",
            "range": "stddev: 0.00015873944610640618",
            "extra": "mean: 3.3037228642831855 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.57104874470318,
            "unit": "iter/sec",
            "range": "stddev: 0.00008244064129089326",
            "extra": "mean: 13.059766274510839 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4800596274189006,
            "unit": "iter/sec",
            "range": "stddev: 0.0022408204866262204",
            "extra": "mean: 403.21611179999763 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 201.6887449034263,
            "unit": "iter/sec",
            "range": "stddev: 0.000059132540715114104",
            "extra": "mean: 4.958134874996745 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 91.94632329435692,
            "unit": "iter/sec",
            "range": "stddev: 0.0010312903143131684",
            "extra": "mean: 10.87591068539631 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.16790644514172,
            "unit": "iter/sec",
            "range": "stddev: 0.00014421314737628394",
            "extra": "mean: 9.244886333333616 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 82.31163854411305,
            "unit": "iter/sec",
            "range": "stddev: 0.016400554525170696",
            "extra": "mean: 12.148950229730545 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 96.12165452354681,
            "unit": "iter/sec",
            "range": "stddev: 0.0010884992450392109",
            "extra": "mean: 10.403483012821333 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149317.58395591634,
            "unit": "iter/sec",
            "range": "stddev: 3.576338323251115e-7",
            "extra": "mean: 6.697134881952243 usec\nrounds: 40984"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 262.8886402807303,
            "unit": "iter/sec",
            "range": "stddev: 0.0004712457463593724",
            "extra": "mean: 3.8038920165288705 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2155.1653114350015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000939622044750104",
            "extra": "mean: 464.00152911432906 usec\nrounds: 1580"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.3600332775811,
            "unit": "iter/sec",
            "range": "stddev: 0.0003020957677763314",
            "extra": "mean: 3.5796101119674764 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1729546.8708111024,
            "unit": "iter/sec",
            "range": "stddev: 1.0237583983941148e-7",
            "extra": "mean: 578.1861231265921 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2193.409347134577,
            "unit": "iter/sec",
            "range": "stddev: 0.00008651858177466525",
            "extra": "mean: 455.91125127025595 usec\nrounds: 1182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1976397.504485323,
            "unit": "iter/sec",
            "range": "stddev: 8.158216198820995e-8",
            "extra": "mean: 505.9710901934232 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1982902.3256616762,
            "unit": "iter/sec",
            "range": "stddev: 9.266135821458914e-8",
            "extra": "mean: 504.31127497231074 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.6777169754961,
            "unit": "iter/sec",
            "range": "stddev: 0.000171862671151422",
            "extra": "mean: 9.201518285716961 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6127371284488903,
            "unit": "iter/sec",
            "range": "stddev: 0.0018880276238889503",
            "extra": "mean: 620.0638543999958 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10475.685639172907,
            "unit": "iter/sec",
            "range": "stddev: 0.000006493281245438464",
            "extra": "mean: 95.45914553416797 usec\nrounds: 4322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 41.424926092616886,
            "unit": "iter/sec",
            "range": "stddev: 0.0009810497542316638",
            "extra": "mean: 24.14005513888482 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.00824188687223,
            "unit": "iter/sec",
            "range": "stddev: 0.0004991060069529437",
            "extra": "mean: 31.24195335483694 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 77.42969569125266,
            "unit": "iter/sec",
            "range": "stddev: 0.020660965230273536",
            "extra": "mean: 12.91494162636844 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2702745.1114032655,
            "unit": "iter/sec",
            "range": "stddev: 1.6118996504758215e-8",
            "extra": "mean: 369.994194340164 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 139.57065548319312,
            "unit": "iter/sec",
            "range": "stddev: 0.0037443268814451878",
            "extra": "mean: 7.164829860102065 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 84.14778141667833,
            "unit": "iter/sec",
            "range": "stddev: 0.0008739920479186176",
            "extra": "mean: 11.88385460869438 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 505213.242733942,
            "unit": "iter/sec",
            "range": "stddev: 3.164857522278045e-7",
            "extra": "mean: 1.9793622086953593 usec\nrounds: 2101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.24840853146603,
            "unit": "iter/sec",
            "range": "stddev: 0.00009062673283779342",
            "extra": "mean: 9.070425716980665 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2180.951913026635,
            "unit": "iter/sec",
            "range": "stddev: 0.00008795769141011751",
            "extra": "mean: 458.5153822177773 usec\nrounds: 1091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 293.2103416639101,
            "unit": "iter/sec",
            "range": "stddev: 0.00004097132406444194",
            "extra": "mean: 3.410520905658374 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.901937815900106,
            "unit": "iter/sec",
            "range": "stddev: 0.0003239065340046865",
            "extra": "mean: 169.43587533334417 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12509.109769952183,
            "unit": "iter/sec",
            "range": "stddev: 0.000012128273810281445",
            "extra": "mean: 79.94173993117198 usec\nrounds: 4072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1775.4828243768266,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060634095613496905",
            "extra": "mean: 563.2270761903811 usec\nrounds: 1260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2201.353882892749,
            "unit": "iter/sec",
            "range": "stddev: 0.00009076629991551296",
            "extra": "mean: 454.2658987140781 usec\nrounds: 1244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1163.7503259862738,
            "unit": "iter/sec",
            "range": "stddev: 0.000012076134742485039",
            "extra": "mean: 859.2908441529364 usec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 526.2263889700581,
            "unit": "iter/sec",
            "range": "stddev: 0.00007686548318228784",
            "extra": "mean: 1.9003227906476186 msec\nrounds: 449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.38007988380215,
            "unit": "iter/sec",
            "range": "stddev: 0.00016440446481143974",
            "extra": "mean: 10.708922087498252 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 733209.8375356025,
            "unit": "iter/sec",
            "range": "stddev: 2.386842022302826e-7",
            "extra": "mean: 1.363866043261378 usec\nrounds: 23530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8506.291085860745,
            "unit": "iter/sec",
            "range": "stddev: 0.00001765641079554901",
            "extra": "mean: 117.56004936889728 usec\nrounds: 3646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5617720.402349949,
            "unit": "iter/sec",
            "range": "stddev: 1.0595458153822778e-8",
            "extra": "mean: 178.00814714475774 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 39.77355769640029,
            "unit": "iter/sec",
            "range": "stddev: 0.033790545825824844",
            "extra": "mean: 25.14233219047702 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 42.54952412561414,
            "unit": "iter/sec",
            "range": "stddev: 0.0006837019555009958",
            "extra": "mean: 23.5020254761913 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69082.50219315772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010016411438723865",
            "extra": "mean: 14.475445565129588 usec\nrounds: 12988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 96.15344090903287,
            "unit": "iter/sec",
            "range": "stddev: 0.0008731342827633077",
            "extra": "mean: 10.400043831463734 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2106.0942916136532,
            "unit": "iter/sec",
            "range": "stddev: 0.00009504922695147949",
            "extra": "mean: 474.8125494579909 usec\nrounds: 1567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2195.5355499368575,
            "unit": "iter/sec",
            "range": "stddev: 0.00009251052306743182",
            "extra": "mean: 455.4697372259627 usec\nrounds: 1781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 92.22401508379212,
            "unit": "iter/sec",
            "range": "stddev: 0.0010151431090817296",
            "extra": "mean: 10.843162695653929 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 75.23280312171345,
            "unit": "iter/sec",
            "range": "stddev: 0.022854030004013943",
            "extra": "mean: 13.292074181819013 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 205.69568366429735,
            "unit": "iter/sec",
            "range": "stddev: 0.00413252600256732",
            "extra": "mean: 4.861550724768904 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 273.24769972285236,
            "unit": "iter/sec",
            "range": "stddev: 0.0003239439318621357",
            "extra": "mean: 3.6596831410265214 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 95.57344599860906,
            "unit": "iter/sec",
            "range": "stddev: 0.001094933760962174",
            "extra": "mean: 10.463157308511756 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.03572638619612,
            "unit": "iter/sec",
            "range": "stddev: 0.001060365647113339",
            "extra": "mean: 10.9846984222189 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 262.32125374673114,
            "unit": "iter/sec",
            "range": "stddev: 0.0003847067768494136",
            "extra": "mean: 3.8121196270489435 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11162452.501197906,
            "unit": "iter/sec",
            "range": "stddev: 3.280316732120868e-9",
            "extra": "mean: 89.58604750105525 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 91.80809698848363,
            "unit": "iter/sec",
            "range": "stddev: 0.0009331388892751126",
            "extra": "mean: 10.892285460676085 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.537291256559385,
            "unit": "iter/sec",
            "range": "stddev: 0.0007916665864805373",
            "extra": "mean: 21.488143658534295 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 71.95889733587208,
            "unit": "iter/sec",
            "range": "stddev: 0.02748494470154724",
            "extra": "mean: 13.896822172419425 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14104.658814847593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022942826957928887",
            "extra": "mean: 70.89856005218128 usec\nrounds: 6869"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.890564797916714,
            "unit": "iter/sec",
            "range": "stddev: 0.00041945595186437904",
            "extra": "mean: 45.6817815909057 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7701115421286573,
            "unit": "iter/sec",
            "range": "stddev: 0.003973153781406174",
            "extra": "mean: 1.2985131962000083 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 96.33489157884705,
            "unit": "iter/sec",
            "range": "stddev: 0.0011219990233460066",
            "extra": "mean: 10.380454927709465 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6011013.52353496,
            "unit": "iter/sec",
            "range": "stddev: 9.371682507260749e-9",
            "extra": "mean: 166.36129599187686 nsec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 97.1044903136535,
            "unit": "iter/sec",
            "range": "stddev: 0.0010657593971706277",
            "extra": "mean: 10.298184942528799 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.718391220537525,
            "unit": "iter/sec",
            "range": "stddev: 0.0007671200760580756",
            "extra": "mean: 63.619742374996235 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8603799428225697,
            "unit": "iter/sec",
            "range": "stddev: 0.006916922489278643",
            "extra": "mean: 1.1622772105999957 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.2463862828571,
            "unit": "iter/sec",
            "range": "stddev: 0.00011620905079844805",
            "extra": "mean: 6.745526991072686 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2093.7337061558,
            "unit": "iter/sec",
            "range": "stddev: 0.0001039699815477924",
            "extra": "mean: 477.61565716781143 usec\nrounds: 1228"
          }
        ]
      }
    ]
  }
}
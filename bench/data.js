window.BENCHMARK_DATA = {
  "lastUpdate": 1681208673694,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "040ee8fa319d33627d8d7f43a69abbf277e40154",
          "message": "chore(deps): pre-commit.ci autoupdate\n\nupdates:\n- [github.com/rhysd/actionlint: v1.6.23 → v1.6.24](https://github.com/rhysd/actionlint/compare/v1.6.23...v1.6.24)",
          "timestamp": "2023-04-11T06:14:36-04:00",
          "tree_id": "5d97328fc7b5b059f75dc4a9e00131cfadd136fc",
          "url": "https://github.com/ibis-project/ibis/commit/040ee8fa319d33627d8d7f43a69abbf277e40154"
        },
        "date": 1681208577865,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 2606514.091386947,
            "unit": "iter/sec",
            "range": "stddev: 0.000002088108647667533",
            "extra": "mean: 383.6541698755567 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1460.294021444551,
            "unit": "iter/sec",
            "range": "stddev: 0.00013943189199376626",
            "extra": "mean: 684.7935999976091 usec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 68.80619215362057,
            "unit": "iter/sec",
            "range": "stddev: 0.001247629328004551",
            "extra": "mean: 14.533575666668833 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8629889745104276,
            "unit": "iter/sec",
            "range": "stddev: 0.004998267280108749",
            "extra": "mean: 536.7718294000042 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 191.8084031684181,
            "unit": "iter/sec",
            "range": "stddev: 0.0008524525894435741",
            "extra": "mean: 5.213535921687154 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.92745097954845,
            "unit": "iter/sec",
            "range": "stddev: 0.0012050588248010202",
            "extra": "mean: 24.43347865714145 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1576.5143453958096,
            "unit": "iter/sec",
            "range": "stddev: 0.00032100910724812436",
            "extra": "mean: 634.3107520210568 usec\nrounds: 1113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1461473.4921174927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016305017412764984",
            "extra": "mean: 684.240942715372 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 71.28126507856432,
            "unit": "iter/sec",
            "range": "stddev: 0.001335350977734392",
            "extra": "mean: 14.028931710146088 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5592.733224185338,
            "unit": "iter/sec",
            "range": "stddev: 0.0000570817795389246",
            "extra": "mean: 178.80345081999943 usec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 122.50764672597714,
            "unit": "iter/sec",
            "range": "stddev: 0.0006702806563663908",
            "extra": "mean: 8.162755768517714 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 187.34384597713873,
            "unit": "iter/sec",
            "range": "stddev: 0.0011892637811186163",
            "extra": "mean: 5.337778749999764 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 70.51781256891792,
            "unit": "iter/sec",
            "range": "stddev: 0.0014604466618077718",
            "extra": "mean: 14.180814230768828 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 61.96855496152352,
            "unit": "iter/sec",
            "range": "stddev: 0.0012401872402426177",
            "extra": "mean: 16.13721670000056 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 385.4316257543746,
            "unit": "iter/sec",
            "range": "stddev: 0.0002687231048591648",
            "extra": "mean: 2.594493895104689 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.68839689231757,
            "unit": "iter/sec",
            "range": "stddev: 0.0011956518915916493",
            "extra": "mean: 30.591894833332134 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.10269365014304,
            "unit": "iter/sec",
            "range": "stddev: 0.0016132811293338518",
            "extra": "mean: 29.323196878783964 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 61.69369005303944,
            "unit": "iter/sec",
            "range": "stddev: 0.02034316018394409",
            "extra": "mean: 16.209113106061217 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 143.92991297330045,
            "unit": "iter/sec",
            "range": "stddev: 0.0005561928372616906",
            "extra": "mean: 6.947826058822838 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09786082136308906,
            "unit": "iter/sec",
            "range": "stddev: 0.10497922634618108",
            "extra": "mean: 10.218593979399992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1585.1353729503323,
            "unit": "iter/sec",
            "range": "stddev: 0.00016573876041806209",
            "extra": "mean: 630.860945421179 usec\nrounds: 1081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.558992617739981,
            "unit": "iter/sec",
            "range": "stddev: 0.002745022924173845",
            "extra": "mean: 132.2927605000075 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 78.49664323080002,
            "unit": "iter/sec",
            "range": "stddev: 0.0013206807899942673",
            "extra": "mean: 12.739398257575761 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 53696.811932978984,
            "unit": "iter/sec",
            "range": "stddev: 0.000032367139965589835",
            "extra": "mean: 18.623079546102993 usec\nrounds: 11905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 72.96063606888202,
            "unit": "iter/sec",
            "range": "stddev: 0.0014956036847119673",
            "extra": "mean: 13.70602086111066 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 196.0582975624566,
            "unit": "iter/sec",
            "range": "stddev: 0.0007219249092484848",
            "extra": "mean: 5.100523734178802 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 109944.73269334494,
            "unit": "iter/sec",
            "range": "stddev: 0.00003887489036132339",
            "extra": "mean: 9.095478932939649 usec\nrounds: 29762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.575052728707464,
            "unit": "iter/sec",
            "range": "stddev: 0.002614810698704907",
            "extra": "mean: 86.39269499998777 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 69.80472109883735,
            "unit": "iter/sec",
            "range": "stddev: 0.0017156300451958133",
            "extra": "mean: 14.32567861110838 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1566.4446295777432,
            "unit": "iter/sec",
            "range": "stddev: 0.0002532269430666158",
            "extra": "mean: 638.3883484407387 usec\nrounds: 1412"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.10436224542868,
            "unit": "iter/sec",
            "range": "stddev: 0.0022343137717780177",
            "extra": "mean: 23.750508181811284 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4965968.758705339,
            "unit": "iter/sec",
            "range": "stddev: 0.000001407641704954329",
            "extra": "mean: 201.3705781469529 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1552.6528771817038,
            "unit": "iter/sec",
            "range": "stddev: 0.00017703859425413244",
            "extra": "mean: 644.0589617269437 usec\nrounds: 1019"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3147.826336433094,
            "unit": "iter/sec",
            "range": "stddev: 0.00006975882462398363",
            "extra": "mean: 317.6795328338008 usec\nrounds: 1066"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1280.3598909059106,
            "unit": "iter/sec",
            "range": "stddev: 0.00018113502898491486",
            "extra": "mean: 781.0304017665349 usec\nrounds: 906"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 70.99258472282729,
            "unit": "iter/sec",
            "range": "stddev: 0.001672453523518168",
            "extra": "mean: 14.085978189190445 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 65.39695103355834,
            "unit": "iter/sec",
            "range": "stddev: 0.0031036664020770823",
            "extra": "mean: 15.291232759258937 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.25017017778958,
            "unit": "iter/sec",
            "range": "stddev: 0.0006830959579414464",
            "extra": "mean: 13.467982599979678 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 116.28245520292586,
            "unit": "iter/sec",
            "range": "stddev: 0.013348563421150544",
            "extra": "mean: 8.59974962048134 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9040745.766696198,
            "unit": "iter/sec",
            "range": "stddev: 1.5108496958735885e-7",
            "extra": "mean: 110.61034408067546 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 74.6091799251695,
            "unit": "iter/sec",
            "range": "stddev: 0.0014788859861266097",
            "extra": "mean: 13.403176405409715 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8334.521574453986,
            "unit": "iter/sec",
            "range": "stddev: 0.00005158257855368922",
            "extra": "mean: 119.98289176730728 usec\nrounds: 4749"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 502.28028475124376,
            "unit": "iter/sec",
            "range": "stddev: 0.0002061001280776471",
            "extra": "mean: 1.9909202697359583 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 182.9412582023348,
            "unit": "iter/sec",
            "range": "stddev: 0.004306781044899701",
            "extra": "mean: 5.466235499998531 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0908532530267876,
            "unit": "iter/sec",
            "range": "stddev: 0.01324034697894405",
            "extra": "mean: 916.7135884000004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5416311113284722,
            "unit": "iter/sec",
            "range": "stddev: 0.019901925562375612",
            "extra": "mean: 1.8462750368000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 66.60035745828762,
            "unit": "iter/sec",
            "range": "stddev: 0.0019557215355529866",
            "extra": "mean: 15.014934426235003 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5086284830431911,
            "unit": "iter/sec",
            "range": "stddev: 0.02397240805048884",
            "extra": "mean: 1.9660715696000124 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9366.751336661153,
            "unit": "iter/sec",
            "range": "stddev: 0.000041184538353849493",
            "extra": "mean: 106.76060077372112 usec\nrounds: 4654"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 194.43486931967425,
            "unit": "iter/sec",
            "range": "stddev: 0.0006232504959705031",
            "extra": "mean: 5.143110407608422 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.96129319469213,
            "unit": "iter/sec",
            "range": "stddev: 0.0010298784048424466",
            "extra": "mean: 18.531801978725827 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.804503796251467,
            "unit": "iter/sec",
            "range": "stddev: 0.004350462723163128",
            "extra": "mean: 56.165564142851224 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1657.5609088557637,
            "unit": "iter/sec",
            "range": "stddev: 0.00014965853673618463",
            "extra": "mean: 603.2960808000191 usec\nrounds: 1349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 72.02880415196478,
            "unit": "iter/sec",
            "range": "stddev: 0.001142724566955108",
            "extra": "mean: 13.883334754388287 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 68.95655710875688,
            "unit": "iter/sec",
            "range": "stddev: 0.001211560468548594",
            "extra": "mean: 14.501884112671409 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1608.4949043411514,
            "unit": "iter/sec",
            "range": "stddev: 0.0001463283468631202",
            "extra": "mean: 621.6992029636585 usec\nrounds: 877"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 70.52738322114031,
            "unit": "iter/sec",
            "range": "stddev: 0.001399567439874538",
            "extra": "mean: 14.178889876921648 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1546582.201523076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016526793509178696",
            "extra": "mean: 646.5870349569514 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1586757.8359375882,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012526471881219418",
            "extra": "mean: 630.2158888719883 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5108826543763976,
            "unit": "iter/sec",
            "range": "stddev: 0.025107724298118646",
            "extra": "mean: 1.9573966573999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10474.49150262053,
            "unit": "iter/sec",
            "range": "stddev: 0.0000464188088875645",
            "extra": "mean: 95.47002828250116 usec\nrounds: 5728"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 422609.6142813803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024252767116451437",
            "extra": "mean: 2.366250000489065 usec\nrounds: 1812"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 196.85356460996002,
            "unit": "iter/sec",
            "range": "stddev: 0.0006372712910979827",
            "extra": "mean: 5.0799181715676385 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4294296.5474547595,
            "unit": "iter/sec",
            "range": "stddev: 3.008012620411136e-7",
            "extra": "mean: 232.86701068500278 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 132.6313184915293,
            "unit": "iter/sec",
            "range": "stddev: 0.0007484447659917166",
            "extra": "mean: 7.539697345795944 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 850.0679841868188,
            "unit": "iter/sec",
            "range": "stddev: 0.00022639294510832093",
            "extra": "mean: 1.1763765000002997 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.025544952861566,
            "unit": "iter/sec",
            "range": "stddev: 0.002760323460365117",
            "extra": "mean: 31.225073655168124 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 240.9796649671771,
            "unit": "iter/sec",
            "range": "stddev: 0.00033838650056914666",
            "extra": "mean: 4.149727737965799 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 581.3832137727802,
            "unit": "iter/sec",
            "range": "stddev: 0.00016666906006533138",
            "extra": "mean: 1.7200359011239466 msec\nrounds: 445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1593.6488168825351,
            "unit": "iter/sec",
            "range": "stddev: 0.00017179040767425666",
            "extra": "mean: 627.4908181817501 usec\nrounds: 891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 591791.8657816105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044597122772663455",
            "extra": "mean: 1.6897832799361776 usec\nrounds: 20921"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 202.93255625175152,
            "unit": "iter/sec",
            "range": "stddev: 0.0005818528050999025",
            "extra": "mean: 4.9277455449752114 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 183.4620747081429,
            "unit": "iter/sec",
            "range": "stddev: 0.000750402152053882",
            "extra": "mean: 5.450717820513208 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 29.486040630712345,
            "unit": "iter/sec",
            "range": "stddev: 0.0023988643719104275",
            "extra": "mean: 33.91435332142935 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 71.69358262944372,
            "unit": "iter/sec",
            "range": "stddev: 0.0014407149117901428",
            "extra": "mean: 13.948249805963966 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 175.01400103634535,
            "unit": "iter/sec",
            "range": "stddev: 0.013361217163181992",
            "extra": "mean: 5.7138285741626405 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 74.70730554590139,
            "unit": "iter/sec",
            "range": "stddev: 0.001380764334866926",
            "extra": "mean: 13.385571768286885 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 105.18681668998715,
            "unit": "iter/sec",
            "range": "stddev: 0.0006813338985033591",
            "extra": "mean: 9.50689479411911 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 125.89115436323941,
            "unit": "iter/sec",
            "range": "stddev: 0.0005006215469664669",
            "extra": "mean: 7.94336985039199 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 52.817050886287795,
            "unit": "iter/sec",
            "range": "stddev: 0.001724417628818184",
            "extra": "mean: 18.933279749998633 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.153736142678,
            "unit": "iter/sec",
            "range": "stddev: 0.0009037898900162178",
            "extra": "mean: 10.970477375000343 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.53391842517264,
            "unit": "iter/sec",
            "range": "stddev: 0.0013876423926738404",
            "extra": "mean: 13.416710420289213 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 89.51861690238132,
            "unit": "iter/sec",
            "range": "stddev: 0.0008812641445722359",
            "extra": "mean: 11.170860705885174 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2097164.565250715,
            "unit": "iter/sec",
            "range": "stddev: 4.2934084424053295e-7",
            "extra": "mean: 476.8343012130564 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 86.11100906776126,
            "unit": "iter/sec",
            "range": "stddev: 0.0007570755481891912",
            "extra": "mean: 11.612916987340075 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.105436803437456,
            "unit": "iter/sec",
            "range": "stddev: 0.0070736603454416794",
            "extra": "mean: 243.57944060001273 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 212.41332712285094,
            "unit": "iter/sec",
            "range": "stddev: 0.00039331121669495145",
            "extra": "mean: 4.707802535486119 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5390261801111029,
            "unit": "iter/sec",
            "range": "stddev: 0.019493795822556222",
            "extra": "mean: 1.855197459599981 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}
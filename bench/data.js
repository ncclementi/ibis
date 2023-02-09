window.BENCHMARK_DATA = {
  "lastUpdate": 1675944378239,
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
          "id": "8083a6b401b2e1c7d5c67351215f0c97a9cba765",
          "message": "refactor: remove unnecessary top-level rich console",
          "timestamp": "2023-02-09T07:01:21-05:00",
          "tree_id": "0a377f42931e2e65ff2106c3b2e6678651cff04c",
          "url": "https://github.com/ibis-project/ibis/commit/8083a6b401b2e1c7d5c67351215f0c97a9cba765"
        },
        "date": 1675944294014,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 520.2076527071932,
            "unit": "iter/sec",
            "range": "stddev: 0.00004015168133772511",
            "extra": "mean: 1.9223092832178408 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 17281.341055579298,
            "unit": "iter/sec",
            "range": "stddev: 0.0005319468355914433",
            "extra": "mean: 57.865879550889886 usec\nrounds: 7663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.89892888988183,
            "unit": "iter/sec",
            "range": "stddev: 0.000137115123252721",
            "extra": "mean: 11.248729455882303 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.26658299224015,
            "unit": "iter/sec",
            "range": "stddev: 0.0006262822762082363",
            "extra": "mean: 11.078296827586415 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10871.132631300243,
            "unit": "iter/sec",
            "range": "stddev: 0.000002904048159070142",
            "extra": "mean: 91.98673532146897 usec\nrounds: 5331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5754704593475501,
            "unit": "iter/sec",
            "range": "stddev: 0.0010753374622796503",
            "extra": "mean: 634.7310379999954 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4660684.5126181515,
            "unit": "iter/sec",
            "range": "stddev: 1.2989511671596043e-8",
            "extra": "mean: 214.56075760825598 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8687526387514407,
            "unit": "iter/sec",
            "range": "stddev: 0.003361653085683638",
            "extra": "mean: 1.1510756403999949 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 163.62470568799273,
            "unit": "iter/sec",
            "range": "stddev: 0.000637935759389229",
            "extra": "mean: 6.11154651612848 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 162.29599366665815,
            "unit": "iter/sec",
            "range": "stddev: 0.0006473535895794169",
            "extra": "mean: 6.161581548672809 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5432516.52614799,
            "unit": "iter/sec",
            "range": "stddev: 5.61697110509281e-9",
            "extra": "mean: 184.07675249343907 nsec\nrounds: 54645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 147.80992439464438,
            "unit": "iter/sec",
            "range": "stddev: 0.0007386014291185217",
            "extra": "mean: 6.765445582192809 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 137.56927337606118,
            "unit": "iter/sec",
            "range": "stddev: 0.00007379008584653189",
            "extra": "mean: 7.269065071430499 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1450.1290220206188,
            "unit": "iter/sec",
            "range": "stddev: 0.000013746187851947773",
            "extra": "mean: 689.593811871025 usec\nrounds: 994"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 249.9690304327435,
            "unit": "iter/sec",
            "range": "stddev: 0.00024339809788311814",
            "extra": "mean: 4.000495574467011 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 549793.6444681837,
            "unit": "iter/sec",
            "range": "stddev: 2.629493759015276e-7",
            "extra": "mean: 1.8188642412687428 usec\nrounds: 21413"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1558246.094143576,
            "unit": "iter/sec",
            "range": "stddev: 9.8342545215719e-8",
            "extra": "mean: 641.7471564718459 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 983.2735754585977,
            "unit": "iter/sec",
            "range": "stddev: 0.00005422205545908461",
            "extra": "mean: 1.0170109570305508 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.274169779961358,
            "unit": "iter/sec",
            "range": "stddev: 0.0001600663334873127",
            "extra": "mean: 107.8263633000006 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.82699740725224,
            "unit": "iter/sec",
            "range": "stddev: 0.000060825140349593934",
            "extra": "mean: 14.529182409090986 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.586538071665274,
            "unit": "iter/sec",
            "range": "stddev: 0.0007841956203245911",
            "extra": "mean: 24.04624299999965 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 246.90754786273178,
            "unit": "iter/sec",
            "range": "stddev: 0.00020652647383450064",
            "extra": "mean: 4.05009894859897 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6059.722966754681,
            "unit": "iter/sec",
            "range": "stddev: 0.0000474441348977652",
            "extra": "mean: 165.02404573381935 usec\nrounds: 3739"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.724616355137764,
            "unit": "iter/sec",
            "range": "stddev: 0.0002060553465570465",
            "extra": "mean: 72.8617816428547 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8699473354796692,
            "unit": "iter/sec",
            "range": "stddev: 0.0030323781120102063",
            "extra": "mean: 1.1494948707999924 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7462646121849781,
            "unit": "iter/sec",
            "range": "stddev: 0.005038236570341526",
            "extra": "mean: 1.3400072624000132 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 408.76408471764927,
            "unit": "iter/sec",
            "range": "stddev: 0.00008073252457910463",
            "extra": "mean: 2.446398882354702 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.300571137095744,
            "unit": "iter/sec",
            "range": "stddev: 0.0011129743652215011",
            "extra": "mean: 29.154033499999343 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.50752491790331,
            "unit": "iter/sec",
            "range": "stddev: 0.0006197416117454393",
            "extra": "mean: 11.427588666668006 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 219.71485039827786,
            "unit": "iter/sec",
            "range": "stddev: 0.0004151296904720252",
            "extra": "mean: 4.551353712265223 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4521.067615914074,
            "unit": "iter/sec",
            "range": "stddev: 0.000020369881968680317",
            "extra": "mean: 221.18669415162444 usec\nrounds: 2086"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15324323609580454,
            "unit": "iter/sec",
            "range": "stddev: 0.045325955747219995",
            "extra": "mean: 6.525573496600009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1502433.882292376,
            "unit": "iter/sec",
            "range": "stddev: 1.057504758992563e-7",
            "extra": "mean: 665.5866935550102 nsec\nrounds: 144907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 246.307150264422,
            "unit": "iter/sec",
            "range": "stddev: 0.00025795217848540125",
            "extra": "mean: 4.059971458102025 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5181.030982729169,
            "unit": "iter/sec",
            "range": "stddev: 0.000050155531090689876",
            "extra": "mean: 193.0117776429969 usec\nrounds: 3319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.41795639875123,
            "unit": "iter/sec",
            "range": "stddev: 0.0005700201680852357",
            "extra": "mean: 11.439297384607872 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 161.61150804056751,
            "unit": "iter/sec",
            "range": "stddev: 0.0006485444917780567",
            "extra": "mean: 6.187678167998911 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.251444787805658,
            "unit": "iter/sec",
            "range": "stddev: 0.0009525426860257093",
            "extra": "mean: 444.1592374000152 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.70866850773542,
            "unit": "iter/sec",
            "range": "stddev: 0.00068564078240178",
            "extra": "mean: 10.904094632184657 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 143.97747666977887,
            "unit": "iter/sec",
            "range": "stddev: 0.010005399207030292",
            "extra": "mean: 6.945530808916461 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.57849133420786,
            "unit": "iter/sec",
            "range": "stddev: 0.0007076331079228535",
            "extra": "mean: 19.387926519998473 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.246755741649903,
            "unit": "iter/sec",
            "range": "stddev: 0.00016335882172362478",
            "extra": "mean: 41.242631000000074 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.768603350735561,
            "unit": "iter/sec",
            "range": "stddev: 0.010149210767542709",
            "extra": "mean: 209.70500720001155 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 249.32245836034,
            "unit": "iter/sec",
            "range": "stddev: 0.0002238630365308878",
            "extra": "mean: 4.010870126086768 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.585962546351037,
            "unit": "iter/sec",
            "range": "stddev: 0.0021922667934602185",
            "extra": "mean: 1.7065937169999983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9684.886824402629,
            "unit": "iter/sec",
            "range": "stddev: 0.000012838667281056593",
            "extra": "mean: 103.25365883268137 usec\nrounds: 3872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.84379851892001,
            "unit": "iter/sec",
            "range": "stddev: 0.00034969662697017574",
            "extra": "mean: 10.656005146662817 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10342.50053875103,
            "unit": "iter/sec",
            "range": "stddev: 0.000002330951031321934",
            "extra": "mean: 96.68841652492299 usec\nrounds: 4708"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1549337.1807888914,
            "unit": "iter/sec",
            "range": "stddev: 1.2437083835355837e-7",
            "extra": "mean: 645.4372956381386 nsec\nrounds: 142837"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.76643423223891,
            "unit": "iter/sec",
            "range": "stddev: 0.0002338852546401809",
            "extra": "mean: 14.541978381819057 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5181.751424443566,
            "unit": "iter/sec",
            "range": "stddev: 0.000045695081680399087",
            "extra": "mean: 192.98494236577227 usec\nrounds: 1978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 118393.45743262647,
            "unit": "iter/sec",
            "range": "stddev: 3.984447362968909e-7",
            "extra": "mean: 8.446412679256916 usec\nrounds: 33898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 249.28099275258515,
            "unit": "iter/sec",
            "range": "stddev: 0.00023203465881437094",
            "extra": "mean: 4.011537297560885 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.26596504823539,
            "unit": "iter/sec",
            "range": "stddev: 0.00013961232002982066",
            "extra": "mean: 9.77842432258214 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 277.00564000602054,
            "unit": "iter/sec",
            "range": "stddev: 0.00006080508438549722",
            "extra": "mean: 3.6100347992129893 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.36933522829831,
            "unit": "iter/sec",
            "range": "stddev: 0.0006758286194019614",
            "extra": "mean: 26.759908729731425 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.66278681837971,
            "unit": "iter/sec",
            "range": "stddev: 0.00011526706112116867",
            "extra": "mean: 6.960744825757922 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.5552361522483,
            "unit": "iter/sec",
            "range": "stddev: 0.0007169324300977131",
            "extra": "mean: 12.261628402781987 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.50849885119734,
            "unit": "iter/sec",
            "range": "stddev: 0.00035980967170528774",
            "extra": "mean: 8.229877000000036 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.39410769843985,
            "unit": "iter/sec",
            "range": "stddev: 0.000033606090232842875",
            "extra": "mean: 5.8687475377363425 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5770.965231712325,
            "unit": "iter/sec",
            "range": "stddev: 0.000047201576135401774",
            "extra": "mean: 173.28123803360472 usec\nrounds: 2298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 238.34826558733351,
            "unit": "iter/sec",
            "range": "stddev: 0.00022585816290467123",
            "extra": "mean: 4.195541333333464 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 627.1258314449968,
            "unit": "iter/sec",
            "range": "stddev: 0.000016863735693644295",
            "extra": "mean: 1.5945763192306117 msec\nrounds: 520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.58187575750141,
            "unit": "iter/sec",
            "range": "stddev: 0.0006941876316966447",
            "extra": "mean: 10.685829835162727 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6036.8350308931895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000514343276258887",
            "extra": "mean: 165.64971460749746 usec\nrounds: 3553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.1267673929502,
            "unit": "iter/sec",
            "range": "stddev: 0.0006715895592675703",
            "extra": "mean: 10.738051239129568 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5921.457201882939,
            "unit": "iter/sec",
            "range": "stddev: 0.00006263759316720668",
            "extra": "mean: 168.87734993373155 usec\nrounds: 3052"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 392417.2525875418,
            "unit": "iter/sec",
            "range": "stddev: 2.2754518796044564e-7",
            "extra": "mean: 2.5483079385683136 usec\nrounds: 1877"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.75791119648498,
            "unit": "iter/sec",
            "range": "stddev: 0.000759939773767409",
            "extra": "mean: 16.458761999998657 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1444818.4759559932,
            "unit": "iter/sec",
            "range": "stddev: 1.2989634260599094e-7",
            "extra": "mean: 692.1284691755689 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 158.19802138713067,
            "unit": "iter/sec",
            "range": "stddev: 0.0007434851594035031",
            "extra": "mean: 6.321191575164351 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4447528.3109463435,
            "unit": "iter/sec",
            "range": "stddev: 1.52372047160996e-8",
            "extra": "mean: 224.84398751095077 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 253.62733918544876,
            "unit": "iter/sec",
            "range": "stddev: 0.0002168454875526493",
            "extra": "mean: 3.9427926153844712 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 331.5787090472352,
            "unit": "iter/sec",
            "range": "stddev: 0.00003311156332427698",
            "extra": "mean: 3.015875183522548 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.78705381453901,
            "unit": "iter/sec",
            "range": "stddev: 0.0008752766046524834",
            "extra": "mean: 11.13746311428778 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11465173.330835255,
            "unit": "iter/sec",
            "range": "stddev: 3.8786828894201955e-9",
            "extra": "mean: 87.22066131446739 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 143.27754151931114,
            "unit": "iter/sec",
            "range": "stddev: 0.0007673905606869601",
            "extra": "mean: 6.97946090780193 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5159.733379723883,
            "unit": "iter/sec",
            "range": "stddev: 0.00006079350759827683",
            "extra": "mean: 193.80846381126648 usec\nrounds: 3012"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56490.458705270845,
            "unit": "iter/sec",
            "range": "stddev: 6.319101341831657e-7",
            "extra": "mean: 17.702104442403737 usec\nrounds: 3399"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.15412623482912,
            "unit": "iter/sec",
            "range": "stddev: 0.0003433782587346814",
            "extra": "mean: 23.722470119040615 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 144.17780573684018,
            "unit": "iter/sec",
            "range": "stddev: 0.0001111653063994184",
            "extra": "mean: 6.935880282609135 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 261.6165930314964,
            "unit": "iter/sec",
            "range": "stddev: 0.000017574478972421907",
            "extra": "mean: 3.822387519126543 msec\nrounds: 183"
          }
        ]
      }
    ]
  }
}
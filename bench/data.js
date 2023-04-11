window.BENCHMARK_DATA = {
  "lastUpdate": 1681224442822,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "772668bec9d535a21f1c5435e80f47753429182f",
          "message": "fix(snowflake): fix new array operations; remove `ArrayRemove` operation",
          "timestamp": "2023-04-11T16:41:54+02:00",
          "tree_id": "a2b37e65c2ca4af9593ea683c669683c56db044c",
          "url": "https://github.com/ibis-project/ibis/commit/772668bec9d535a21f1c5435e80f47753429182f"
        },
        "date": 1681224365116,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.04686216446152,
            "unit": "iter/sec",
            "range": "stddev: 0.010443462575152298",
            "extra": "mean: 12.81281492000005 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 273.75196990210134,
            "unit": "iter/sec",
            "range": "stddev: 0.0002979887142493234",
            "extra": "mean: 3.6529417499995276 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1731735.2651755752,
            "unit": "iter/sec",
            "range": "stddev: 8.69212035385279e-8",
            "extra": "mean: 577.4554691525632 nsec\nrounds: 138870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 281.9046817070551,
            "unit": "iter/sec",
            "range": "stddev: 0.00029641528994748937",
            "extra": "mean: 3.547298306450841 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.23270021274833,
            "unit": "iter/sec",
            "range": "stddev: 0.0012126145599117405",
            "extra": "mean: 16.331143270271873 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.591212446461147,
            "unit": "iter/sec",
            "range": "stddev: 0.000456502094183415",
            "extra": "mean: 178.85208433332403 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4510.8928378236815,
            "unit": "iter/sec",
            "range": "stddev: 0.00003891743558019598",
            "extra": "mean: 221.68560326129546 usec\nrounds: 920"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7944.695211103163,
            "unit": "iter/sec",
            "range": "stddev: 0.00001803234253623592",
            "extra": "mean: 125.87015277847827 usec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.73019063367481,
            "unit": "iter/sec",
            "range": "stddev: 0.00023138631635223793",
            "extra": "mean: 11.530010399997082 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.79772604685144,
            "unit": "iter/sec",
            "range": "stddev: 0.0008715442978123886",
            "extra": "mean: 10.54877623863862 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.69564519297655,
            "unit": "iter/sec",
            "range": "stddev: 0.0009047741971558643",
            "extra": "mean: 23.42159242424331 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.3336909095799,
            "unit": "iter/sec",
            "range": "stddev: 0.00011103799687979268",
            "extra": "mean: 6.198333369565406 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.42932872209963,
            "unit": "iter/sec",
            "range": "stddev: 0.00031606265188427636",
            "extra": "mean: 10.589930200001163 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2243.5959401594755,
            "unit": "iter/sec",
            "range": "stddev: 0.00008150747508958646",
            "extra": "mean: 445.713054699555 usec\nrounds: 1298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.11873471019686,
            "unit": "iter/sec",
            "range": "stddev: 0.000957691564927015",
            "extra": "mean: 10.08891006250027 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 678.8131307861594,
            "unit": "iter/sec",
            "range": "stddev: 0.0000488387403549572",
            "extra": "mean: 1.4731594818177158 msec\nrounds: 550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.27962735858976,
            "unit": "iter/sec",
            "range": "stddev: 0.00006454869703396285",
            "extra": "mean: 8.986370854546262 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6186344.678482155,
            "unit": "iter/sec",
            "range": "stddev: 9.797656100538082e-9",
            "extra": "mean: 161.6463439997157 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8768290085810537,
            "unit": "iter/sec",
            "range": "stddev: 0.009428976418702271",
            "extra": "mean: 1.1404732168000122 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2168.5229107514647,
            "unit": "iter/sec",
            "range": "stddev: 0.00008732406266261854",
            "extra": "mean: 461.1433870686969 usec\nrounds: 1160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1897226.5939771496,
            "unit": "iter/sec",
            "range": "stddev: 1.0872084666621903e-7",
            "extra": "mean: 527.085169043358 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 98.99545131589765,
            "unit": "iter/sec",
            "range": "stddev: 0.0008034042472125678",
            "extra": "mean: 10.101474226416403 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.80973909801858,
            "unit": "iter/sec",
            "range": "stddev: 0.00007218305811164032",
            "extra": "mean: 10.437352292306583 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 97.57407547675808,
            "unit": "iter/sec",
            "range": "stddev: 0.0008250370868746398",
            "extra": "mean: 10.248623879999741 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1157.7094365961857,
            "unit": "iter/sec",
            "range": "stddev: 0.0000107573835010701",
            "extra": "mean: 863.7745952387918 usec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.8328057168111,
            "unit": "iter/sec",
            "range": "stddev: 0.00076597836735129",
            "extra": "mean: 10.327078644447358 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.32009843853727,
            "unit": "iter/sec",
            "range": "stddev: 0.0007724332143723315",
            "extra": "mean: 10.602194193548684 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6697369402035691,
            "unit": "iter/sec",
            "range": "stddev: 0.0778328462949798",
            "extra": "mean: 1.4931235534000051 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 301.5696765555074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000317253483185521",
            "extra": "mean: 3.3159832627135457 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.8335456617515,
            "unit": "iter/sec",
            "range": "stddev: 0.0001745710227455302",
            "extra": "mean: 13.362991037736093 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.66754140023596,
            "unit": "iter/sec",
            "range": "stddev: 0.000618367672542343",
            "extra": "mean: 21.428169772726527 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 278.3392974019227,
            "unit": "iter/sec",
            "range": "stddev: 0.0002711802250164063",
            "extra": "mean: 3.5927373868304238 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147008.51495926324,
            "unit": "iter/sec",
            "range": "stddev: 3.0501209910573215e-7",
            "extra": "mean: 6.802327064368379 usec\nrounds: 36901"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12067.973147989902,
            "unit": "iter/sec",
            "range": "stddev: 0.000022467705871390483",
            "extra": "mean: 82.86395633607825 usec\nrounds: 3985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17160935528475812,
            "unit": "iter/sec",
            "range": "stddev: 0.13102835144513467",
            "extra": "mean: 5.82718814100001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2142.342532323752,
            "unit": "iter/sec",
            "range": "stddev: 0.00008367675342750511",
            "extra": "mean: 466.7787643254797 usec\nrounds: 1239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2131.15814802178,
            "unit": "iter/sec",
            "range": "stddev: 0.00008594899679810372",
            "extra": "mean: 469.22843381108856 usec\nrounds: 1254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.9266680100796,
            "unit": "iter/sec",
            "range": "stddev: 0.003400288804600457",
            "extra": "mean: 6.175635009903076 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1875577.9026515954,
            "unit": "iter/sec",
            "range": "stddev: 9.17146053787813e-8",
            "extra": "mean: 533.1690027837561 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2251.39380614753,
            "unit": "iter/sec",
            "range": "stddev: 0.00008217614959195495",
            "extra": "mean: 444.16929515816196 usec\nrounds: 1301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.00919439724963,
            "unit": "iter/sec",
            "range": "stddev: 0.0008711376255144401",
            "extra": "mean: 10.525297118285517 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.2896983270952,
            "unit": "iter/sec",
            "range": "stddev: 0.00044512243440185097",
            "extra": "mean: 18.086551930234375 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2144.185852879037,
            "unit": "iter/sec",
            "range": "stddev: 0.00008584538409057075",
            "extra": "mean: 466.3774824636969 usec\nrounds: 1169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.14128085595804,
            "unit": "iter/sec",
            "range": "stddev: 0.0009764678331801509",
            "extra": "mean: 10.086615700001857 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.16498335826995,
            "unit": "iter/sec",
            "range": "stddev: 0.00018806431380360964",
            "extra": "mean: 5.12386998319402 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.1403982708505,
            "unit": "iter/sec",
            "range": "stddev: 0.0009728297005858844",
            "extra": "mean: 10.08670549484793 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.895724974978862,
            "unit": "iter/sec",
            "range": "stddev: 0.057492734682340674",
            "extra": "mean: 112.413547272731 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14175.034571923397,
            "unit": "iter/sec",
            "range": "stddev: 0.000001567749950844215",
            "extra": "mean: 70.54656515481858 usec\nrounds: 6262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5623809.87345991,
            "unit": "iter/sec",
            "range": "stddev: 9.731058609181526e-9",
            "extra": "mean: 177.81539961383817 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 500505.87361883384,
            "unit": "iter/sec",
            "range": "stddev: 3.368627780643945e-7",
            "extra": "mean: 1.9979785507203893 usec\nrounds: 2098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.40167517507928,
            "unit": "iter/sec",
            "range": "stddev: 0.00005514232480198104",
            "extra": "mean: 6.0458879811313295 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6467429070230333,
            "unit": "iter/sec",
            "range": "stddev: 0.0015204664588943067",
            "extra": "mean: 607.2593334000089 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.1121593080887,
            "unit": "iter/sec",
            "range": "stddev: 0.00012531401775474796",
            "extra": "mean: 3.4233426036377583 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.16302243259656,
            "unit": "iter/sec",
            "range": "stddev: 0.00028236175869752084",
            "extra": "mean: 3.5566554639656816 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 728.8739332034571,
            "unit": "iter/sec",
            "range": "stddev: 0.00009469552111463953",
            "extra": "mean: 1.3719793704309369 msec\nrounds: 629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.9389997977435,
            "unit": "iter/sec",
            "range": "stddev: 0.0001451967880508911",
            "extra": "mean: 8.478959476635588 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2706019.1208125153,
            "unit": "iter/sec",
            "range": "stddev: 2.5733448454145387e-8",
            "extra": "mean: 369.54653879165903 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2155.4461831577173,
            "unit": "iter/sec",
            "range": "stddev: 0.00010126601511693817",
            "extra": "mean: 463.9410660371976 usec\nrounds: 1272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.35855774703721,
            "unit": "iter/sec",
            "range": "stddev: 0.0009267138021158285",
            "extra": "mean: 10.486735785714732 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7898040634902846,
            "unit": "iter/sec",
            "range": "stddev: 0.0027479792640294487",
            "extra": "mean: 1.2661368132000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.98661438806908,
            "unit": "iter/sec",
            "range": "stddev: 0.031724812873996575",
            "extra": "mean: 27.788110023807565 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.350003055945873,
            "unit": "iter/sec",
            "range": "stddev: 0.0009127679369966316",
            "extra": "mean: 39.447726999995325 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.990688615079236,
            "unit": "iter/sec",
            "range": "stddev: 0.0009672491871432982",
            "extra": "mean: 23.260850947366407 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.0546931901368,
            "unit": "iter/sec",
            "range": "stddev: 0.000023095519770520703",
            "extra": "mean: 1.8482419847499245 msec\nrounds: 459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.79040221420652,
            "unit": "iter/sec",
            "range": "stddev: 0.0009001789842931592",
            "extra": "mean: 10.021003802083447 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12735.815088420712,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016529793312332824",
            "extra": "mean: 78.51872793828413 usec\nrounds: 5734"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74944.92173951135,
            "unit": "iter/sec",
            "range": "stddev: 6.427359063903451e-7",
            "extra": "mean: 13.343132220162088 usec\nrounds: 3532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.6960647040161,
            "unit": "iter/sec",
            "range": "stddev: 0.00031601094800817926",
            "extra": "mean: 3.6536879004140332 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11723526.458077261,
            "unit": "iter/sec",
            "range": "stddev: 3.77379001642203e-9",
            "extra": "mean: 85.29856639772044 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1749.9905510773647,
            "unit": "iter/sec",
            "range": "stddev: 0.000036608575560037245",
            "extra": "mean: 571.4316568077237 usec\nrounds: 1285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 268.922787781939,
            "unit": "iter/sec",
            "range": "stddev: 0.0003877695327497029",
            "extra": "mean: 3.71853946721268 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.59087326168165,
            "unit": "iter/sec",
            "range": "stddev: 0.00011272476441315266",
            "extra": "mean: 7.3211333679973905 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8925133494243562,
            "unit": "iter/sec",
            "range": "stddev: 0.00877827085810613",
            "extra": "mean: 1.120431420600005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 281.0296492888258,
            "unit": "iter/sec",
            "range": "stddev: 0.00025528240963071917",
            "extra": "mean: 3.5583434080019742 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 78.57109043511736,
            "unit": "iter/sec",
            "range": "stddev: 0.022341304573753648",
            "extra": "mean: 12.727327500001829 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.71025803787524,
            "unit": "iter/sec",
            "range": "stddev: 0.00003738318204560042",
            "extra": "mean: 9.114917947369792 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.31626532164836,
            "unit": "iter/sec",
            "range": "stddev: 0.0007507806978626628",
            "extra": "mean: 10.382462366667749 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.50618699537014,
            "unit": "iter/sec",
            "range": "stddev: 0.0007668355773701938",
            "extra": "mean: 9.949636235290326 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7076050.407352962,
            "unit": "iter/sec",
            "range": "stddev: 3.7189247125269593e-9",
            "extra": "mean: 141.3217744973634 nsec\nrounds: 68966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.79205840012156,
            "unit": "iter/sec",
            "range": "stddev: 0.00041455249591588886",
            "extra": "mean: 3.9715311370579642 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.564758296513823,
            "unit": "iter/sec",
            "range": "stddev: 0.002818654766717829",
            "extra": "mean: 389.9002886000062 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.58365904160329,
            "unit": "iter/sec",
            "range": "stddev: 0.00019565621542010027",
            "extra": "mean: 18.66240600000053 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 237.1515180815001,
            "unit": "iter/sec",
            "range": "stddev: 0.0037241753178687844",
            "extra": "mean: 4.2167134669419974 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2174.1377392638597,
            "unit": "iter/sec",
            "range": "stddev: 0.00008362828144811462",
            "extra": "mean: 459.95245928557847 usec\nrounds: 1400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.25809661258432,
            "unit": "iter/sec",
            "range": "stddev: 0.00009804702341180654",
            "extra": "mean: 6.239934338028789 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.3203946627442,
            "unit": "iter/sec",
            "range": "stddev: 0.021830889224536784",
            "extra": "mean: 12.607098139788851 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 758204.3189174918,
            "unit": "iter/sec",
            "range": "stddev: 1.6175620537189637e-7",
            "extra": "mean: 1.31890570265773 usec\nrounds: 28654"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.426384020208928,
            "unit": "iter/sec",
            "range": "stddev: 0.00043601657136992913",
            "extra": "mean: 64.82400533332869 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}
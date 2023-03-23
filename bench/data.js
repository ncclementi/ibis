window.BENCHMARK_DATA = {
  "lastUpdate": 1679593311143,
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
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "d6235ee0d12a0c3136ef09e19832d82169b7bb40",
          "message": "refactor(duckdb): simplify `to_pyarrow_batches` implementation",
          "timestamp": "2023-03-23T12:34:10-05:00",
          "tree_id": "ff406faa51b9a4b27f0f76dbf7b56135bc6964a0",
          "url": "https://github.com/ibis-project/ibis/commit/d6235ee0d12a0c3136ef09e19832d82169b7bb40"
        },
        "date": 1679593231586,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.40250223768925,
            "unit": "iter/sec",
            "range": "stddev: 0.000085752888397615",
            "extra": "mean: 8.237062511628785 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.7666810713431,
            "unit": "iter/sec",
            "range": "stddev: 0.00019669334348925232",
            "extra": "mean: 3.2178481829280425 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 291.12814823895553,
            "unit": "iter/sec",
            "range": "stddev: 0.00003232236160055159",
            "extra": "mean: 3.434913477274648 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.93885186548468,
            "unit": "iter/sec",
            "range": "stddev: 0.00009935620347732546",
            "extra": "mean: 6.099835326530902 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.92929476269279,
            "unit": "iter/sec",
            "range": "stddev: 0.0005202034931793576",
            "extra": "mean: 10.53415599999801 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.92531829635445,
            "unit": "iter/sec",
            "range": "stddev: 0.00021024310116791873",
            "extra": "mean: 9.908316534247891 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1769881.8565393954,
            "unit": "iter/sec",
            "range": "stddev: 1.0336147484152597e-7",
            "extra": "mean: 565.0094645047519 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1988417.506283106,
            "unit": "iter/sec",
            "range": "stddev: 1.1592046278581101e-7",
            "extra": "mean: 502.91249037998676 nsec\nrounds: 147081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.83226705887616,
            "unit": "iter/sec",
            "range": "stddev: 0.0006068535589957612",
            "extra": "mean: 9.18845143103579 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 309.78471655589817,
            "unit": "iter/sec",
            "range": "stddev: 0.0002246441437100261",
            "extra": "mean: 3.2280482107630313 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.13777809992195,
            "unit": "iter/sec",
            "range": "stddev: 0.0007226665574973979",
            "extra": "mean: 9.79069663158028 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 286.6551353917422,
            "unit": "iter/sec",
            "range": "stddev: 0.0001183999388225352",
            "extra": "mean: 3.4885124197527544 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11408275.65054975,
            "unit": "iter/sec",
            "range": "stddev: 3.2411054996503024e-9",
            "extra": "mean: 87.65566599476062 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.00605340016298,
            "unit": "iter/sec",
            "range": "stddev: 0.0007608169718345889",
            "extra": "mean: 9.803339769229833 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.10937393648072,
            "unit": "iter/sec",
            "range": "stddev: 0.0007708995620156957",
            "extra": "mean: 8.325744837608138 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.151217922289234,
            "unit": "iter/sec",
            "range": "stddev: 0.0007837606533442262",
            "extra": "mean: 26.211483000016262 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.16230895757477,
            "unit": "iter/sec",
            "range": "stddev: 0.0007067743230082141",
            "extra": "mean: 9.331639171715654 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.85267260137405,
            "unit": "iter/sec",
            "range": "stddev: 0.00012292311435405497",
            "extra": "mean: 5.158556684211079 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6781607402641547,
            "unit": "iter/sec",
            "range": "stddev: 0.004637586280035387",
            "extra": "mean: 1.474576660999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2731118.5733228642,
            "unit": "iter/sec",
            "range": "stddev: 1.4161476810521757e-8",
            "extra": "mean: 366.1503421224247 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72815.1283687613,
            "unit": "iter/sec",
            "range": "stddev: 5.315361556769223e-7",
            "extra": "mean: 13.733409833951672 usec\nrounds: 12854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5544577151371786,
            "unit": "iter/sec",
            "range": "stddev: 0.003444457079129771",
            "extra": "mean: 391.4725204000092 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7803566577881504,
            "unit": "iter/sec",
            "range": "stddev: 0.0014931416612957134",
            "extra": "mean: 561.6852082000037 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 245.8086695902066,
            "unit": "iter/sec",
            "range": "stddev: 0.008633486141316414",
            "extra": "mean: 4.068204761317506 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5387.240956099856,
            "unit": "iter/sec",
            "range": "stddev: 0.000049876252986965566",
            "extra": "mean: 185.6237744234777 usec\nrounds: 2385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.76387508392315,
            "unit": "iter/sec",
            "range": "stddev: 0.00018999093097810013",
            "extra": "mean: 3.313849279413884 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5294.084807875941,
            "unit": "iter/sec",
            "range": "stddev: 0.00004926626899369614",
            "extra": "mean: 188.89006056576824 usec\nrounds: 3814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.451943347281311,
            "unit": "iter/sec",
            "range": "stddev: 0.0014406656445019586",
            "extra": "mean: 95.67598739999994 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5583.074815106253,
            "unit": "iter/sec",
            "range": "stddev: 0.000049994256965963484",
            "extra": "mean: 179.1127708506211 usec\nrounds: 2230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6994613.580382978,
            "unit": "iter/sec",
            "range": "stddev: 3.880547476056695e-9",
            "extra": "mean: 142.9671544407568 nsec\nrounds: 57472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 670.8381819812505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000425895921136325",
            "extra": "mean: 1.490672455534067 msec\nrounds: 551"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5753.573720207279,
            "unit": "iter/sec",
            "range": "stddev: 0.000049342998082503557",
            "extra": "mean: 173.80502078001948 usec\nrounds: 2358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 745.1757198064665,
            "unit": "iter/sec",
            "range": "stddev: 0.000017469831159334224",
            "extra": "mean: 1.3419653558488396 msec\nrounds: 607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.32659649058284,
            "unit": "iter/sec",
            "range": "stddev: 0.00038624304992141903",
            "extra": "mean: 15.545669358496156 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5813.658889005378,
            "unit": "iter/sec",
            "range": "stddev: 0.00004673651008699234",
            "extra": "mean: 172.00871586930748 usec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 312.8976092907477,
            "unit": "iter/sec",
            "range": "stddev: 0.00021047094179660718",
            "extra": "mean: 3.19593365467612 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6200514.224697228,
            "unit": "iter/sec",
            "range": "stddev: 2.8301848057603758e-8",
            "extra": "mean: 161.2769463564947 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.74931591068898,
            "unit": "iter/sec",
            "range": "stddev: 0.00007568972795847151",
            "extra": "mean: 6.182406363635918 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.53669778041429,
            "unit": "iter/sec",
            "range": "stddev: 0.0006580239035026045",
            "extra": "mean: 8.807724899081094 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 300.52636928408845,
            "unit": "iter/sec",
            "range": "stddev: 0.00021978547056071746",
            "extra": "mean: 3.327495029411869 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.877282901727426,
            "unit": "iter/sec",
            "range": "stddev: 0.0008205336030897918",
            "extra": "mean: 24.46346549999636 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 313.64391300020736,
            "unit": "iter/sec",
            "range": "stddev: 0.00022876512330969755",
            "extra": "mean: 3.1883290526328145 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12076.485706366211,
            "unit": "iter/sec",
            "range": "stddev: 0.000014593854410382384",
            "extra": "mean: 82.80554660639746 usec\nrounds: 5761"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 532.3408529563388,
            "unit": "iter/sec",
            "range": "stddev: 0.000024148912021030603",
            "extra": "mean: 1.878495693964741 msec\nrounds: 464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2736497.733093423,
            "unit": "iter/sec",
            "range": "stddev: 1.5725584137840657e-8",
            "extra": "mean: 365.4305968924269 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.83406375363442,
            "unit": "iter/sec",
            "range": "stddev: 0.0007110530262293152",
            "extra": "mean: 8.344872640352824 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.51881246508887,
            "unit": "iter/sec",
            "range": "stddev: 0.00010097274979128461",
            "extra": "mean: 64.4379202499934 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.01621495667746,
            "unit": "iter/sec",
            "range": "stddev: 0.030377867338737582",
            "extra": "mean: 32.241200333334376 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.57777996977075,
            "unit": "iter/sec",
            "range": "stddev: 0.00012290359170901273",
            "extra": "mean: 7.375839906974183 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.87608738227769,
            "unit": "iter/sec",
            "range": "stddev: 0.0006862197628753013",
            "extra": "mean: 9.815846148936021 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1746.533315214279,
            "unit": "iter/sec",
            "range": "stddev: 0.000014131533937311764",
            "extra": "mean: 572.5627969926883 usec\nrounds: 1463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.6199155979329,
            "unit": "iter/sec",
            "range": "stddev: 0.00018825299158420767",
            "extra": "mean: 10.458072397855346 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.82881574927829,
            "unit": "iter/sec",
            "range": "stddev: 0.0006794234397776155",
            "extra": "mean: 8.345238111109538 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 233.25402044530125,
            "unit": "iter/sec",
            "range": "stddev: 0.003968251443041085",
            "extra": "mean: 4.287171548387107 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5430.196788598182,
            "unit": "iter/sec",
            "range": "stddev: 0.000048948292572322814",
            "extra": "mean: 184.15538864074063 usec\nrounds: 2236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17005440068813107,
            "unit": "iter/sec",
            "range": "stddev: 0.012145746612624402",
            "extra": "mean: 5.880471166600012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1188.0771764441809,
            "unit": "iter/sec",
            "range": "stddev: 0.00004828958514516139",
            "extra": "mean: 841.6961623595188 usec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.401704330395237,
            "unit": "iter/sec",
            "range": "stddev: 0.0006686588454503246",
            "extra": "mean: 39.36743720000777 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.99521376516495,
            "unit": "iter/sec",
            "range": "stddev: 0.00013934223560608502",
            "extra": "mean: 6.097738934210377 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.461969109722742,
            "unit": "iter/sec",
            "range": "stddev: 0.010494075368337229",
            "extra": "mean: 183.08415516666324 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.88918441290676,
            "unit": "iter/sec",
            "range": "stddev: 0.0006840829618005002",
            "extra": "mean: 8.272038601769529 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.99720883003593,
            "unit": "iter/sec",
            "range": "stddev: 0.0006650441744606762",
            "extra": "mean: 9.346038190477387 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.13886849877585,
            "unit": "iter/sec",
            "range": "stddev: 0.0006976846436611868",
            "extra": "mean: 8.76125734513239 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 486265.03497298557,
            "unit": "iter/sec",
            "range": "stddev: 3.1476183509121844e-7",
            "extra": "mean: 2.0564916826799093 usec\nrounds: 2164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.64230531216724,
            "unit": "iter/sec",
            "range": "stddev: 0.0007707843419333469",
            "extra": "mean: 9.556364388349587 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.78875697636381,
            "unit": "iter/sec",
            "range": "stddev: 0.000719458135268898",
            "extra": "mean: 8.348028857143209 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12727.42209458573,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015253535930095684",
            "extra": "mean: 78.57050646771603 usec\nrounds: 5179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146613.8817210108,
            "unit": "iter/sec",
            "range": "stddev: 4.908200881624941e-7",
            "extra": "mean: 6.820636547246488 usec\nrounds: 36632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.48997669720444,
            "unit": "iter/sec",
            "range": "stddev: 0.0006965470659853847",
            "extra": "mean: 8.299445542371009 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 339.2855429408025,
            "unit": "iter/sec",
            "range": "stddev: 0.00001800777881457998",
            "extra": "mean: 2.94736990952331 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.100248204328075,
            "unit": "iter/sec",
            "range": "stddev: 0.00028186628964065383",
            "extra": "mean: 17.82523307843139 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 163.2857853764214,
            "unit": "iter/sec",
            "range": "stddev: 0.003905828894507941",
            "extra": "mean: 6.1242318043466435 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.999476110131866,
            "unit": "iter/sec",
            "range": "stddev: 0.0001428364829954001",
            "extra": "mean: 15.62512790384683 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.04944277116297,
            "unit": "iter/sec",
            "range": "stddev: 0.00007404847474853952",
            "extra": "mean: 8.924631620366789 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5636695.887920834,
            "unit": "iter/sec",
            "range": "stddev: 9.487863949665792e-9",
            "extra": "mean: 177.40889696457072 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8510.301898738091,
            "unit": "iter/sec",
            "range": "stddev: 0.000011482448406842296",
            "extra": "mean: 117.50464459413364 usec\nrounds: 3866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.34557793480576,
            "unit": "iter/sec",
            "range": "stddev: 0.00008855694653714727",
            "extra": "mean: 13.272179037040098 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8745889327284104,
            "unit": "iter/sec",
            "range": "stddev: 0.01062248010330034",
            "extra": "mean: 1.1433942994000064 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 308.2993512098588,
            "unit": "iter/sec",
            "range": "stddev: 0.0002526218985504848",
            "extra": "mean: 3.2436007279149344 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8738612278501638,
            "unit": "iter/sec",
            "range": "stddev: 0.004604159670673905",
            "extra": "mean: 1.1443464569999946 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8483148515766846,
            "unit": "iter/sec",
            "range": "stddev: 0.0025040328240596723",
            "extra": "mean: 1.1788076067999895 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 788907.8465434472,
            "unit": "iter/sec",
            "range": "stddev: 1.5427888786897596e-7",
            "extra": "mean: 1.267575172919677 usec\nrounds: 24876"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5256.8388733642105,
            "unit": "iter/sec",
            "range": "stddev: 0.000048346473059253954",
            "extra": "mean: 190.2283908808549 usec\nrounds: 2259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5239.329161480189,
            "unit": "iter/sec",
            "range": "stddev: 0.000021267400688031513",
            "extra": "mean: 190.86412958209425 usec\nrounds: 2346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.5175428963638,
            "unit": "iter/sec",
            "range": "stddev: 0.000504153922255909",
            "extra": "mean: 21.044859204547027 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13991.47979287394,
            "unit": "iter/sec",
            "range": "stddev: 0.000001438078246595827",
            "extra": "mean: 71.47206834471606 usec\nrounds: 6672"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5554.66095754739,
            "unit": "iter/sec",
            "range": "stddev: 0.000048801788438746266",
            "extra": "mean: 180.0289896435985 usec\nrounds: 2414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.11491371832167,
            "unit": "iter/sec",
            "range": "stddev: 0.0005217604149102386",
            "extra": "mean: 10.856005391894536 msec\nrounds: 74"
          }
        ]
      }
    ]
  }
}
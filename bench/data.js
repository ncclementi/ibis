window.BENCHMARK_DATA = {
  "lastUpdate": 1682123396340,
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
          "id": "cb59858bf5b58c9c24f245fde468d3bb6edccec4",
          "message": "chore(flake/poetry2nix): `a28d8d41` -> `0311feba`",
          "timestamp": "2023-04-22T00:24:55Z",
          "tree_id": "93c6476bb77c00c44bc091ed87525ec75d4ada39",
          "url": "https://github.com/ibis-project/ibis/commit/cb59858bf5b58c9c24f245fde468d3bb6edccec4"
        },
        "date": 1682123309848,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13159.914899274303,
            "unit": "iter/sec",
            "range": "stddev: 0.000006903237744696739",
            "extra": "mean: 75.98833333300236 usec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 189.71130411720415,
            "unit": "iter/sec",
            "range": "stddev: 0.0032726569255658393",
            "extra": "mean: 5.2711671803288915 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8032666386559019,
            "unit": "iter/sec",
            "range": "stddev: 0.0016566746487461533",
            "extra": "mean: 1.2449166340000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 94.60530132584186,
            "unit": "iter/sec",
            "range": "stddev: 0.006933865516332623",
            "extra": "mean: 10.570232175000172 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5785878.00718134,
            "unit": "iter/sec",
            "range": "stddev: 1.0299704525529543e-8",
            "extra": "mean: 172.8346153789225 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.59602428112809,
            "unit": "iter/sec",
            "range": "stddev: 0.002312372293491573",
            "extra": "mean: 385.20440939999787 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 150.760833619627,
            "unit": "iter/sec",
            "range": "stddev: 0.006349677562398712",
            "extra": "mean: 6.633022489932782 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1183.0605336576195,
            "unit": "iter/sec",
            "range": "stddev: 0.000015476723742646667",
            "extra": "mean: 845.2652857147901 usec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 104.84123482929915,
            "unit": "iter/sec",
            "range": "stddev: 0.00023925344819060841",
            "extra": "mean: 9.538231799999153 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 86.73574375260083,
            "unit": "iter/sec",
            "range": "stddev: 0.010662641592280368",
            "extra": "mean: 11.529272209301999 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.900981377813565,
            "unit": "iter/sec",
            "range": "stddev: 0.018705207991301424",
            "extra": "mean: 25.70629235000048 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.1834811429442,
            "unit": "iter/sec",
            "range": "stddev: 0.00003053282994565948",
            "extra": "mean: 1.84780214999923 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 313.0827553080286,
            "unit": "iter/sec",
            "range": "stddev: 0.000050517720568077466",
            "extra": "mean: 3.1940436930681257 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 280.50830513399427,
            "unit": "iter/sec",
            "range": "stddev: 0.00024546812917689134",
            "extra": "mean: 3.5649568362060298 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 98.0125485857888,
            "unit": "iter/sec",
            "range": "stddev: 0.0004440619009400368",
            "extra": "mean: 10.202775200001213 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.912471439375548,
            "unit": "iter/sec",
            "range": "stddev: 0.0005152869104537747",
            "extra": "mean: 35.82627938095516 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2292.4645404123835,
            "unit": "iter/sec",
            "range": "stddev: 0.00008393783463246583",
            "extra": "mean: 436.21176352857066 usec\nrounds: 1349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.81346337051447,
            "unit": "iter/sec",
            "range": "stddev: 0.00010962159547738473",
            "extra": "mean: 8.487994252873081 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.663290212186316,
            "unit": "iter/sec",
            "range": "stddev: 0.00026015940629733913",
            "extra": "mean: 85.7390994999984 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.81853147216455,
            "unit": "iter/sec",
            "range": "stddev: 0.0003282729520318203",
            "extra": "mean: 3.9869462361116588 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.98510686555213,
            "unit": "iter/sec",
            "range": "stddev: 0.0007290333256008919",
            "extra": "mean: 9.805353259258814 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 274.19754084794107,
            "unit": "iter/sec",
            "range": "stddev: 0.00031875478913596315",
            "extra": "mean: 3.64700572042898 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.867942252993422,
            "unit": "iter/sec",
            "range": "stddev: 0.00023212672488341017",
            "extra": "mean: 170.41749166666875 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.27783936467956,
            "unit": "iter/sec",
            "range": "stddev: 0.0007171634551406571",
            "extra": "mean: 23.106513972971864 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17889243286545678,
            "unit": "iter/sec",
            "range": "stddev: 0.07389888645109874",
            "extra": "mean: 5.589951368999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2339.7671194901513,
            "unit": "iter/sec",
            "range": "stddev: 0.00008172747126626215",
            "extra": "mean: 427.3929621756142 usec\nrounds: 1269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 251.0280800332859,
            "unit": "iter/sec",
            "range": "stddev: 0.0040545539283109245",
            "extra": "mean: 3.9836180871375095 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.38120827346492,
            "unit": "iter/sec",
            "range": "stddev: 0.00012300071182776352",
            "extra": "mean: 9.400156439560144 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1887081.3510314026,
            "unit": "iter/sec",
            "range": "stddev: 8.673229651737408e-8",
            "extra": "mean: 529.9188609189744 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2366.251290644517,
            "unit": "iter/sec",
            "range": "stddev: 0.00009871585713268692",
            "extra": "mean: 422.6093838611794 usec\nrounds: 1326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8154.336282587433,
            "unit": "iter/sec",
            "range": "stddev: 0.00001659836633569558",
            "extra": "mean: 122.63413788015772 usec\nrounds: 2038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2369.6349940694563,
            "unit": "iter/sec",
            "range": "stddev: 0.00008398267730864097",
            "extra": "mean: 422.0059217992326 usec\nrounds: 1445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.1679675756823,
            "unit": "iter/sec",
            "range": "stddev: 0.000028839771399614896",
            "extra": "mean: 1.4552482758007248 msec\nrounds: 562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1764660.4387048907,
            "unit": "iter/sec",
            "range": "stddev: 1.0183577761797943e-7",
            "extra": "mean: 566.6812595027711 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2309.385938409059,
            "unit": "iter/sec",
            "range": "stddev: 0.00015477050042162245",
            "extra": "mean: 433.0155403513465 usec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4791.9299426732405,
            "unit": "iter/sec",
            "range": "stddev: 0.000019765333080220917",
            "extra": "mean: 208.68418611356762 usec\nrounds: 2074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.29700101955285,
            "unit": "iter/sec",
            "range": "stddev: 0.00016469832585895957",
            "extra": "mean: 18.417223441859907 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.72758864635927,
            "unit": "iter/sec",
            "range": "stddev: 0.0006749203789836648",
            "extra": "mean: 10.338312098899191 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.282899363036,
            "unit": "iter/sec",
            "range": "stddev: 0.0003417407042300667",
            "extra": "mean: 3.741354207033476 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141593.2931292103,
            "unit": "iter/sec",
            "range": "stddev: 4.364555643943031e-7",
            "extra": "mean: 7.062481406428303 usec\nrounds: 38911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.5097408626475,
            "unit": "iter/sec",
            "range": "stddev: 0.00030886640446172055",
            "extra": "mean: 3.6428579796749565 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.87439005254106,
            "unit": "iter/sec",
            "range": "stddev: 0.0001195082252222807",
            "extra": "mean: 6.294280655738737 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.24555833557892,
            "unit": "iter/sec",
            "range": "stddev: 0.00012340799588533597",
            "extra": "mean: 6.655770800002377 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.08083214578456,
            "unit": "iter/sec",
            "range": "stddev: 0.014610005120681408",
            "extra": "mean: 12.183112352271118 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 715456.562216797,
            "unit": "iter/sec",
            "range": "stddev: 2.2672994159095092e-7",
            "extra": "mean: 1.3977088936071298 usec\nrounds: 25063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.06577593279666,
            "unit": "iter/sec",
            "range": "stddev: 0.0005995553972540261",
            "extra": "mean: 62.24411470588239 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9316216576819801,
            "unit": "iter/sec",
            "range": "stddev: 0.0039551479438566664",
            "extra": "mean: 1.073397115399996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2378.6263502756988,
            "unit": "iter/sec",
            "range": "stddev: 0.00008115829161598745",
            "extra": "mean: 420.41071305045165 usec\nrounds: 1272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.74531116243378,
            "unit": "iter/sec",
            "range": "stddev: 0.0007182932149483926",
            "extra": "mean: 10.025533915789934 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1774.5734860319403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048095364770209145",
            "extra": "mean: 563.5156886267156 usec\nrounds: 1442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 496505.1404815796,
            "unit": "iter/sec",
            "range": "stddev: 2.6225902072104194e-7",
            "extra": "mean: 2.0140778382073976 usec\nrounds: 2017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 763.175211012467,
            "unit": "iter/sec",
            "range": "stddev: 0.0000153667729700853",
            "extra": "mean: 1.3103150961538035 msec\nrounds: 624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.0049010622899,
            "unit": "iter/sec",
            "range": "stddev: 0.0002574702519152076",
            "extra": "mean: 3.6231240682726713 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.8387760428028,
            "unit": "iter/sec",
            "range": "stddev: 0.0008272550289403521",
            "extra": "mean: 9.916820088886565 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.80303337330749,
            "unit": "iter/sec",
            "range": "stddev: 0.0008592591102419788",
            "extra": "mean: 9.920336388059516 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 104.88999421583293,
            "unit": "iter/sec",
            "range": "stddev: 0.0002482792138460601",
            "extra": "mean: 9.533797837211168 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.8350507236598,
            "unit": "iter/sec",
            "range": "stddev: 0.0006948464814128395",
            "extra": "mean: 10.016522180851771 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.17544549717284,
            "unit": "iter/sec",
            "range": "stddev: 0.0006909370960167326",
            "extra": "mean: 21.65653171795011 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9784.0442028051,
            "unit": "iter/sec",
            "range": "stddev: 0.000001596057969528799",
            "extra": "mean: 102.2072242594017 usec\nrounds: 4691"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12875517.916021798,
            "unit": "iter/sec",
            "range": "stddev: 3.2908805011343515e-9",
            "extra": "mean: 77.66677865091096 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.64914921742452,
            "unit": "iter/sec",
            "range": "stddev: 0.0008485271800866345",
            "extra": "mean: 10.346702563830885 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 130.3411004876515,
            "unit": "iter/sec",
            "range": "stddev: 0.0004249846530863972",
            "extra": "mean: 7.672177051280459 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.72049892058,
            "unit": "iter/sec",
            "range": "stddev: 0.00008786944365631975",
            "extra": "mean: 13.20646343137355 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 93.9875899469791,
            "unit": "iter/sec",
            "range": "stddev: 0.000736013915244659",
            "extra": "mean: 10.639702545454423 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 374.8083694389574,
            "unit": "iter/sec",
            "range": "stddev: 0.000039218318408860906",
            "extra": "mean: 2.6680300695976413 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7158057677140606,
            "unit": "iter/sec",
            "range": "stddev: 0.08355129464912814",
            "extra": "mean: 1.3970270220000032 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11959.193405100372,
            "unit": "iter/sec",
            "range": "stddev: 0.000011889585075681102",
            "extra": "mean: 83.61767939746828 usec\nrounds: 4713"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70652.5568350625,
            "unit": "iter/sec",
            "range": "stddev: 5.409135947486692e-7",
            "extra": "mean: 14.153769442972706 usec\nrounds: 12691"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.58564042462218,
            "unit": "iter/sec",
            "range": "stddev: 0.00032792730609788515",
            "extra": "mean: 21.465842068180827 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1608457.4389895012,
            "unit": "iter/sec",
            "range": "stddev: 1.180069996629173e-7",
            "extra": "mean: 621.7136840302352 nsec\nrounds: 137006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9359808841299413,
            "unit": "iter/sec",
            "range": "stddev: 0.0022918342369703175",
            "extra": "mean: 1.068397888200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 178.5574237326786,
            "unit": "iter/sec",
            "range": "stddev: 0.0037988274681180186",
            "extra": "mean: 5.600439226190434 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1863515.4786250591,
            "unit": "iter/sec",
            "range": "stddev: 9.511621859576622e-8",
            "extra": "mean: 536.620173789928 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.80274953075569,
            "unit": "iter/sec",
            "range": "stddev: 0.00026286640551911915",
            "extra": "mean: 10.224661421052721 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2353.4551698634955,
            "unit": "iter/sec",
            "range": "stddev: 0.00008055457194946351",
            "extra": "mean: 424.9071802196265 usec\nrounds: 1365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.67347370000852,
            "unit": "iter/sec",
            "range": "stddev: 0.0017560752122916235",
            "extra": "mean: 15.95571365306123 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.08337193967472,
            "unit": "iter/sec",
            "range": "stddev: 0.00008979162331838078",
            "extra": "mean: 9.002247433963952 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 74.9760638195324,
            "unit": "iter/sec",
            "range": "stddev: 0.017809151825171687",
            "extra": "mean: 13.337590012820662 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.95834813951083,
            "unit": "iter/sec",
            "range": "stddev: 0.0007925436594466757",
            "extra": "mean: 9.90507489898839 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 269.20183299205166,
            "unit": "iter/sec",
            "range": "stddev: 0.00023846695809575614",
            "extra": "mean: 3.7146849591827467 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.46836401591872,
            "unit": "iter/sec",
            "range": "stddev: 0.000323817420185705",
            "extra": "mean: 17.10326630188828 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 82.27561624572026,
            "unit": "iter/sec",
            "range": "stddev: 0.015940457975058765",
            "extra": "mean: 12.154269340425843 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2295.389560010211,
            "unit": "iter/sec",
            "range": "stddev: 0.00008587462295105013",
            "extra": "mean: 435.65589798864096 usec\nrounds: 1392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6220406.303117401,
            "unit": "iter/sec",
            "range": "stddev: 1.2989158007477311e-8",
            "extra": "mean: 160.76120292957035 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 270.635690904089,
            "unit": "iter/sec",
            "range": "stddev: 0.00033086142864094745",
            "extra": "mean: 3.6950041461988525 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 92.83644485642606,
            "unit": "iter/sec",
            "range": "stddev: 0.0008439591754880139",
            "extra": "mean: 10.771631782610005 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7283573.882275942,
            "unit": "iter/sec",
            "range": "stddev: 7.83393919050641e-9",
            "extra": "mean: 137.29523667403927 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.664821922444594,
            "unit": "iter/sec",
            "range": "stddev: 0.002492560638140272",
            "extra": "mean: 600.6648438000013 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}
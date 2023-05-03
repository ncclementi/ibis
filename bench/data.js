window.BENCHMARK_DATA = {
  "lastUpdate": 1683074953985,
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
          "id": "b803ee36ee65ae87e0bb52298b415608bf19b6ed",
          "message": "chore(flake/poetry2nix): `34702e36` -> `fa63354b`",
          "timestamp": "2023-05-03T00:33:13Z",
          "tree_id": "e585a11cf3d435ce7870e4fde05bc16ac3197851",
          "url": "https://github.com/ibis-project/ibis/commit/b803ee36ee65ae87e0bb52298b415608bf19b6ed"
        },
        "date": 1683074371038,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4523.310226836044,
            "unit": "iter/sec",
            "range": "stddev: 0.00003615546780373034",
            "extra": "mean: 221.07703205213892 usec\nrounds: 936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9347020501477648,
            "unit": "iter/sec",
            "range": "stddev: 0.005366467329144429",
            "extra": "mean: 1.0698596412000085 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.634258283874911,
            "unit": "iter/sec",
            "range": "stddev: 0.0019044627612257805",
            "extra": "mean: 611.8983821999961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2214.933925322066,
            "unit": "iter/sec",
            "range": "stddev: 0.00009399958197492796",
            "extra": "mean: 451.48073654368426 usec\nrounds: 353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 162.11855604259284,
            "unit": "iter/sec",
            "range": "stddev: 0.00007458024568184082",
            "extra": "mean: 6.168325356520406 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 288.6907023207837,
            "unit": "iter/sec",
            "range": "stddev: 0.00025967464993216613",
            "extra": "mean: 3.463914812500032 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 286.7830298369315,
            "unit": "iter/sec",
            "range": "stddev: 0.00025509247159941154",
            "extra": "mean: 3.4869566744190297 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.10506228077193,
            "unit": "iter/sec",
            "range": "stddev: 0.0004247984698835737",
            "extra": "mean: 21.22914080952601 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9241149802399903,
            "unit": "iter/sec",
            "range": "stddev: 0.004190016389163977",
            "extra": "mean: 1.0821164263999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.32643423120794,
            "unit": "iter/sec",
            "range": "stddev: 0.0009547533875898278",
            "extra": "mean: 9.967462789472249 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.91279598862337,
            "unit": "iter/sec",
            "range": "stddev: 0.0003012317205993897",
            "extra": "mean: 19.263073409090673 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.81370320481125,
            "unit": "iter/sec",
            "range": "stddev: 0.00025207275306277695",
            "extra": "mean: 9.91928644827597 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.043618013702833,
            "unit": "iter/sec",
            "range": "stddev: 0.000056970536262752376",
            "extra": "mean: 52.511030166665286 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.05565667370172,
            "unit": "iter/sec",
            "range": "stddev: 0.0009221208151762834",
            "extra": "mean: 9.994437428572057 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 278.3005928321121,
            "unit": "iter/sec",
            "range": "stddev: 0.00030614449738832535",
            "extra": "mean: 3.5932370456834093 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 760.8472107093315,
            "unit": "iter/sec",
            "range": "stddev: 0.000011914513664635749",
            "extra": "mean: 1.3143243294112996 msec\nrounds: 340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2136.648199057366,
            "unit": "iter/sec",
            "range": "stddev: 0.00008945106706189965",
            "extra": "mean: 468.0227659570602 usec\nrounds: 423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 86.6081993524653,
            "unit": "iter/sec",
            "range": "stddev: 0.017369136021199216",
            "extra": "mean: 11.546250903223921 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3489292060482965,
            "unit": "iter/sec",
            "range": "stddev: 0.0009867989690243253",
            "extra": "mean: 741.328748400008 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7892069426066968,
            "unit": "iter/sec",
            "range": "stddev: 0.0009757452957999717",
            "extra": "mean: 1.267094783399989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13892.899795997315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030963296093886624",
            "extra": "mean: 71.97921346039725 usec\nrounds: 5453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2164.9121668669527,
            "unit": "iter/sec",
            "range": "stddev: 0.00008676495309685828",
            "extra": "mean: 461.9125040288326 usec\nrounds: 1117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.85441361194472,
            "unit": "iter/sec",
            "range": "stddev: 0.00005204943543243157",
            "extra": "mean: 5.239595883977056 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.94610734266496,
            "unit": "iter/sec",
            "range": "stddev: 0.00007406926909088544",
            "extra": "mean: 9.438761131314314 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.92764950752256,
            "unit": "iter/sec",
            "range": "stddev: 0.015165040055750915",
            "extra": "mean: 12.058704255319425 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2108.8341805553355,
            "unit": "iter/sec",
            "range": "stddev: 0.00010659804806809765",
            "extra": "mean: 474.19565237540985 usec\nrounds: 1726"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.379860369652576,
            "unit": "iter/sec",
            "range": "stddev: 0.0011069890599874873",
            "extra": "mean: 17.7368300212795 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6280601.880294282,
            "unit": "iter/sec",
            "range": "stddev: 1.665424999020493e-8",
            "extra": "mean: 159.22040897663516 nsec\nrounds: 45046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4501882.631810763,
            "unit": "iter/sec",
            "range": "stddev: 1.4351222418462149e-8",
            "extra": "mean: 222.1292916288538 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.11470132113928,
            "unit": "iter/sec",
            "range": "stddev: 0.00007979467841225048",
            "extra": "mean: 6.056395899327301 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 283.4067571005095,
            "unit": "iter/sec",
            "range": "stddev: 0.0002651291288507041",
            "extra": "mean: 3.5284973803406974 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 229.79059075749686,
            "unit": "iter/sec",
            "range": "stddev: 0.010475965987221501",
            "extra": "mean: 4.351788281250046 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 416.7114636121866,
            "unit": "iter/sec",
            "range": "stddev: 0.000054146298009445496",
            "extra": "mean: 2.399741997332361 msec\nrounds: 375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.22043616854961,
            "unit": "iter/sec",
            "range": "stddev: 0.00029868695250127414",
            "extra": "mean: 10.843583499999047 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2196.4843834953485,
            "unit": "iter/sec",
            "range": "stddev: 0.0000852989203873176",
            "extra": "mean: 455.2729841896996 usec\nrounds: 1265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 272.3223184362239,
            "unit": "iter/sec",
            "range": "stddev: 0.0003896062442022304",
            "extra": "mean: 3.672119148156391 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 314.97239947267553,
            "unit": "iter/sec",
            "range": "stddev: 0.00005157885255321877",
            "extra": "mean: 3.1748813599991386 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1789.58929805428,
            "unit": "iter/sec",
            "range": "stddev: 0.000013231644388007867",
            "extra": "mean: 558.7874274210535 usec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5487549.051485338,
            "unit": "iter/sec",
            "range": "stddev: 1.0814325022548687e-8",
            "extra": "mean: 182.23071732347765 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 82.0662433587123,
            "unit": "iter/sec",
            "range": "stddev: 0.016442234126444327",
            "extra": "mean: 12.185278125001908 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8033.216074286495,
            "unit": "iter/sec",
            "range": "stddev: 0.00006919331631447521",
            "extra": "mean: 124.48314482675225 usec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.33070862284634,
            "unit": "iter/sec",
            "range": "stddev: 0.027657736474464",
            "extra": "mean: 28.303989333329064 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.76788890493674,
            "unit": "iter/sec",
            "range": "stddev: 0.0010064886693468644",
            "extra": "mean: 33.59324549999106 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.83324562663718,
            "unit": "iter/sec",
            "range": "stddev: 0.0008477561756028616",
            "extra": "mean: 9.724481551722677 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1990.6316586642342,
            "unit": "iter/sec",
            "range": "stddev: 0.00013913001874633687",
            "extra": "mean: 502.35310769197054 usec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.85266284424118,
            "unit": "iter/sec",
            "range": "stddev: 0.0007546393462779915",
            "extra": "mean: 9.447093470586262 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.17401669203572,
            "unit": "iter/sec",
            "range": "stddev: 0.0009003095093788396",
            "extra": "mean: 9.982628560001672 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2101.5419957315835,
            "unit": "iter/sec",
            "range": "stddev: 0.00010998198246803208",
            "extra": "mean: 475.84107385485885 usec\nrounds: 1178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1188.5752225852568,
            "unit": "iter/sec",
            "range": "stddev: 0.000013585126474853656",
            "extra": "mean: 841.343468211386 usec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 81.16990980487077,
            "unit": "iter/sec",
            "range": "stddev: 0.022302849839843503",
            "extra": "mean: 12.319836284208769 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.54054208832027,
            "unit": "iter/sec",
            "range": "stddev: 0.0008952856301414999",
            "extra": "mean: 9.475031871289449 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.41975751304847,
            "unit": "iter/sec",
            "range": "stddev: 0.0005755779023341264",
            "extra": "mean: 23.030989975001148 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.51478877858233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000867641552955687",
            "extra": "mean: 7.603707607998331 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.27246032915484,
            "unit": "iter/sec",
            "range": "stddev: 0.0008822448881066724",
            "extra": "mean: 9.972828000005139 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11173921.171728348,
            "unit": "iter/sec",
            "range": "stddev: 3.3681607224439378e-9",
            "extra": "mean: 89.49409832338505 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.79942578466435,
            "unit": "iter/sec",
            "range": "stddev: 0.00022856719895408248",
            "extra": "mean: 8.944589768520716 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.96764646226178,
            "unit": "iter/sec",
            "range": "stddev: 0.0010267027919419977",
            "extra": "mean: 10.641960692307098 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10347.320478496238,
            "unit": "iter/sec",
            "range": "stddev: 0.000005588650335765358",
            "extra": "mean: 96.64337758535616 usec\nrounds: 1838"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 233.3273770299536,
            "unit": "iter/sec",
            "range": "stddev: 0.003628000907060455",
            "extra": "mean: 4.285823689997699 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.73921007256718,
            "unit": "iter/sec",
            "range": "stddev: 0.0000448672475865956",
            "extra": "mean: 9.196314736263483 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 77.75190613151713,
            "unit": "iter/sec",
            "range": "stddev: 0.027984842537237025",
            "extra": "mean: 12.861421021736788 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.0465677472659,
            "unit": "iter/sec",
            "range": "stddev: 0.0005709541353257118",
            "extra": "mean: 19.589955684210736 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 127.02907765332517,
            "unit": "iter/sec",
            "range": "stddev: 0.00007587451707351747",
            "extra": "mean: 7.872213342594662 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2064.1746114402054,
            "unit": "iter/sec",
            "range": "stddev: 0.0000913167025703321",
            "extra": "mean: 484.45513982089204 usec\nrounds: 1223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 156.35307928633094,
            "unit": "iter/sec",
            "range": "stddev: 0.0043583036920893815",
            "extra": "mean: 6.395780655964506 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1043446.7815368706,
            "unit": "iter/sec",
            "range": "stddev: 6.464249682769696e-7",
            "extra": "mean: 958.3622449121184 nsec\nrounds: 51283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 255.46661549998657,
            "unit": "iter/sec",
            "range": "stddev: 0.0004804003898116775",
            "extra": "mean: 3.914405794443433 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148014.74385098898,
            "unit": "iter/sec",
            "range": "stddev: 3.2896115237354804e-7",
            "extra": "mean: 6.756083711543837 usec\nrounds: 36363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5322122659039543,
            "unit": "iter/sec",
            "range": "stddev: 0.00269793432463787",
            "extra": "mean: 394.9116010000125 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 177.07737527656408,
            "unit": "iter/sec",
            "range": "stddev: 0.00007129685352128359",
            "extra": "mean: 5.647248828023196 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.3831500238422,
            "unit": "iter/sec",
            "range": "stddev: 0.000024344749374476005",
            "extra": "mean: 1.8608696606055344 msec\nrounds: 495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.595755271065237,
            "unit": "iter/sec",
            "range": "stddev: 0.00011899365822573275",
            "extra": "mean: 116.33649033333565 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12515.388282824506,
            "unit": "iter/sec",
            "range": "stddev: 0.000011365361299489345",
            "extra": "mean: 79.90163608206628 usec\nrounds: 4523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1893460.0648078914,
            "unit": "iter/sec",
            "range": "stddev: 1.0511028204358682e-7",
            "extra": "mean: 528.1336631208322 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.22924380653846,
            "unit": "iter/sec",
            "range": "stddev: 0.0008784849195987184",
            "extra": "mean: 10.500975961034984 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 78.97430544674906,
            "unit": "iter/sec",
            "range": "stddev: 0.02624594869320277",
            "extra": "mean: 12.662346244681846 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 200.7098162694283,
            "unit": "iter/sec",
            "range": "stddev: 0.00010478158775302573",
            "extra": "mean: 4.982317350426063 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1839783.4764044683,
            "unit": "iter/sec",
            "range": "stddev: 1.1952782893396986e-7",
            "extra": "mean: 543.5422226719436 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 277.95411897195794,
            "unit": "iter/sec",
            "range": "stddev: 0.0003815173027030672",
            "extra": "mean: 3.5977160680280744 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7121167.283414373,
            "unit": "iter/sec",
            "range": "stddev: 4.24823640407211e-9",
            "extra": "mean: 140.42641609179466 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1674341.4252347576,
            "unit": "iter/sec",
            "range": "stddev: 1.1716590319349585e-7",
            "extra": "mean: 597.2497514118371 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.232201486112174,
            "unit": "iter/sec",
            "range": "stddev: 0.001982892218587239",
            "extra": "mean: 29.21226087097246 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.09592267764219,
            "unit": "iter/sec",
            "range": "stddev: 0.0008739887293047364",
            "extra": "mean: 9.794710442623662 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.576189859462286,
            "unit": "iter/sec",
            "range": "stddev: 0.0006667030947818327",
            "extra": "mean: 44.294453857140695 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6131643.922856992,
            "unit": "iter/sec",
            "range": "stddev: 8.87557106533319e-9",
            "extra": "mean: 163.0884005300811 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1841187.132231836,
            "unit": "iter/sec",
            "range": "stddev: 1.0050388659951243e-7",
            "extra": "mean: 543.1278453417322 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 669.123041853914,
            "unit": "iter/sec",
            "range": "stddev: 0.0003005133902587354",
            "extra": "mean: 1.4944934450760172 msec\nrounds: 528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1660856844321705,
            "unit": "iter/sec",
            "range": "stddev: 0.11136548527723368",
            "extra": "mean: 6.020988524199993 sec\nrounds: 5"
          }
        ]
      },
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
          "id": "c5ba4894d65a6cf1b09770a1ad9059370282ef3e",
          "message": "chore(flake/nixpkgs): `bb59422c` -> `f5c3f099`",
          "timestamp": "2023-05-03T00:40:47Z",
          "tree_id": "14ebd407792c91710057dd321eeec77c63234a59",
          "url": "https://github.com/ibis-project/ibis/commit/c5ba4894d65a6cf1b09770a1ad9059370282ef3e"
        },
        "date": 1683074855658,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5653945103039305,
            "unit": "iter/sec",
            "range": "stddev: 0.018540982185435567",
            "extra": "mean: 1.7686765289999813 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 74.36766541928412,
            "unit": "iter/sec",
            "range": "stddev: 0.001668358535495294",
            "extra": "mean: 13.446704214284669 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1646.8664493610715,
            "unit": "iter/sec",
            "range": "stddev: 0.00015795065326053672",
            "extra": "mean: 607.213778863469 usec\nrounds: 511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1302.0881320684903,
            "unit": "iter/sec",
            "range": "stddev: 0.00016031116933251405",
            "extra": "mean: 767.997169601266 usec\nrounds: 1079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1535454.0736683025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017691054624854387",
            "extra": "mean: 651.2731426808052 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 74.95493934419123,
            "unit": "iter/sec",
            "range": "stddev: 0.0017692384344329723",
            "extra": "mean: 13.341348932430252 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5397.053997277515,
            "unit": "iter/sec",
            "range": "stddev: 0.00005963455708892972",
            "extra": "mean: 185.2862692321476 usec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 76.71740444661626,
            "unit": "iter/sec",
            "range": "stddev: 0.0009345110265392068",
            "extra": "mean: 13.03485183333919 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 242.47859503663148,
            "unit": "iter/sec",
            "range": "stddev: 0.00025694737913689255",
            "extra": "mean: 4.124075363637475 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.63777026987253,
            "unit": "iter/sec",
            "range": "stddev: 0.0012109698354393894",
            "extra": "mean: 13.398042256410347 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.490935420739546,
            "unit": "iter/sec",
            "range": "stddev: 0.002375431664411979",
            "extra": "mean: 154.06099971428537 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 195.11026979699184,
            "unit": "iter/sec",
            "range": "stddev: 0.0005505872528404308",
            "extra": "mean: 5.12530683823296 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 95.73793696369488,
            "unit": "iter/sec",
            "range": "stddev: 0.0006124329606101002",
            "extra": "mean: 10.445180162793916 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 73.84462514881602,
            "unit": "iter/sec",
            "range": "stddev: 0.0012006748611968923",
            "extra": "mean: 13.54194699999819 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 62.318364195259775,
            "unit": "iter/sec",
            "range": "stddev: 0.01707357647541194",
            "extra": "mean: 16.046634293331863 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 133.39002248143717,
            "unit": "iter/sec",
            "range": "stddev: 0.0037793708931988727",
            "extra": "mean: 7.496812590605583 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 72.1064452042279,
            "unit": "iter/sec",
            "range": "stddev: 0.0021179507572952976",
            "extra": "mean: 13.868385789476777 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 181.63922177503775,
            "unit": "iter/sec",
            "range": "stddev: 0.0007443131322075483",
            "extra": "mean: 5.505418874996676 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 385.15774557036934,
            "unit": "iter/sec",
            "range": "stddev: 0.0004740957564255325",
            "extra": "mean: 2.596338802739454 msec\nrounds: 365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5408478219149914,
            "unit": "iter/sec",
            "range": "stddev: 0.02682787818824598",
            "extra": "mean: 1.8489489269999808 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.0580821696252038,
            "unit": "iter/sec",
            "range": "stddev: 0.012626296431786312",
            "extra": "mean: 945.1061824000135 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4456595.458395706,
            "unit": "iter/sec",
            "range": "stddev: 1.7073568381206948e-7",
            "extra": "mean: 224.38653212651005 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 205.1398940443653,
            "unit": "iter/sec",
            "range": "stddev: 0.0004967174476676907",
            "extra": "mean: 4.874722221430667 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8628.449506277633,
            "unit": "iter/sec",
            "range": "stddev: 0.00003525137500630243",
            "extra": "mean: 115.89567734880403 usec\nrounds: 3682"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 83.49809794315348,
            "unit": "iter/sec",
            "range": "stddev: 0.00041034335299214867",
            "extra": "mean: 11.976320714285157 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.556127203713399,
            "unit": "iter/sec",
            "range": "stddev: 0.036725228525553176",
            "extra": "mean: 1.798149763799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 112.29581910235744,
            "unit": "iter/sec",
            "range": "stddev: 0.003397032826743912",
            "extra": "mean: 8.90505103389915 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10429.947226083159,
            "unit": "iter/sec",
            "range": "stddev: 0.00003593536617091491",
            "extra": "mean: 95.87776220949662 usec\nrounds: 5774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1575.9409102208795,
            "unit": "iter/sec",
            "range": "stddev: 0.00018724743252604623",
            "extra": "mean: 634.5415576906641 usec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 584.5472939221974,
            "unit": "iter/sec",
            "range": "stddev: 0.00016151862804409813",
            "extra": "mean: 1.7107255655743383 msec\nrounds: 488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4530193.856416658,
            "unit": "iter/sec",
            "range": "stddev: 7.643355736011199e-7",
            "extra": "mean: 220.74110550121873 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 144.43606888737474,
            "unit": "iter/sec",
            "range": "stddev: 0.00040919306398890757",
            "extra": "mean: 6.923478378380392 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 22.384515493499556,
            "unit": "iter/sec",
            "range": "stddev: 0.0019150312375556607",
            "extra": "mean: 44.6737388750004 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1589.4638387829427,
            "unit": "iter/sec",
            "range": "stddev: 0.00017800371393233711",
            "extra": "mean: 629.1429698493191 usec\nrounds: 995"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 82.03176224381333,
            "unit": "iter/sec",
            "range": "stddev: 0.0012748063219375153",
            "extra": "mean: 12.190400067571607 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0609326625213662,
            "unit": "iter/sec",
            "range": "stddev: 0.01922747506838312",
            "extra": "mean: 942.5668898000026 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 183.00845985911437,
            "unit": "iter/sec",
            "range": "stddev: 0.004377440090687966",
            "extra": "mean: 5.464228269938074 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3408653.435798216,
            "unit": "iter/sec",
            "range": "stddev: 2.8460412736498807e-7",
            "extra": "mean: 293.3709803108076 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1564.6940702570932,
            "unit": "iter/sec",
            "range": "stddev: 0.000157204588836662",
            "extra": "mean: 639.1025689997605 usec\nrounds: 1000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.486789937693658,
            "unit": "iter/sec",
            "range": "stddev: 0.0026145208157843302",
            "extra": "mean: 31.759350571424047 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 100.12034921067236,
            "unit": "iter/sec",
            "range": "stddev: 0.00040646541750359805",
            "extra": "mean: 9.987979545454928 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.768659547166234,
            "unit": "iter/sec",
            "range": "stddev: 0.002666353451789733",
            "extra": "mean: 53.280310055545975 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8991213847472173,
            "unit": "iter/sec",
            "range": "stddev: 0.012390819252854204",
            "extra": "mean: 526.5592857999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 189.52379489052902,
            "unit": "iter/sec",
            "range": "stddev: 0.0007330000077166492",
            "extra": "mean: 5.276382316941315 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 141.71333590488464,
            "unit": "iter/sec",
            "range": "stddev: 0.0007665286563436837",
            "extra": "mean: 7.056498907563516 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 869482.472127836,
            "unit": "iter/sec",
            "range": "stddev: 0.000003374186821644044",
            "extra": "mean: 1.1501094410250223 usec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1637.2882845585832,
            "unit": "iter/sec",
            "range": "stddev: 0.00016565784501092293",
            "extra": "mean: 610.765989979341 usec\nrounds: 898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9653189.748580692,
            "unit": "iter/sec",
            "range": "stddev: 1.0937601817340698e-7",
            "extra": "mean: 103.59270107039106 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 195.74670114482242,
            "unit": "iter/sec",
            "range": "stddev: 0.0006626404087378436",
            "extra": "mean: 5.108642925533411 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1657.504114471796,
            "unit": "iter/sec",
            "range": "stddev: 0.000155029077525673",
            "extra": "mean: 603.3167527422244 usec\nrounds: 1003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 77.92318056437618,
            "unit": "iter/sec",
            "range": "stddev: 0.001578378503588277",
            "extra": "mean: 12.833151736842296 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 206.78952318613617,
            "unit": "iter/sec",
            "range": "stddev: 0.0006429962296057705",
            "extra": "mean: 4.835834932990664 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3167.99642021916,
            "unit": "iter/sec",
            "range": "stddev: 0.00017160344802578503",
            "extra": "mean: 315.65692234299325 usec\nrounds: 1674"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 57.06878070085612,
            "unit": "iter/sec",
            "range": "stddev: 0.03309186995585569",
            "extra": "mean: 17.522715357137436 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1643267.4421909123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011677550191777686",
            "extra": "mean: 608.5436699620448 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.2976146381066,
            "unit": "iter/sec",
            "range": "stddev: 0.0005464955287694147",
            "extra": "mean: 10.604722121951642 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.48046470557233,
            "unit": "iter/sec",
            "range": "stddev: 0.0007563971914854757",
            "extra": "mean: 12.581708017239242 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 82.34070101895874,
            "unit": "iter/sec",
            "range": "stddev: 0.0010795099842142372",
            "extra": "mean: 12.144662209880293 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5673309.944508407,
            "unit": "iter/sec",
            "range": "stddev: 8.160441043228583e-8",
            "extra": "mean: 176.26394640536824 nsec\nrounds: 63288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 129.84495638590212,
            "unit": "iter/sec",
            "range": "stddev: 0.0008150494400623712",
            "extra": "mean: 7.701492825242881 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10239293180012472,
            "unit": "iter/sec",
            "range": "stddev: 0.12833227991148174",
            "extra": "mean: 9.766299122600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.796011880289537,
            "unit": "iter/sec",
            "range": "stddev: 0.001346511710407842",
            "extra": "mean: 31.450485166660275 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 70.71624496126675,
            "unit": "iter/sec",
            "range": "stddev: 0.0014462070011170842",
            "extra": "mean: 14.141022342853862 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 43.333323172896975,
            "unit": "iter/sec",
            "range": "stddev: 0.0017027004720351945",
            "extra": "mean: 23.076928487807614 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 177.60724040770478,
            "unit": "iter/sec",
            "range": "stddev: 0.0011081855614136508",
            "extra": "mean: 5.630401090093279 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7404.607693296133,
            "unit": "iter/sec",
            "range": "stddev: 0.00007941207138327378",
            "extra": "mean: 135.05104408237105 usec\nrounds: 4174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1576.718469967407,
            "unit": "iter/sec",
            "range": "stddev: 0.00016221801869339218",
            "extra": "mean: 634.2286331057386 usec\nrounds: 1172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 72.34289006924094,
            "unit": "iter/sec",
            "range": "stddev: 0.0014216234489687638",
            "extra": "mean: 13.823058479456355 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.30830645355223,
            "unit": "iter/sec",
            "range": "stddev: 0.0006107328253342081",
            "extra": "mean: 3.4446138046001606 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 482.0760545521456,
            "unit": "iter/sec",
            "range": "stddev: 0.0002809751313311786",
            "extra": "mean: 2.0743614841625186 msec\nrounds: 442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1452811.9277979152,
            "unit": "iter/sec",
            "range": "stddev: 0.000005739641030259429",
            "extra": "mean: 688.3203399326021 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 72.95111713310331,
            "unit": "iter/sec",
            "range": "stddev: 0.0014398856345573966",
            "extra": "mean: 13.70780927419446 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 39.77605340959766,
            "unit": "iter/sec",
            "range": "stddev: 0.000869847556301045",
            "extra": "mean: 25.14075465714021 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1295892.2599807745,
            "unit": "iter/sec",
            "range": "stddev: 0.00000437460379631249",
            "extra": "mean: 771.6690892303315 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 56.521788529581855,
            "unit": "iter/sec",
            "range": "stddev: 0.032668398190983335",
            "extra": "mean: 17.692292229511267 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.33709486887899,
            "unit": "iter/sec",
            "range": "stddev: 0.0014626520431948581",
            "extra": "mean: 29.996614999992843 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 851.1380048088056,
            "unit": "iter/sec",
            "range": "stddev: 0.0001026574184415725",
            "extra": "mean: 1.1748976010354912 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4532370.226791005,
            "unit": "iter/sec",
            "range": "stddev: 1.268133700406721e-7",
            "extra": "mean: 220.6351092170215 nsec\nrounds: 46512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 110387.4464189045,
            "unit": "iter/sec",
            "range": "stddev: 0.000020765893594073708",
            "extra": "mean: 9.059001113271012 usec\nrounds: 34129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 122.3363816940589,
            "unit": "iter/sec",
            "range": "stddev: 0.0005738862964416105",
            "extra": "mean: 8.174183232759152 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 74.62753123141752,
            "unit": "iter/sec",
            "range": "stddev: 0.001997457064109997",
            "extra": "mean: 13.399880493152493 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1640.4844358397515,
            "unit": "iter/sec",
            "range": "stddev: 0.00014294657643114058",
            "extra": "mean: 609.5760362932718 usec\nrounds: 1543"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.12969419415137,
            "unit": "iter/sec",
            "range": "stddev: 0.001656625644218525",
            "extra": "mean: 13.863915703126395 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 76.64900287635788,
            "unit": "iter/sec",
            "range": "stddev: 0.0012111504680645728",
            "extra": "mean: 13.046484135130825 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 175.5705491665521,
            "unit": "iter/sec",
            "range": "stddev: 0.000817999681274713",
            "extra": "mean: 5.695716079644807 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.19166829120578,
            "unit": "iter/sec",
            "range": "stddev: 0.002160343656082081",
            "extra": "mean: 25.515627264695695 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.014340110059578,
            "unit": "iter/sec",
            "range": "stddev: 0.0027243106416482486",
            "extra": "mean: 32.24314934482993 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.792865227139117,
            "unit": "iter/sec",
            "range": "stddev: 0.0024570127136143254",
            "extra": "mean: 67.60015619998967 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}
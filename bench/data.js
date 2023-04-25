window.BENCHMARK_DATA = {
  "lastUpdate": 1682436618196,
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
          "id": "cc7dffbfccb7a25767ed3e3ff23cf6d6d3c44cdb",
          "message": "fix(alchemy): close the cursor on error during dataframe construction",
          "timestamp": "2023-04-25T11:23:29-04:00",
          "tree_id": "87f1a472e62de2cc6fa4f66ec5f81549f2a1b52e",
          "url": "https://github.com/ibis-project/ibis/commit/cc7dffbfccb7a25767ed3e3ff23cf6d6d3c44cdb"
        },
        "date": 1682436536085,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 238.41994919526118,
            "unit": "iter/sec",
            "range": "stddev: 0.006451751266312922",
            "extra": "mean: 4.194279897195263 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8872658515599219,
            "unit": "iter/sec",
            "range": "stddev: 0.005556155292300766",
            "extra": "mean: 1.1270579141999861 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.54018283865587,
            "unit": "iter/sec",
            "range": "stddev: 0.0009345413655483599",
            "extra": "mean: 25.946944885715443 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11436008.279358257,
            "unit": "iter/sec",
            "range": "stddev: 3.562828783824879e-9",
            "extra": "mean: 87.44309863832146 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.39048659125193,
            "unit": "iter/sec",
            "range": "stddev: 0.0007876625791476371",
            "extra": "mean: 9.766532353655581 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.2608137465498,
            "unit": "iter/sec",
            "range": "stddev: 0.00005543892408490315",
            "extra": "mean: 9.069405222227386 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.61303286492827,
            "unit": "iter/sec",
            "range": "stddev: 0.012294722752543123",
            "extra": "mean: 11.680464603767753 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2221.736402528015,
            "unit": "iter/sec",
            "range": "stddev: 0.00012997905048195681",
            "extra": "mean: 450.09840000017306 usec\nrounds: 670"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.64157035075573,
            "unit": "iter/sec",
            "range": "stddev: 0.0007978770742809136",
            "extra": "mean: 9.936251953490022 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 684.5860227233974,
            "unit": "iter/sec",
            "range": "stddev: 0.00005511259265740071",
            "extra": "mean: 1.460736805612585 msec\nrounds: 499"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 286.1716304836901,
            "unit": "iter/sec",
            "range": "stddev: 0.00024080643359331396",
            "extra": "mean: 3.4944064801594426 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2164.210256314023,
            "unit": "iter/sec",
            "range": "stddev: 0.00008532581402799441",
            "extra": "mean: 462.0623144551358 usec\nrounds: 1342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13924.821143804233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017348276065311414",
            "extra": "mean: 71.81420785752384 usec\nrounds: 2978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 89.65565593599834,
            "unit": "iter/sec",
            "range": "stddev: 0.011293235843784083",
            "extra": "mean: 11.15378600000273 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.766920369926165,
            "unit": "iter/sec",
            "range": "stddev: 0.0006695224810997017",
            "extra": "mean: 40.376436999986254 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 162.51228651815094,
            "unit": "iter/sec",
            "range": "stddev: 0.0000949033305676611",
            "extra": "mean: 6.153380900762295 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.2375069244102,
            "unit": "iter/sec",
            "range": "stddev: 0.00019119690291056706",
            "extra": "mean: 9.68640206250034 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.93274598697975,
            "unit": "iter/sec",
            "range": "stddev: 0.000802466917247142",
            "extra": "mean: 9.907587376340672 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 944789.8334661293,
            "unit": "iter/sec",
            "range": "stddev: 1.4534075388011375e-7",
            "extra": "mean: 1.0584364528260453 usec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 321.8222959302943,
            "unit": "iter/sec",
            "range": "stddev: 0.00018863365068705045",
            "extra": "mean: 3.1073049090936724 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 288.44256819082653,
            "unit": "iter/sec",
            "range": "stddev: 0.00022520194032008296",
            "extra": "mean: 3.466894662158272 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12569.462432553115,
            "unit": "iter/sec",
            "range": "stddev: 0.000015871171903244756",
            "extra": "mean: 79.55789719456439 usec\nrounds: 4990"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1919191.7129956041,
            "unit": "iter/sec",
            "range": "stddev: 1.0429395781735021e-7",
            "extra": "mean: 521.0526875603962 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2220.695129246121,
            "unit": "iter/sec",
            "range": "stddev: 0.0001017772730919431",
            "extra": "mean: 450.3094489784732 usec\nrounds: 490"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.36529827140124,
            "unit": "iter/sec",
            "range": "stddev: 0.0008787290921797387",
            "extra": "mean: 9.96360312999684 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2159.19735960929,
            "unit": "iter/sec",
            "range": "stddev: 0.00006918893697132007",
            "extra": "mean: 463.1350606046274 usec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.93238009137792,
            "unit": "iter/sec",
            "range": "stddev: 0.00013008352272421672",
            "extra": "mean: 5.237456315798359 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4573.731343455905,
            "unit": "iter/sec",
            "range": "stddev: 0.00002517641224616182",
            "extra": "mean: 218.63986423924968 usec\nrounds: 906"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.276903102925225,
            "unit": "iter/sec",
            "range": "stddev: 0.000508208422132666",
            "extra": "mean: 22.585138750002898 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 423.4122990608731,
            "unit": "iter/sec",
            "range": "stddev: 0.00003200022946943642",
            "extra": "mean: 2.361764176945252 msec\nrounds: 373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 151.4210802036521,
            "unit": "iter/sec",
            "range": "stddev: 0.003839182381156073",
            "extra": "mean: 6.604100292079947 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.751471398769006,
            "unit": "iter/sec",
            "range": "stddev: 0.0008343653899000383",
            "extra": "mean: 23.391007777776608 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.35324238184322,
            "unit": "iter/sec",
            "range": "stddev: 0.0007861588927223004",
            "extra": "mean: 9.67555518292745 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 265.7965843223603,
            "unit": "iter/sec",
            "range": "stddev: 0.0003768357619144979",
            "extra": "mean: 3.762275585856257 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2173.976935073903,
            "unit": "iter/sec",
            "range": "stddev: 0.00009154179490725991",
            "extra": "mean: 459.98648093568926 usec\nrounds: 1967"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1182.2521250928655,
            "unit": "iter/sec",
            "range": "stddev: 0.000015252141950995731",
            "extra": "mean: 845.8432670793045 usec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7933.421770085695,
            "unit": "iter/sec",
            "range": "stddev: 0.00007891999359471155",
            "extra": "mean: 126.0490150379586 usec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.1403631266905,
            "unit": "iter/sec",
            "range": "stddev: 0.00005621159246706186",
            "extra": "mean: 1.3384365901677737 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.25363843283878,
            "unit": "iter/sec",
            "range": "stddev: 0.0007090632872630929",
            "extra": "mean: 9.411442419753785 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10389.495425707213,
            "unit": "iter/sec",
            "range": "stddev: 0.000003914041277906212",
            "extra": "mean: 96.25106504456929 usec\nrounds: 2137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.9711257622922,
            "unit": "iter/sec",
            "range": "stddev: 0.0009022408305883359",
            "extra": "mean: 10.002888257733183 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2201.3656661241084,
            "unit": "iter/sec",
            "range": "stddev: 0.00010948956097367492",
            "extra": "mean: 454.2634671688489 usec\nrounds: 1325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16963446629666368,
            "unit": "iter/sec",
            "range": "stddev: 0.12733890501811532",
            "extra": "mean: 5.895028421000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.34197764420585,
            "unit": "iter/sec",
            "range": "stddev: 0.0008957591063955073",
            "extra": "mean: 9.96591878571315 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.05950366961159,
            "unit": "iter/sec",
            "range": "stddev: 0.0008057927965314812",
            "extra": "mean: 9.609886312498617 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.66061354548904,
            "unit": "iter/sec",
            "range": "stddev: 0.00019963607968063166",
            "extra": "mean: 6.147769753249725 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.93132401416767,
            "unit": "iter/sec",
            "range": "stddev: 0.0008365158917891861",
            "extra": "mean: 10.997310452052735 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.87788486478301,
            "unit": "iter/sec",
            "range": "stddev: 0.000933356198566297",
            "extra": "mean: 10.652136032254559 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6142474320342548,
            "unit": "iter/sec",
            "range": "stddev: 0.004268894155340508",
            "extra": "mean: 619.4837174000099 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 238.67447926102292,
            "unit": "iter/sec",
            "range": "stddev: 0.0038869886125393106",
            "extra": "mean: 4.189806983537458 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.320829933924,
            "unit": "iter/sec",
            "range": "stddev: 0.00024939689290124316",
            "extra": "mean: 19.11284666666986 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7161362.833840663,
            "unit": "iter/sec",
            "range": "stddev: 4.3217743190123326e-9",
            "extra": "mean: 139.63822574033952 nsec\nrounds: 64517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.64792967923935,
            "unit": "iter/sec",
            "range": "stddev: 0.0008196332795255532",
            "extra": "mean: 10.035331423532226 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.91131746365009,
            "unit": "iter/sec",
            "range": "stddev: 0.00008515468701535973",
            "extra": "mean: 33.43216162963253 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.839579442245035,
            "unit": "iter/sec",
            "range": "stddev: 0.021835621205925377",
            "extra": "mean: 1.1910725176000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1645515.2973824895,
            "unit": "iter/sec",
            "range": "stddev: 1.0179245682163608e-7",
            "extra": "mean: 607.7123692442686 nsec\nrounds: 129854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.10437864219666,
            "unit": "iter/sec",
            "range": "stddev: 0.00018239703530268514",
            "extra": "mean: 9.082290934583755 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1784.8975463741324,
            "unit": "iter/sec",
            "range": "stddev: 0.000005494625429983456",
            "extra": "mean: 560.2562466576387 usec\nrounds: 1346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 524.4574672208948,
            "unit": "iter/sec",
            "range": "stddev: 0.000020304963533242763",
            "extra": "mean: 1.906732313869053 msec\nrounds: 411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149352.7493954296,
            "unit": "iter/sec",
            "range": "stddev: 4.7043981400863427e-7",
            "extra": "mean: 6.695558026537418 usec\nrounds: 39525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7800691062784452,
            "unit": "iter/sec",
            "range": "stddev: 0.004988672149701804",
            "extra": "mean: 1.2819377051999936 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 285.7667113007617,
            "unit": "iter/sec",
            "range": "stddev: 0.00026410990634464387",
            "extra": "mean: 3.499357904383507 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 276.9495837009594,
            "unit": "iter/sec",
            "range": "stddev: 0.00028017301534563225",
            "extra": "mean: 3.6107654925373183 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.57031001526287,
            "unit": "iter/sec",
            "range": "stddev: 0.00149692792525577",
            "extra": "mean: 16.50973884313972 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 92.73997953039189,
            "unit": "iter/sec",
            "range": "stddev: 0.0010015050420988387",
            "extra": "mean: 10.782836108695594 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.33552861079459,
            "unit": "iter/sec",
            "range": "stddev: 0.0004736668187686111",
            "extra": "mean: 19.107478734699214 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2181.5389663963206,
            "unit": "iter/sec",
            "range": "stddev: 0.00008920234638836458",
            "extra": "mean: 458.3919954690966 usec\nrounds: 1324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4484369.407062027,
            "unit": "iter/sec",
            "range": "stddev: 1.5304881923513113e-8",
            "extra": "mean: 222.99679380210134 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.9427563004683,
            "unit": "iter/sec",
            "range": "stddev: 0.00035983859289108564",
            "extra": "mean: 3.7602076999990808 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.419501647115819,
            "unit": "iter/sec",
            "range": "stddev: 0.002099167924866201",
            "extra": "mean: 118.7718753333292 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 79.65733580814512,
            "unit": "iter/sec",
            "range": "stddev: 0.019256273454935816",
            "extra": "mean: 12.55377160000056 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.800811512287975,
            "unit": "iter/sec",
            "range": "stddev: 0.0003486522924894849",
            "extra": "mean: 53.18919342106124 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1884143.8262548007,
            "unit": "iter/sec",
            "range": "stddev: 9.485542334553028e-8",
            "extra": "mean: 530.7450450785096 nsec\nrounds: 142837"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 129.89017468737725,
            "unit": "iter/sec",
            "range": "stddev: 0.00039920081815306494",
            "extra": "mean: 7.698811726189634 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1927405.1657041998,
            "unit": "iter/sec",
            "range": "stddev: 9.003490604644782e-8",
            "extra": "mean: 518.8322713842258 nsec\nrounds: 113624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5768516844939087,
            "unit": "iter/sec",
            "range": "stddev: 0.002501607524253321",
            "extra": "mean: 388.0704528000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.42203359386036,
            "unit": "iter/sec",
            "range": "stddev: 0.00047357506535180465",
            "extra": "mean: 3.97737614999714 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.72337292506647,
            "unit": "iter/sec",
            "range": "stddev: 0.030954001628847316",
            "extra": "mean: 27.99287743902585 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.95016997417856,
            "unit": "iter/sec",
            "range": "stddev: 0.00009741210465009185",
            "extra": "mean: 9.528331399997114 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.37044991496944,
            "unit": "iter/sec",
            "range": "stddev: 0.000019606200742125432",
            "extra": "mean: 5.041073408003285 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.3812622154267,
            "unit": "iter/sec",
            "range": "stddev: 0.00017111339319262277",
            "extra": "mean: 7.975673416669127 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6150947.0546638435,
            "unit": "iter/sec",
            "range": "stddev: 8.852519683671728e-9",
            "extra": "mean: 162.57659041980037 nsec\nrounds: 61729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6076707.6595892515,
            "unit": "iter/sec",
            "range": "stddev: 9.759069054624479e-9",
            "extra": "mean: 164.5627955165178 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.8385613301786,
            "unit": "iter/sec",
            "range": "stddev: 0.0002933173712205814",
            "extra": "mean: 5.752463621121781 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3438279220132472,
            "unit": "iter/sec",
            "range": "stddev: 0.0010002072294110354",
            "extra": "mean: 744.1428947999952 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2157.8279245231174,
            "unit": "iter/sec",
            "range": "stddev: 0.00008539355289847589",
            "extra": "mean: 463.428982744767 usec\nrounds: 1275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.79833350269601,
            "unit": "iter/sec",
            "range": "stddev: 0.0004294641755887772",
            "extra": "mean: 10.438594946663216 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5502605.094631187,
            "unit": "iter/sec",
            "range": "stddev: 3.9568649243227614e-8",
            "extra": "mean: 181.73210375862993 nsec\nrounds: 192271"
          }
        ]
      }
    ]
  }
}
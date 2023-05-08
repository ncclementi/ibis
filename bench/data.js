window.BENCHMARK_DATA = {
  "lastUpdate": 1683569582895,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ianmcook@gmail.com",
            "name": "Ian Cook",
            "username": "ianmcook"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "63db64333e0a7a178008663657fec7fa2425c439",
          "message": "docs: remove trailing whitespace",
          "timestamp": "2023-05-08T11:07:19-07:00",
          "tree_id": "0197b281f06b89b8c9ab4d658ae710d44867ed71",
          "url": "https://github.com/ibis-project/ibis/commit/63db64333e0a7a178008663657fec7fa2425c439"
        },
        "date": 1683569500288,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6359070135507974,
            "unit": "iter/sec",
            "range": "stddev: 0.0017324092174158554",
            "extra": "mean: 611.2816875999954 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1843419.146406612,
            "unit": "iter/sec",
            "range": "stddev: 1.1316245459441637e-7",
            "extra": "mean: 542.4702254771012 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1748.8199837202812,
            "unit": "iter/sec",
            "range": "stddev: 0.00001648758721801669",
            "extra": "mean: 571.814142855739 usec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5150262899043083,
            "unit": "iter/sec",
            "range": "stddev: 0.0024542858519995747",
            "extra": "mean: 397.6101577999998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.57861520038523,
            "unit": "iter/sec",
            "range": "stddev: 0.00006250709045000052",
            "extra": "mean: 5.695454419997077 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.94925025694208,
            "unit": "iter/sec",
            "range": "stddev: 0.0009013701822971853",
            "extra": "mean: 10.106190773586402 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 98.96612183044763,
            "unit": "iter/sec",
            "range": "stddev: 0.0009404806975196737",
            "extra": "mean: 10.104467887639737 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 49.33619816078831,
            "unit": "iter/sec",
            "range": "stddev: 0.0005135220280211097",
            "extra": "mean: 20.26909322726828 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.81986881991385,
            "unit": "iter/sec",
            "range": "stddev: 0.000042976415887506436",
            "extra": "mean: 9.189498304348275 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.43589557350045,
            "unit": "iter/sec",
            "range": "stddev: 0.00025476071943584795",
            "extra": "mean: 10.26315809090761 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8037.362685199417,
            "unit": "iter/sec",
            "range": "stddev: 0.000014478158205102106",
            "extra": "mean: 124.418921873648 usec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.37672379060334,
            "unit": "iter/sec",
            "range": "stddev: 0.0008305716577418123",
            "extra": "mean: 18.734757942862807 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10528.973211573684,
            "unit": "iter/sec",
            "range": "stddev: 0.000008415318013283855",
            "extra": "mean: 94.97602281870918 usec\nrounds: 3988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 146.93892568792458,
            "unit": "iter/sec",
            "range": "stddev: 0.00008459380821885757",
            "extra": "mean: 6.805548599993472 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.580396126511,
            "unit": "iter/sec",
            "range": "stddev: 0.000445823390733462",
            "extra": "mean: 11.549958705880753 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4534.668456463384,
            "unit": "iter/sec",
            "range": "stddev: 0.00003202767614929868",
            "extra": "mean: 220.52328843901986 usec\nrounds: 839"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 207.42018699280234,
            "unit": "iter/sec",
            "range": "stddev: 0.013411394408742039",
            "extra": "mean: 4.821131513273107 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12315.333461272518,
            "unit": "iter/sec",
            "range": "stddev: 0.000025151150387897824",
            "extra": "mean: 81.19958774520036 usec\nrounds: 5043"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.17574090709324,
            "unit": "iter/sec",
            "range": "stddev: 0.0008901452976387668",
            "extra": "mean: 9.692200813953649 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1172.7915660320443,
            "unit": "iter/sec",
            "range": "stddev: 0.000010818851256670099",
            "extra": "mean: 852.6664319247644 usec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1011916.7926788435,
            "unit": "iter/sec",
            "range": "stddev: 1.41622897138716e-7",
            "extra": "mean: 988.2235448951329 nsec\nrounds: 80646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.0965817277485,
            "unit": "iter/sec",
            "range": "stddev: 0.00015277613973905887",
            "extra": "mean: 9.082934132077256 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.901188709985526,
            "unit": "iter/sec",
            "range": "stddev: 0.02777726007798125",
            "extra": "mean: 27.854230902439753 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.74708006055036,
            "unit": "iter/sec",
            "range": "stddev: 0.0009521833655450084",
            "extra": "mean: 10.666998901236276 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 285.9857697694073,
            "unit": "iter/sec",
            "range": "stddev: 0.000340653492838195",
            "extra": "mean: 3.496677477366473 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4511003.525950726,
            "unit": "iter/sec",
            "range": "stddev: 1.243798738315515e-8",
            "extra": "mean: 221.68016368159442 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.91183403344855,
            "unit": "iter/sec",
            "range": "stddev: 0.0005846331198212655",
            "extra": "mean: 21.78087678378218 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7108656.965367003,
            "unit": "iter/sec",
            "range": "stddev: 4.60123379176923e-9",
            "extra": "mean: 140.6735484455216 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6015022.689402466,
            "unit": "iter/sec",
            "range": "stddev: 1.1098832659760344e-8",
            "extra": "mean: 166.25041194942247 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2175.1013505374704,
            "unit": "iter/sec",
            "range": "stddev: 0.00014819257511802182",
            "extra": "mean: 459.74869159678406 usec\nrounds: 1083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 50.79324681765297,
            "unit": "iter/sec",
            "range": "stddev: 0.00025238117389969557",
            "extra": "mean: 19.687656581395274 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.3012934021658,
            "unit": "iter/sec",
            "range": "stddev: 0.0007913781961985696",
            "extra": "mean: 10.070362285716106 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.991112901630004,
            "unit": "iter/sec",
            "range": "stddev: 0.001202596251254192",
            "extra": "mean: 29.419454517243718 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.69224049232352,
            "unit": "iter/sec",
            "range": "stddev: 0.00020603822910610325",
            "extra": "mean: 6.146574642858791 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.99615478201925,
            "unit": "iter/sec",
            "range": "stddev: 0.0007372923626138996",
            "extra": "mean: 10.000384536584345 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2188.202890347641,
            "unit": "iter/sec",
            "range": "stddev: 0.0001080985698437605",
            "extra": "mean: 456.9960145885418 usec\nrounds: 1508"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2142.330172459098,
            "unit": "iter/sec",
            "range": "stddev: 0.00010622278129233622",
            "extra": "mean: 466.7814573381743 usec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 684.0186661351146,
            "unit": "iter/sec",
            "range": "stddev: 0.00003352131976059328",
            "extra": "mean: 1.461948408002172 msec\nrounds: 500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 276.6984600439054,
            "unit": "iter/sec",
            "range": "stddev: 0.00032588533383863993",
            "extra": "mean: 3.6140425206606643 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3215936612460242,
            "unit": "iter/sec",
            "range": "stddev: 0.0009367905013974658",
            "extra": "mean: 756.6622248000044 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 68.15336690254938,
            "unit": "iter/sec",
            "range": "stddev: 0.02146482941740783",
            "extra": "mean: 14.67278940789341 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 102.79541493138147,
            "unit": "iter/sec",
            "range": "stddev: 0.00009971805035910946",
            "extra": "mean: 9.728060348484659 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.608964185497776,
            "unit": "iter/sec",
            "range": "stddev: 0.0007116265458593487",
            "extra": "mean: 44.23024388890124 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 531.9838910602766,
            "unit": "iter/sec",
            "range": "stddev: 0.000042122496875863954",
            "extra": "mean: 1.8797561670653946 msec\nrounds: 419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.82176491371996,
            "unit": "iter/sec",
            "range": "stddev: 0.00010991335291727558",
            "extra": "mean: 33.532555933332254 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 248.28557611812516,
            "unit": "iter/sec",
            "range": "stddev: 0.0005823450147766824",
            "extra": "mean: 4.027620192983892 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.356918716822278,
            "unit": "iter/sec",
            "range": "stddev: 0.00039557656499469287",
            "extra": "mean: 119.66132900000856 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1923604.1782637392,
            "unit": "iter/sec",
            "range": "stddev: 1.0313900397949163e-7",
            "extra": "mean: 519.857469275518 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7820339180087839,
            "unit": "iter/sec",
            "range": "stddev: 0.002720693501572978",
            "extra": "mean: 1.2787169162000054 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.5111841713502,
            "unit": "iter/sec",
            "range": "stddev: 0.000012668193356025335",
            "extra": "mean: 1.3595986322446356 msec\nrounds: 552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.45280278693782,
            "unit": "iter/sec",
            "range": "stddev: 0.000966682175772435",
            "extra": "mean: 10.700588641304753 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13919.210079305476,
            "unit": "iter/sec",
            "range": "stddev: 0.000001796343195546243",
            "extra": "mean: 71.84315735608875 usec\nrounds: 6444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 145.00252691329445,
            "unit": "iter/sec",
            "range": "stddev: 0.003922655116233841",
            "extra": "mean: 6.896431540106601 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 279.5366729778658,
            "unit": "iter/sec",
            "range": "stddev: 0.0003210964503265082",
            "extra": "mean: 3.5773481502342337 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.11648678920206,
            "unit": "iter/sec",
            "range": "stddev: 0.0010592893280206785",
            "extra": "mean: 10.29691284210649 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 74.72862186465817,
            "unit": "iter/sec",
            "range": "stddev: 0.02943014635162226",
            "extra": "mean: 13.3817535376353 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 232.01418900128357,
            "unit": "iter/sec",
            "range": "stddev: 0.0003814259745780784",
            "extra": "mean: 4.3100812252239775 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.01741222627987,
            "unit": "iter/sec",
            "range": "stddev: 0.00008273972030758824",
            "extra": "mean: 7.998885772727507 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 215.72312567402332,
            "unit": "iter/sec",
            "range": "stddev: 0.004108230380637242",
            "extra": "mean: 4.635571623930057 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.480203059616585,
            "unit": "iter/sec",
            "range": "stddev: 0.00016274526803356708",
            "extra": "mean: 54.111959526312 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2167.6968161584023,
            "unit": "iter/sec",
            "range": "stddev: 0.00009763679561999405",
            "extra": "mean: 461.3191256940639 usec\nrounds: 1082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1675181175134228,
            "unit": "iter/sec",
            "range": "stddev: 0.03116792908299972",
            "extra": "mean: 5.969503566800006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.77060671931747,
            "unit": "iter/sec",
            "range": "stddev: 0.00034163788547283367",
            "extra": "mean: 3.762643327432022 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 310.5564557035968,
            "unit": "iter/sec",
            "range": "stddev: 0.00005731147149100357",
            "extra": "mean: 3.220026444900009 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 96.42230692173158,
            "unit": "iter/sec",
            "range": "stddev: 0.00110034719748603",
            "extra": "mean: 10.371044127908341 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2199.1639925917725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000873823479414301",
            "extra": "mean: 454.7182490112862 usec\nrounds: 1265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2209.2868491344584,
            "unit": "iter/sec",
            "range": "stddev: 0.00009186181181103809",
            "extra": "mean: 452.63474971200515 usec\nrounds: 1738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1643954.2846445777,
            "unit": "iter/sec",
            "range": "stddev: 1.281394708035954e-7",
            "extra": "mean: 608.2894210262056 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2108.2163061242795,
            "unit": "iter/sec",
            "range": "stddev: 0.00012138773450526162",
            "extra": "mean: 474.33462927643717 usec\nrounds: 1257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 154.23325702720308,
            "unit": "iter/sec",
            "range": "stddev: 0.01582294661759135",
            "extra": "mean: 6.483685939561165 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 96.33302606984014,
            "unit": "iter/sec",
            "range": "stddev: 0.001158534772294884",
            "extra": "mean: 10.380655947369632 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.31619459647345,
            "unit": "iter/sec",
            "range": "stddev: 0.0009245029648191128",
            "extra": "mean: 29.140760266663314 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 92.66513294158264,
            "unit": "iter/sec",
            "range": "stddev: 0.0010187511074660524",
            "extra": "mean: 10.791545517238006 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11363717.991442032,
            "unit": "iter/sec",
            "range": "stddev: 4.2715881471766915e-9",
            "extra": "mean: 87.99936787888046 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 269.3836946973004,
            "unit": "iter/sec",
            "range": "stddev: 0.00045612063542728963",
            "extra": "mean: 3.712177164708036 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 96.79895889644848,
            "unit": "iter/sec",
            "range": "stddev: 0.0010321101517530781",
            "extra": "mean: 10.330689621050146 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 71.51354707481813,
            "unit": "iter/sec",
            "range": "stddev: 0.03360498618251423",
            "extra": "mean: 13.98336456383279 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5520407.141454486,
            "unit": "iter/sec",
            "range": "stddev: 1.2188117641613636e-8",
            "extra": "mean: 181.14605940764773 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.92379111758511,
            "unit": "iter/sec",
            "range": "stddev: 0.0010171970025364555",
            "extra": "mean: 10.212022927086414 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.34933245497204,
            "unit": "iter/sec",
            "range": "stddev: 0.001015869653839499",
            "extra": "mean: 10.378899101011838 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.34159889797755,
            "unit": "iter/sec",
            "range": "stddev: 0.00101455017096365",
            "extra": "mean: 10.066276475245644 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 429.4610116175345,
            "unit": "iter/sec",
            "range": "stddev: 0.000038810656164843315",
            "extra": "mean: 2.3285000802135003 msec\nrounds: 374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.4019368548077,
            "unit": "iter/sec",
            "range": "stddev: 0.00041957574416272764",
            "extra": "mean: 3.739688693964001 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8847960668804478,
            "unit": "iter/sec",
            "range": "stddev: 0.018408519536736744",
            "extra": "mean: 1.1302039390000118 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 91.77073478373426,
            "unit": "iter/sec",
            "range": "stddev: 0.0011770633811864746",
            "extra": "mean: 10.896719987658237 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6226111.034806601,
            "unit": "iter/sec",
            "range": "stddev: 6.69435613693269e-9",
            "extra": "mean: 160.61390399392462 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1903843.9557092118,
            "unit": "iter/sec",
            "range": "stddev: 8.811423446470453e-8",
            "extra": "mean: 525.2531316976996 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143426.69250529847,
            "unit": "iter/sec",
            "range": "stddev: 3.5162092754820983e-7",
            "extra": "mean: 6.972202890079598 usec\nrounds: 31347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.14116440597203,
            "unit": "iter/sec",
            "range": "stddev: 0.00006129603538516643",
            "extra": "mean: 5.150891121209525 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2112.7899193854005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000951283435920691",
            "extra": "mean: 473.30782432495454 usec\nrounds: 1184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2092.870127663659,
            "unit": "iter/sec",
            "range": "stddev: 0.00009929634493425796",
            "extra": "mean: 477.8127351439306 usec\nrounds: 1178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8947011551696927,
            "unit": "iter/sec",
            "range": "stddev: 0.012537538427486856",
            "extra": "mean: 1.117691638400015 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}
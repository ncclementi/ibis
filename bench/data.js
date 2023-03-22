window.BENCHMARK_DATA = {
  "lastUpdate": 1679444952089,
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
          "id": "a1846df25a7b6e4917cc4146c8812c43000b25d8",
          "message": "chore(flake/nixpkgs): `518d5f09` -> `fedc9837`",
          "timestamp": "2023-03-22T00:22:40Z",
          "tree_id": "09188d4f17b8a89d88ba847b0ac8b046f9d5fb80",
          "url": "https://github.com/ibis-project/ibis/commit/a1846df25a7b6e4917cc4146c8812c43000b25d8"
        },
        "date": 1679444862024,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8336180409790261,
            "unit": "iter/sec",
            "range": "stddev: 0.020698595820546156",
            "extra": "mean: 545.3698522000082 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2050.1781479003453,
            "unit": "iter/sec",
            "range": "stddev: 0.0036822638458201646",
            "extra": "mean: 487.76249079824254 usec\nrounds: 326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 111.52314280328297,
            "unit": "iter/sec",
            "range": "stddev: 0.000756167369696692",
            "extra": "mean: 8.966748738097456 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 212.76460831679185,
            "unit": "iter/sec",
            "range": "stddev: 0.000607865487599225",
            "extra": "mean: 4.700029802471043 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.35243269421078,
            "unit": "iter/sec",
            "range": "stddev: 0.0011534262306003688",
            "extra": "mean: 10.065178807224815 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 228.41762974031494,
            "unit": "iter/sec",
            "range": "stddev: 0.0005380804458340293",
            "extra": "mean: 4.377945787883742 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3805.0945700785373,
            "unit": "iter/sec",
            "range": "stddev: 0.00010258991187984886",
            "extra": "mean: 262.8055575447524 usec\nrounds: 391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 88.44393232716888,
            "unit": "iter/sec",
            "range": "stddev: 0.0011446132708997268",
            "extra": "mean: 11.306598131580502 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 205.10977927850166,
            "unit": "iter/sec",
            "range": "stddev: 0.0005973054448697753",
            "extra": "mean: 4.87543794117287 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 231.21704113286265,
            "unit": "iter/sec",
            "range": "stddev: 0.0006223686901627375",
            "extra": "mean: 4.324940735771188 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 97.35986679974054,
            "unit": "iter/sec",
            "range": "stddev: 0.0010968715597051944",
            "extra": "mean: 10.271172638895443 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1625832692971483,
            "unit": "iter/sec",
            "range": "stddev: 0.019647289213326397",
            "extra": "mean: 860.1534413999957 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.16547833779966,
            "unit": "iter/sec",
            "range": "stddev: 0.001766771804037801",
            "extra": "mean: 29.269310680003855 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 85.78661725495665,
            "unit": "iter/sec",
            "range": "stddev: 0.0015116806458515212",
            "extra": "mean: 11.656829841279482 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6310.094889891702,
            "unit": "iter/sec",
            "range": "stddev: 0.00004434160896758879",
            "extra": "mean: 158.4762222200374 usec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9591985.311097033,
            "unit": "iter/sec",
            "range": "stddev: 1.8164890793716384e-7",
            "extra": "mean: 104.25370427155237 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 236.94554063616792,
            "unit": "iter/sec",
            "range": "stddev: 0.0006425650473894508",
            "extra": "mean: 4.220379068182209 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 129.2330639707967,
            "unit": "iter/sec",
            "range": "stddev: 0.0007510590104478557",
            "extra": "mean: 7.737957835821131 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4570181.590927896,
            "unit": "iter/sec",
            "range": "stddev: 2.90028062192918e-7",
            "extra": "mean: 218.8096862464043 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3569.3732706009905,
            "unit": "iter/sec",
            "range": "stddev: 0.00022568122047767538",
            "extra": "mean: 280.16122836926655 usec\nrounds: 1410"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.995723703062335,
            "unit": "iter/sec",
            "range": "stddev: 0.0030260679921963155",
            "extra": "mean: 125.06685287499408 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 92.69206110165233,
            "unit": "iter/sec",
            "range": "stddev: 0.0014989882345375221",
            "extra": "mean: 10.788410443299268 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 595109.1205278971,
            "unit": "iter/sec",
            "range": "stddev: 0.000020994189233971984",
            "extra": "mean: 1.6803640971137201 usec\nrounds: 22884"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 78.10666350563105,
            "unit": "iter/sec",
            "range": "stddev: 0.018588588803087454",
            "extra": "mean: 12.803004956522123 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 58.76555841091651,
            "unit": "iter/sec",
            "range": "stddev: 0.0009192557824815914",
            "extra": "mean: 17.01677014634198 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3894.787582854922,
            "unit": "iter/sec",
            "range": "stddev: 0.00008590530494683842",
            "extra": "mean: 256.75341176552405 usec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 229.60643607260033,
            "unit": "iter/sec",
            "range": "stddev: 0.0005565016378733899",
            "extra": "mean: 4.355278611109164 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4060.9932325933464,
            "unit": "iter/sec",
            "range": "stddev: 0.00009254947335770999",
            "extra": "mean: 246.24517765113362 usec\nrounds: 2792"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 91.49640271661713,
            "unit": "iter/sec",
            "range": "stddev: 0.0011750158747021794",
            "extra": "mean: 10.929391432985648 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5156351.238947737,
            "unit": "iter/sec",
            "range": "stddev: 2.717181277981247e-7",
            "extra": "mean: 193.935586165231 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 241.09183705083942,
            "unit": "iter/sec",
            "range": "stddev: 0.000681948394805735",
            "extra": "mean: 4.147797006454136 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 75.21662150107676,
            "unit": "iter/sec",
            "range": "stddev: 0.0007775817932933848",
            "extra": "mean: 13.294933753248738 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1429157.20893261,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019450659050647664",
            "extra": "mean: 699.7130852713304 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8831.922971262878,
            "unit": "iter/sec",
            "range": "stddev: 0.00011171357706345328",
            "extra": "mean: 113.22562518420716 usec\nrounds: 4074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5217094729297899,
            "unit": "iter/sec",
            "range": "stddev: 0.03389932398564901",
            "extra": "mean: 1.9167756230000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.7631530175917,
            "unit": "iter/sec",
            "range": "stddev: 0.0008989578984793739",
            "extra": "mean: 13.027083446804633 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3882.131363590368,
            "unit": "iter/sec",
            "range": "stddev: 0.00007005169157918746",
            "extra": "mean: 257.59045903978773 usec\nrounds: 1355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2189605.85057818,
            "unit": "iter/sec",
            "range": "stddev: 6.733303003372933e-7",
            "extra": "mean: 456.70320059477064 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.824059106810175,
            "unit": "iter/sec",
            "range": "stddev: 0.0011573066776534283",
            "extra": "mean: 22.81851613888048 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 237.7100616996993,
            "unit": "iter/sec",
            "range": "stddev: 0.0006547868823442557",
            "extra": "mean: 4.20680552118701 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 80.81433502977438,
            "unit": "iter/sec",
            "range": "stddev: 0.0014344380777474705",
            "extra": "mean: 12.374042298703202 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 895.8962666709546,
            "unit": "iter/sec",
            "range": "stddev: 0.00020158918169190882",
            "extra": "mean: 1.1162006553681518 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 127.85693362769283,
            "unit": "iter/sec",
            "range": "stddev: 0.0006603003665204452",
            "extra": "mean: 7.821241849205492 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 146.2630366469802,
            "unit": "iter/sec",
            "range": "stddev: 0.0007485553674961066",
            "extra": "mean: 6.836997391306702 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5340541.924388423,
            "unit": "iter/sec",
            "range": "stddev: 1.2460564562665512e-7",
            "extra": "mean: 187.2469150430636 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 25.21763715153596,
            "unit": "iter/sec",
            "range": "stddev: 0.030935472735582396",
            "extra": "mean: 39.65478581481977 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.79437469436829,
            "unit": "iter/sec",
            "range": "stddev: 0.0008258033096729194",
            "extra": "mean: 10.893913742857615 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2255612.4984379727,
            "unit": "iter/sec",
            "range": "stddev: 7.928892648443558e-7",
            "extra": "mean: 443.33856134099125 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.1851054616837,
            "unit": "iter/sec",
            "range": "stddev: 0.001451103054148944",
            "extra": "mean: 12.628637597557821 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 241.06984800392695,
            "unit": "iter/sec",
            "range": "stddev: 0.0004358996733632716",
            "extra": "mean: 4.148175345361773 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122089.22099812706,
            "unit": "iter/sec",
            "range": "stddev: 0.00001622190787188452",
            "extra": "mean: 8.190731268695217 usec\nrounds: 32259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 71.62656723789323,
            "unit": "iter/sec",
            "range": "stddev: 0.021754044536377908",
            "extra": "mean: 13.961300095238423 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 144.01335346030916,
            "unit": "iter/sec",
            "range": "stddev: 0.0034164064104020876",
            "extra": "mean: 6.94380052941136 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.73767481259264,
            "unit": "iter/sec",
            "range": "stddev: 0.0012742034627494813",
            "extra": "mean: 10.668069183487585 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3730.6852401069705,
            "unit": "iter/sec",
            "range": "stddev: 0.00011655808601941264",
            "extra": "mean: 268.0472716511798 usec\nrounds: 3210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 283.4331543238625,
            "unit": "iter/sec",
            "range": "stddev: 0.0004730037114214168",
            "extra": "mean: 3.528168757764162 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 90.47304672281945,
            "unit": "iter/sec",
            "range": "stddev: 0.0008209838137233731",
            "extra": "mean: 11.053015635293912 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.31254030120055,
            "unit": "iter/sec",
            "range": "stddev: 0.0017253639708758553",
            "extra": "mean: 46.92073238888699 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10374.266581582622,
            "unit": "iter/sec",
            "range": "stddev: 0.000027387640021128164",
            "extra": "mean: 96.39235623415486 usec\nrounds: 6128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 400.16234491827464,
            "unit": "iter/sec",
            "range": "stddev: 0.0003832022465434031",
            "extra": "mean: 2.498985755904221 msec\nrounds: 381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 83.30577920635271,
            "unit": "iter/sec",
            "range": "stddev: 0.0012540747727586422",
            "extra": "mean: 12.003969106668439 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 188.28730241500097,
            "unit": "iter/sec",
            "range": "stddev: 0.0037496168691325783",
            "extra": "mean: 5.311032593137461 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09529463533859614,
            "unit": "iter/sec",
            "range": "stddev: 0.16134516236367435",
            "extra": "mean: 10.493770152399975 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5350880217703681,
            "unit": "iter/sec",
            "range": "stddev: 0.016944783035061226",
            "extra": "mean: 1.868851402599978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10880.155158466294,
            "unit": "iter/sec",
            "range": "stddev: 0.000030788358801972085",
            "extra": "mean: 91.9104539811511 usec\nrounds: 4998"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 384485.9559379601,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045841835676742275",
            "extra": "mean: 2.6008752323878324 usec\nrounds: 1611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 58.2021051475319,
            "unit": "iter/sec",
            "range": "stddev: 0.0012118884321334028",
            "extra": "mean: 17.1815091132044 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 502.7433859705523,
            "unit": "iter/sec",
            "range": "stddev: 0.0005420233297092138",
            "extra": "mean: 1.989086336898272 msec\nrounds: 374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5556410272217813,
            "unit": "iter/sec",
            "range": "stddev: 0.016995610610365863",
            "extra": "mean: 1.7997231144000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.924763648617752,
            "unit": "iter/sec",
            "range": "stddev: 0.0014872464472721848",
            "extra": "mean: 31.32364615151339 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4050.331431049202,
            "unit": "iter/sec",
            "range": "stddev: 0.00009025488677167595",
            "extra": "mean: 246.893375770229 usec\nrounds: 1461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.00114666364412,
            "unit": "iter/sec",
            "range": "stddev: 0.0011076841174622203",
            "extra": "mean: 10.30915648314494 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 235.81783192065242,
            "unit": "iter/sec",
            "range": "stddev: 0.0005553279020196447",
            "extra": "mean: 4.2405614191910574 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 80.1569678337261,
            "unit": "iter/sec",
            "range": "stddev: 0.0013388939877377686",
            "extra": "mean: 12.47552180459662 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 600.0024727692396,
            "unit": "iter/sec",
            "range": "stddev: 0.0002677232886004064",
            "extra": "mean: 1.6666597978915316 msec\nrounds: 569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.87315772579413,
            "unit": "iter/sec",
            "range": "stddev: 0.0024203038508840875",
            "extra": "mean: 17.897681833334882 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 80.43426908736647,
            "unit": "iter/sec",
            "range": "stddev: 0.0012386269791175646",
            "extra": "mean: 12.4325118055566 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.104670148352216,
            "unit": "iter/sec",
            "range": "stddev: 0.001768959777413312",
            "extra": "mean: 32.149513086959246 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3941.6373513760723,
            "unit": "iter/sec",
            "range": "stddev: 0.00010828844982798196",
            "extra": "mean: 253.70167543467392 usec\nrounds: 1901"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.590665619199136,
            "unit": "iter/sec",
            "range": "stddev: 0.0024411555405590844",
            "extra": "mean: 79.42391849999808 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1360.6395513693042,
            "unit": "iter/sec",
            "range": "stddev: 0.00015187662898764583",
            "extra": "mean: 734.9485019699978 usec\nrounds: 1269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 71.46031614271854,
            "unit": "iter/sec",
            "range": "stddev: 0.0015320749283781084",
            "extra": "mean: 13.993780800001332 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58939.68331750966,
            "unit": "iter/sec",
            "range": "stddev: 0.000012121555093748446",
            "extra": "mean: 16.96649767547907 usec\nrounds: 11186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.431149785875058,
            "unit": "iter/sec",
            "range": "stddev: 0.004841972670292838",
            "extra": "mean: 225.67506140001115 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 96.98628252528104,
            "unit": "iter/sec",
            "range": "stddev: 0.0008537397796107403",
            "extra": "mean: 10.3107364666682 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 132.20883434183622,
            "unit": "iter/sec",
            "range": "stddev: 0.0009555869090234555",
            "extra": "mean: 7.563791065689471 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.531491694938094,
            "unit": "iter/sec",
            "range": "stddev: 0.012587501718283252",
            "extra": "mean: 1.8814969443999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1614278.7710888989,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020172541233174314",
            "extra": "mean: 619.4716909554959 nsec\nrounds: 175439"
          }
        ]
      }
    ]
  }
}
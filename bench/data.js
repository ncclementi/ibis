window.BENCHMARK_DATA = {
  "lastUpdate": 1675689491745,
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
          "id": "bb0ee786271dc21cb18a8561f523b4cee2549ce0",
          "message": "refactor(datatype): remove `Category` type and related APIs\n\nThe catgeory type doesn't map well to most databases, and is also a\nlevel of abstraction below ibis. Whether something is stored using\ndictionary encoding is unrelated to expression APIs.\n\nBREAKING CHANGE: `Category`, `CategoryValue`/`Column`/`Scalar` are removed. Use string types instead.",
          "timestamp": "2023-02-06T14:12:11+01:00",
          "tree_id": "8b5570aa66810f5e131dc2e979be03816829f2da",
          "url": "https://github.com/ibis-project/ibis/commit/bb0ee786271dc21cb18a8561f523b4cee2549ce0"
        },
        "date": 1675689410174,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 176.1365088835071,
            "unit": "iter/sec",
            "range": "stddev: 0.00005526351202761978",
            "extra": "mean: 5.677414673078245 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.7064789787719,
            "unit": "iter/sec",
            "range": "stddev: 0.0016771117094471464",
            "extra": "mean: 24.5661139230807 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.69047649944089,
            "unit": "iter/sec",
            "range": "stddev: 0.0001340526506027794",
            "extra": "mean: 14.558058859995526 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5759334368632028,
            "unit": "iter/sec",
            "range": "stddev: 0.0022498315707565972",
            "extra": "mean: 634.5445668000025 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.356585412366236,
            "unit": "iter/sec",
            "range": "stddev: 0.0006362598801906851",
            "extra": "mean: 18.06469804000244 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.997322144949594,
            "unit": "iter/sec",
            "range": "stddev: 0.0005266850071094161",
            "extra": "mean: 200.10717160001832 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4731.096417904799,
            "unit": "iter/sec",
            "range": "stddev: 0.00011393343739260058",
            "extra": "mean: 211.3674953263492 usec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 228.2619007578421,
            "unit": "iter/sec",
            "range": "stddev: 0.005472944846857815",
            "extra": "mean: 4.3809325896259725 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.811290659281246,
            "unit": "iter/sec",
            "range": "stddev: 0.0002413793012065599",
            "extra": "mean: 72.40452935714562 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 521.1537037508369,
            "unit": "iter/sec",
            "range": "stddev: 0.00005455896972672544",
            "extra": "mean: 1.9188197125009765 msec\nrounds: 400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 252.52190435415423,
            "unit": "iter/sec",
            "range": "stddev: 0.0002144645671333549",
            "extra": "mean: 3.9600525053760514 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 556963.0093310908,
            "unit": "iter/sec",
            "range": "stddev: 2.687492727248878e-7",
            "extra": "mean: 1.7954513733344586 usec\nrounds: 21552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12009823.285739213,
            "unit": "iter/sec",
            "range": "stddev: 3.5882360156822314e-9",
            "extra": "mean: 83.26517186865253 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 279.2613094228216,
            "unit": "iter/sec",
            "range": "stddev: 0.00013635730504801878",
            "extra": "mean: 3.580875568000465 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 130.28218633473972,
            "unit": "iter/sec",
            "range": "stddev: 0.008967386660627907",
            "extra": "mean: 7.675646442028968 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 247.20503858676852,
            "unit": "iter/sec",
            "range": "stddev: 0.0002405513922788105",
            "extra": "mean: 4.045224991031086 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.29723886938213,
            "unit": "iter/sec",
            "range": "stddev: 0.00047576252247274797",
            "extra": "mean: 42.923541523808105 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.19851287319749,
            "unit": "iter/sec",
            "range": "stddev: 0.0007868867039015177",
            "extra": "mean: 29.24103757692146 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1598342.6496894143,
            "unit": "iter/sec",
            "range": "stddev: 9.536871013531893e-8",
            "extra": "mean: 625.6480737683609 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5038.820077640038,
            "unit": "iter/sec",
            "range": "stddev: 0.00005012897012269176",
            "extra": "mean: 198.459160000084 usec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 158.39541413593932,
            "unit": "iter/sec",
            "range": "stddev: 0.0007640826871327495",
            "extra": "mean: 6.313314090910312 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4405.883337534788,
            "unit": "iter/sec",
            "range": "stddev: 0.00005922985561610427",
            "extra": "mean: 226.9692416684658 usec\nrounds: 480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15022373229660418,
            "unit": "iter/sec",
            "range": "stddev: 0.14737935022972085",
            "extra": "mean: 6.656737818399984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 115835.73889799473,
            "unit": "iter/sec",
            "range": "stddev: 5.454496791064852e-7",
            "extra": "mean: 8.632914241438066 usec\nrounds: 29070"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 620.6175021722413,
            "unit": "iter/sec",
            "range": "stddev: 0.00006004461015083068",
            "extra": "mean: 1.6112984189132131 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5892.73721022394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000477973821886622",
            "extra": "mean: 169.70042347467884 usec\nrounds: 1934"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.41317843878781,
            "unit": "iter/sec",
            "range": "stddev: 0.0007999452102542537",
            "extra": "mean: 11.439922650796444 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7451352880378225,
            "unit": "iter/sec",
            "range": "stddev: 0.0019497295790626105",
            "extra": "mean: 1.3420381722 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.73557933654183,
            "unit": "iter/sec",
            "range": "stddev: 0.0004157691265551345",
            "extra": "mean: 4.530307270833589 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10765.796073911379,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022189436464596392",
            "extra": "mean: 92.8867677907524 usec\nrounds: 5129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 318.8799371641328,
            "unit": "iter/sec",
            "range": "stddev: 0.00005820090548657211",
            "extra": "mean: 3.135976533654682 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 140.37382215618075,
            "unit": "iter/sec",
            "range": "stddev: 0.0008067238001341416",
            "extra": "mean: 7.123835374998865 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.17535111628771,
            "unit": "iter/sec",
            "range": "stddev: 0.00029108838645468157",
            "extra": "mean: 7.033567999997992 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5915.224021164617,
            "unit": "iter/sec",
            "range": "stddev: 0.00005755697998340041",
            "extra": "mean: 169.0553048239609 usec\nrounds: 2011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.867293480219004,
            "unit": "iter/sec",
            "range": "stddev: 0.000703240998502582",
            "extra": "mean: 27.12431278787921 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1494894.6698364653,
            "unit": "iter/sec",
            "range": "stddev: 2.0646543371210864e-7",
            "extra": "mean: 668.9434514536034 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.38606664711025,
            "unit": "iter/sec",
            "range": "stddev: 0.00024380504343437268",
            "extra": "mean: 11.711512653848697 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 61669.49285011519,
            "unit": "iter/sec",
            "range": "stddev: 7.121951141285811e-7",
            "extra": "mean: 16.21547306105554 usec\nrounds: 761"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.29647208818871,
            "unit": "iter/sec",
            "range": "stddev: 0.0007917343594692306",
            "extra": "mean: 11.074629793103574 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 236.1585709180848,
            "unit": "iter/sec",
            "range": "stddev: 0.00026809706325600413",
            "extra": "mean: 4.234442968182025 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.13260459896895,
            "unit": "iter/sec",
            "range": "stddev: 0.00011096184594091326",
            "extra": "mean: 11.346538599991618 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.49515895041058,
            "unit": "iter/sec",
            "range": "stddev: 0.0007555979589472485",
            "extra": "mean: 11.561340682353334 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5250.010143131954,
            "unit": "iter/sec",
            "range": "stddev: 0.00004785588677817021",
            "extra": "mean: 190.47582247211406 usec\nrounds: 2225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.4143537836593,
            "unit": "iter/sec",
            "range": "stddev: 0.00022717875230165928",
            "extra": "mean: 11.439768833330136 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 251.9491881542399,
            "unit": "iter/sec",
            "range": "stddev: 0.00025931528460287147",
            "extra": "mean: 3.96905426576653 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5926.0492580606315,
            "unit": "iter/sec",
            "range": "stddev: 0.00006741521408704662",
            "extra": "mean: 168.74648799785064 usec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5820204955626036,
            "unit": "iter/sec",
            "range": "stddev: 0.05464419511019666",
            "extra": "mean: 1.7181525523999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.094957140577892,
            "unit": "iter/sec",
            "range": "stddev: 0.0011716787326218835",
            "extra": "mean: 109.9510404000057 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 996.4079051292323,
            "unit": "iter/sec",
            "range": "stddev: 0.000012294353837360224",
            "extra": "mean: 1.0036050445327427 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1514692.727416869,
            "unit": "iter/sec",
            "range": "stddev: 1.0797105590153407e-7",
            "extra": "mean: 660.1999084694774 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.7968256023853,
            "unit": "iter/sec",
            "range": "stddev: 0.00015396545911758308",
            "extra": "mean: 9.63420600000526 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 141.54147252211462,
            "unit": "iter/sec",
            "range": "stddev: 0.00030596689769478826",
            "extra": "mean: 7.0650670943370235 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 374330.59467927885,
            "unit": "iter/sec",
            "range": "stddev: 2.659357339464178e-7",
            "extra": "mean: 2.671435394846061 usec\nrounds: 1842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 67.5256579799822,
            "unit": "iter/sec",
            "range": "stddev: 0.0181491663828254",
            "extra": "mean: 14.809185573525951 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 248.5165726956642,
            "unit": "iter/sec",
            "range": "stddev: 0.0002750919660469599",
            "extra": "mean: 4.023876513155562 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 261.00784217283984,
            "unit": "iter/sec",
            "range": "stddev: 0.00010485822150041085",
            "extra": "mean: 3.831302506756859 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.216379336032709,
            "unit": "iter/sec",
            "range": "stddev: 0.0005236921892216045",
            "extra": "mean: 451.1863035999909 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8609902938678605,
            "unit": "iter/sec",
            "range": "stddev: 0.005736153169311019",
            "extra": "mean: 1.1614532789999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8641837780301712,
            "unit": "iter/sec",
            "range": "stddev: 0.002804912569489019",
            "extra": "mean: 1.1571612722000055 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9914.28560100269,
            "unit": "iter/sec",
            "range": "stddev: 0.000013978298866548054",
            "extra": "mean: 100.8645544666238 usec\nrounds: 1735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.31444504542789,
            "unit": "iter/sec",
            "range": "stddev: 0.0010773847878693993",
            "extra": "mean: 26.099816891888697 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1509242.8411141261,
            "unit": "iter/sec",
            "range": "stddev: 1.1639689673838587e-7",
            "extra": "mean: 662.5838948898362 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.08817213803553,
            "unit": "iter/sec",
            "range": "stddev: 0.0007492438073800783",
            "extra": "mean: 11.615997589036734 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 419.0140748887298,
            "unit": "iter/sec",
            "range": "stddev: 0.00003131236660500245",
            "extra": "mean: 2.3865546766312145 msec\nrounds: 368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.6633711289363,
            "unit": "iter/sec",
            "range": "stddev: 0.00017359357493322558",
            "extra": "mean: 14.779044900001281 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 80.07743421009093,
            "unit": "iter/sec",
            "range": "stddev: 0.015122598599903407",
            "extra": "mean: 12.487912604397424 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1454.0902894016717,
            "unit": "iter/sec",
            "range": "stddev: 0.000008951044098869633",
            "extra": "mean: 687.7152039929236 usec\nrounds: 1152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4578710.110714681,
            "unit": "iter/sec",
            "range": "stddev: 1.335410835233332e-8",
            "extra": "mean: 218.40212108201257 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 128.80044761464643,
            "unit": "iter/sec",
            "range": "stddev: 0.00042736009004173064",
            "extra": "mean: 7.763948173471144 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 152.11968821689737,
            "unit": "iter/sec",
            "range": "stddev: 0.0009420494180635617",
            "extra": "mean: 6.573771033333742 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10479.152330801802,
            "unit": "iter/sec",
            "range": "stddev: 0.000002259772773384283",
            "extra": "mean: 95.42756593590676 usec\nrounds: 4421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19212.770779580158,
            "unit": "iter/sec",
            "range": "stddev: 0.000013609762100101145",
            "extra": "mean: 52.04871340383796 usec\nrounds: 5185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.94107777661746,
            "unit": "iter/sec",
            "range": "stddev: 0.0002370971989680485",
            "extra": "mean: 19.630523020834307 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4294267.084541413,
            "unit": "iter/sec",
            "range": "stddev: 1.4150665076501133e-8",
            "extra": "mean: 232.86860838262837 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 264.62716310263573,
            "unit": "iter/sec",
            "range": "stddev: 0.00018335493956896543",
            "extra": "mean: 3.7789015620144397 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 116.93167893321677,
            "unit": "iter/sec",
            "range": "stddev: 0.00034475075221131256",
            "extra": "mean: 8.552002409638968 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 155.42109393060068,
            "unit": "iter/sec",
            "range": "stddev: 0.000787110535450121",
            "extra": "mean: 6.434133068491491 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 156.2441414914287,
            "unit": "iter/sec",
            "range": "stddev: 0.0007496745711388515",
            "extra": "mean: 6.400239973508756 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5370795.853849992,
            "unit": "iter/sec",
            "range": "stddev: 5.891496465462128e-9",
            "extra": "mean: 186.19214492819484 nsec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.35422338312873,
            "unit": "iter/sec",
            "range": "stddev: 0.0007439652769045405",
            "extra": "mean: 11.06755127272472 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6003.593973323105,
            "unit": "iter/sec",
            "range": "stddev: 0.00006144176889243793",
            "extra": "mean: 166.56689383783905 usec\nrounds: 3457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 156.2714193345249,
            "unit": "iter/sec",
            "range": "stddev: 0.0007703088023159377",
            "extra": "mean: 6.399122784309868 msec\nrounds: 153"
          }
        ]
      }
    ]
  }
}
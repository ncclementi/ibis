window.BENCHMARK_DATA = {
  "lastUpdate": 1680696592324,
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
          "id": "4f1d9fefb991733d14d03677bb63fdee93a7fc60",
          "message": "fix(deps): support pandas 2.0",
          "timestamp": "2023-04-05T08:03:13-04:00",
          "tree_id": "d6e82f79ca0459eb5b61af77986cad9ccecd0686",
          "url": "https://github.com/ibis-project/ibis/commit/4f1d9fefb991733d14d03677bb63fdee93a7fc60"
        },
        "date": 1680696508342,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.7948504800431,
            "unit": "iter/sec",
            "range": "stddev: 0.00007847905764274524",
            "extra": "mean: 6.219104635593501 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.376450565591114,
            "unit": "iter/sec",
            "range": "stddev: 0.015631906527751288",
            "extra": "mean: 24.766912048782267 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1202.2269306613046,
            "unit": "iter/sec",
            "range": "stddev: 0.00002505906320393694",
            "extra": "mean: 831.7897183104473 usec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5582.93667013255,
            "unit": "iter/sec",
            "range": "stddev: 0.00004374279551373901",
            "extra": "mean: 179.11720284232746 usec\nrounds: 774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 323.61375169519613,
            "unit": "iter/sec",
            "range": "stddev: 0.00007807193619478228",
            "extra": "mean: 3.09010354090847 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.04514623517986,
            "unit": "iter/sec",
            "range": "stddev: 0.0005252494028588044",
            "extra": "mean: 9.519716387096596 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5818.476289998513,
            "unit": "iter/sec",
            "range": "stddev: 0.00004313434270700344",
            "extra": "mean: 171.86630144371622 usec\nrounds: 554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.01672521405456,
            "unit": "iter/sec",
            "range": "stddev: 0.0005041605047910124",
            "extra": "mean: 9.344333775863564 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 116.38574348797316,
            "unit": "iter/sec",
            "range": "stddev: 0.0002564015437148305",
            "extra": "mean: 8.592117642856627 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.3235222545118,
            "unit": "iter/sec",
            "range": "stddev: 0.000056195566737698315",
            "extra": "mean: 1.8405240322570922 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 141.84244001351377,
            "unit": "iter/sec",
            "range": "stddev: 0.00004014177907238215",
            "extra": "mean: 7.050076126050334 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 747418.9211120852,
            "unit": "iter/sec",
            "range": "stddev: 2.4894841620004995e-7",
            "extra": "mean: 1.3379377638876189 usec\nrounds: 23925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.61293181283526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000863045861106222",
            "extra": "mean: 10.569379690909644 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.81153394690394,
            "unit": "iter/sec",
            "range": "stddev: 0.0005396091598290711",
            "extra": "mean: 8.209403228071054 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.844206405950276,
            "unit": "iter/sec",
            "range": "stddev: 0.00010057535331001692",
            "extra": "mean: 63.11455268750166 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1751.8389880548164,
            "unit": "iter/sec",
            "range": "stddev: 0.000017506067533919607",
            "extra": "mean: 570.8287158915025 usec\nrounds: 1334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 237.6844268156605,
            "unit": "iter/sec",
            "range": "stddev: 0.004412411636826124",
            "extra": "mean: 4.207259236111266 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.04840697553954,
            "unit": "iter/sec",
            "range": "stddev: 0.0004914303704245781",
            "extra": "mean: 9.896247055552957 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.2793293931666,
            "unit": "iter/sec",
            "range": "stddev: 0.00001646236738763067",
            "extra": "mean: 1.3257687981513702 msec\nrounds: 649"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.9238557436396,
            "unit": "iter/sec",
            "range": "stddev: 0.00020846267236815437",
            "extra": "mean: 3.334179595419551 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5257.175939544947,
            "unit": "iter/sec",
            "range": "stddev: 0.00005009581882650115",
            "extra": "mean: 190.2161943027074 usec\nrounds: 2949"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 313.3029980316585,
            "unit": "iter/sec",
            "range": "stddev: 0.00017252465892287404",
            "extra": "mean: 3.1917983749997583 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.48175522590327,
            "unit": "iter/sec",
            "range": "stddev: 0.00017621333975689735",
            "extra": "mean: 3.1697554087840736 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.3058064727627,
            "unit": "iter/sec",
            "range": "stddev: 0.000042690689941158593",
            "extra": "mean: 1.4549564263569614 msec\nrounds: 516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2478304.006580153,
            "unit": "iter/sec",
            "range": "stddev: 1.6743626360387013e-8",
            "extra": "mean: 403.501748512336 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.46775184029757,
            "unit": "iter/sec",
            "range": "stddev: 0.0005911975790102603",
            "extra": "mean: 8.23263775651971 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5809.592345795091,
            "unit": "iter/sec",
            "range": "stddev: 0.000055154790574900304",
            "extra": "mean: 172.12911689471417 usec\nrounds: 3439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.74357486809387,
            "unit": "iter/sec",
            "range": "stddev: 0.00007091482579623256",
            "extra": "mean: 6.07003945859907 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 109.22908648235075,
            "unit": "iter/sec",
            "range": "stddev: 0.010512084724779297",
            "extra": "mean: 9.155070615385766 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.41668494684049,
            "unit": "iter/sec",
            "range": "stddev: 0.0002684020248172227",
            "extra": "mean: 17.72525275000234 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.922335531443562,
            "unit": "iter/sec",
            "range": "stddev: 0.005198950720202023",
            "extra": "mean: 1.0842041381999934 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.49992145222575,
            "unit": "iter/sec",
            "range": "stddev: 0.0001191439471007773",
            "extra": "mean: 6.472495200000594 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.62210839571544,
            "unit": "iter/sec",
            "range": "stddev: 0.00006488479653384631",
            "extra": "mean: 8.958798703701824 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141946.7070610077,
            "unit": "iter/sec",
            "range": "stddev: 3.170760773908472e-7",
            "extra": "mean: 7.044897487972067 usec\nrounds: 39371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 286.54592791030643,
            "unit": "iter/sec",
            "range": "stddev: 0.00024121543460106076",
            "extra": "mean: 3.4898419506174814 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2547834.2106287135,
            "unit": "iter/sec",
            "range": "stddev: 1.9341072241178345e-8",
            "extra": "mean: 392.4902161326492 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1779726100986676,
            "unit": "iter/sec",
            "range": "stddev: 0.10832302807141883",
            "extra": "mean: 5.618842132200018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1890076.5456116642,
            "unit": "iter/sec",
            "range": "stddev: 1.1239784980339986e-7",
            "extra": "mean: 529.0791012257026 nsec\nrounds: 149277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5859142.850770501,
            "unit": "iter/sec",
            "range": "stddev: 9.038078118468782e-9",
            "extra": "mean: 170.6734287709414 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.55739176470158,
            "unit": "iter/sec",
            "range": "stddev: 0.0006500814441583917",
            "extra": "mean: 15.02462721999791 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 122.7716581314469,
            "unit": "iter/sec",
            "range": "stddev: 0.0005390244810762911",
            "extra": "mean: 8.145202363637855 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11658.174916286525,
            "unit": "iter/sec",
            "range": "stddev: 0.000011185169173552615",
            "extra": "mean: 85.77671952777062 usec\nrounds: 4660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.23745148242125,
            "unit": "iter/sec",
            "range": "stddev: 0.00020197360078718222",
            "extra": "mean: 3.341827685826101 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1666600.8603272715,
            "unit": "iter/sec",
            "range": "stddev: 9.907949966193958e-8",
            "extra": "mean: 600.0236912176016 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.50616603984325,
            "unit": "iter/sec",
            "range": "stddev: 0.00021415593394073098",
            "extra": "mean: 20.199504021280624 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.87902704441562,
            "unit": "iter/sec",
            "range": "stddev: 0.00008782335763032018",
            "extra": "mean: 8.411912722219537 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 313.3421104827735,
            "unit": "iter/sec",
            "range": "stddev: 0.0001866723985435315",
            "extra": "mean: 3.1913999636348804 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.00225345364377,
            "unit": "iter/sec",
            "range": "stddev: 0.0006120864022135128",
            "extra": "mean: 8.695481783781652 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5390.2214870752005,
            "unit": "iter/sec",
            "range": "stddev: 0.00005417376636496119",
            "extra": "mean: 185.52113348177315 usec\nrounds: 3139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4538.8175017922,
            "unit": "iter/sec",
            "range": "stddev: 0.002341795030943827",
            "extra": "mean: 220.32170264725104 usec\nrounds: 3400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6773931777004508,
            "unit": "iter/sec",
            "range": "stddev: 0.002956586254852724",
            "extra": "mean: 1.4762475220000055 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.11038708275574,
            "unit": "iter/sec",
            "range": "stddev: 0.0006134625022952261",
            "extra": "mean: 8.256930095654733 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.96825256847951,
            "unit": "iter/sec",
            "range": "stddev: 0.0006423296954064657",
            "extra": "mean: 10.756360073170244 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5621.382980845057,
            "unit": "iter/sec",
            "range": "stddev: 0.000023369188221903063",
            "extra": "mean: 177.89216700009842 usec\nrounds: 2497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11980.270239220694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021055964037817614",
            "extra": "mean: 83.4705712001576 usec\nrounds: 5625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11764793.09634953,
            "unit": "iter/sec",
            "range": "stddev: 4.466154860620788e-9",
            "extra": "mean: 84.99936988350662 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.125415984161654,
            "unit": "iter/sec",
            "range": "stddev: 0.04284031646508164",
            "extra": "mean: 109.58404545454475 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.13476382307521,
            "unit": "iter/sec",
            "range": "stddev: 0.0006807145817891813",
            "extra": "mean: 22.155870891889958 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 378.38067520776974,
            "unit": "iter/sec",
            "range": "stddev: 0.000027126800110264824",
            "extra": "mean: 2.6428411003043366 msec\nrounds: 329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.3925035928501,
            "unit": "iter/sec",
            "range": "stddev: 0.00018832064220206254",
            "extra": "mean: 3.2217272918154167 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 174.5874506724532,
            "unit": "iter/sec",
            "range": "stddev: 0.0041375553097225135",
            "extra": "mean: 5.727788544642414 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.480023353484463,
            "unit": "iter/sec",
            "range": "stddev: 0.001570575938984803",
            "extra": "mean: 182.48097416667974 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.3787695209636,
            "unit": "iter/sec",
            "range": "stddev: 0.00004135861550241787",
            "extra": "mean: 3.4202209744517713 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.29030953854555,
            "unit": "iter/sec",
            "range": "stddev: 0.0004136707203270669",
            "extra": "mean: 17.45495892856346 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.73742699172814,
            "unit": "iter/sec",
            "range": "stddev: 0.0004714783383292278",
            "extra": "mean: 37.400756636357485 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.63877501903385,
            "unit": "iter/sec",
            "range": "stddev: 0.000809545963847068",
            "extra": "mean: 22.915400342100156 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8057.145646909238,
            "unit": "iter/sec",
            "range": "stddev: 0.000011003659748595319",
            "extra": "mean: 124.1134322033269 usec\nrounds: 3776"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 511295.4808958549,
            "unit": "iter/sec",
            "range": "stddev: 3.163218247674969e-7",
            "extra": "mean: 1.9558162302703566 usec\nrounds: 2144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.8198750712561,
            "unit": "iter/sec",
            "range": "stddev: 0.0006189042567359103",
            "extra": "mean: 8.78581178703594 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6379902.716892716,
            "unit": "iter/sec",
            "range": "stddev: 1.0550267557087151e-8",
            "extra": "mean: 156.74220193843348 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.74506067355355,
            "unit": "iter/sec",
            "range": "stddev: 0.00012831160958540062",
            "extra": "mean: 10.127088820229218 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.68419614284971,
            "unit": "iter/sec",
            "range": "stddev: 0.00008349948855577168",
            "extra": "mean: 13.38971364286071 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9114276277400584,
            "unit": "iter/sec",
            "range": "stddev: 0.012451865298305049",
            "extra": "mean: 1.0971798193999915 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7310776.543201232,
            "unit": "iter/sec",
            "range": "stddev: 6.278891426251975e-9",
            "extra": "mean: 136.78437496907242 nsec\nrounds: 62501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.0997259041936,
            "unit": "iter/sec",
            "range": "stddev: 0.00018626368698215336",
            "extra": "mean: 3.245702335713726 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.01075493647402,
            "unit": "iter/sec",
            "range": "stddev: 0.0006895179202116376",
            "extra": "mean: 9.899935909091099 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13318.896340286616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017099192385068296",
            "extra": "mean: 75.08129611124225 usec\nrounds: 7200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.553397629172536,
            "unit": "iter/sec",
            "range": "stddev: 0.002063718304033126",
            "extra": "mean: 391.6350468000019 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.69370645301153,
            "unit": "iter/sec",
            "range": "stddev: 0.014362651593954376",
            "extra": "mean: 10.905873899998255 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.9759999417883,
            "unit": "iter/sec",
            "range": "stddev: 0.00002649861490316707",
            "extra": "mean: 5.181991544552962 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.54801280205137,
            "unit": "iter/sec",
            "range": "stddev: 0.0006084386203506377",
            "extra": "mean: 8.227201555557828 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71114.0600134017,
            "unit": "iter/sec",
            "range": "stddev: 4.0979829346434656e-7",
            "extra": "mean: 14.061916867234784 usec\nrounds: 13737"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.38366600344996,
            "unit": "iter/sec",
            "range": "stddev: 0.0006021258223234243",
            "extra": "mean: 9.86352180208172 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5846.623730611996,
            "unit": "iter/sec",
            "range": "stddev: 0.00004344857879836962",
            "extra": "mean: 171.03888433321927 usec\nrounds: 2585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7972624665291399,
            "unit": "iter/sec",
            "range": "stddev: 0.003160658751892569",
            "extra": "mean: 1.2542920831999935 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6600590142479734,
            "unit": "iter/sec",
            "range": "stddev: 0.002555042747180452",
            "extra": "mean: 602.3882232000119 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.03691639513133,
            "unit": "iter/sec",
            "range": "stddev: 0.015847758467334265",
            "extra": "mean: 10.984554833334405 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5666.289313973812,
            "unit": "iter/sec",
            "range": "stddev: 0.000051693635619848565",
            "extra": "mean: 176.4823404858395 usec\nrounds: 3542"
          }
        ]
      }
    ]
  }
}
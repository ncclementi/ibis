window.BENCHMARK_DATA = {
  "lastUpdate": 1678098206945,
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
          "id": "4a830a4871766fa7e22e0639645d345843357bc0",
          "message": "chore(deps): bump poetry2nix\n\nThis commit picks up the change to remove the `makeSetupHook` warning spam.",
          "timestamp": "2023-03-06T05:17:01-05:00",
          "tree_id": "5cf9436e3a3eb0873207ccde3b7a57b33334f23c",
          "url": "https://github.com/ibis-project/ibis/commit/4a830a4871766fa7e22e0639645d345843357bc0"
        },
        "date": 1678098108220,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 2159440.8649565685,
            "unit": "iter/sec",
            "range": "stddev: 0.00002537070066325771",
            "extra": "mean: 463.0828360377964 nsec\nrounds: 111099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 489.21219277500165,
            "unit": "iter/sec",
            "range": "stddev: 0.0005475183989009383",
            "extra": "mean: 2.0441027733336155 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 223.23289878079473,
            "unit": "iter/sec",
            "range": "stddev: 0.0003372586882642558",
            "extra": "mean: 4.479626459458189 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 888.4114569914273,
            "unit": "iter/sec",
            "range": "stddev: 0.00013890438617886322",
            "extra": "mean: 1.1256045744687526 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3716.3406002432366,
            "unit": "iter/sec",
            "range": "stddev: 0.00007108614984285266",
            "extra": "mean: 269.08190275523975 usec\nrounds: 1234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 648749.9220952706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012292472860575718",
            "extra": "mean: 1.5414260039836236 usec\nrounds: 19920"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.730392578874681,
            "unit": "iter/sec",
            "range": "stddev: 0.005259723188032188",
            "extra": "mean: 129.35953637500398 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 103.97493092394636,
            "unit": "iter/sec",
            "range": "stddev: 0.00058879391902282",
            "extra": "mean: 9.617702951218705 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3579.90217857073,
            "unit": "iter/sec",
            "range": "stddev: 0.00021395544108840042",
            "extra": "mean: 279.3372416671029 usec\nrounds: 600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 69.80469843692201,
            "unit": "iter/sec",
            "range": "stddev: 0.0014039136872540275",
            "extra": "mean: 14.325683261902999 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 81.84011480485397,
            "unit": "iter/sec",
            "range": "stddev: 0.0012922037646654152",
            "extra": "mean: 12.218946691173137 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.092663041630164,
            "unit": "iter/sec",
            "range": "stddev: 0.00481516525619591",
            "extra": "mean: 82.6947709166627 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2126275.8533621663,
            "unit": "iter/sec",
            "range": "stddev: 0.000001087332343854228",
            "extra": "mean: 470.3058629097265 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2108748.1162529695,
            "unit": "iter/sec",
            "range": "stddev: 9.699096466205843e-7",
            "extra": "mean: 474.21500571494005 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3621.107873827824,
            "unit": "iter/sec",
            "range": "stddev: 0.00010966922682993661",
            "extra": "mean: 276.1585776628393 usec\nrounds: 1925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 141.8668205625113,
            "unit": "iter/sec",
            "range": "stddev: 0.004242352126473241",
            "extra": "mean: 7.048864533898301 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 101.36317226055183,
            "unit": "iter/sec",
            "range": "stddev: 0.0006059403645944479",
            "extra": "mean: 9.865516022224735 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 56.219727772721356,
            "unit": "iter/sec",
            "range": "stddev: 0.001076780441171806",
            "extra": "mean: 17.787350448274758 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 105.70972379630858,
            "unit": "iter/sec",
            "range": "stddev: 0.001099279960497084",
            "extra": "mean: 9.459867683760992 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5234386.306645114,
            "unit": "iter/sec",
            "range": "stddev: 2.8362043982523683e-7",
            "extra": "mean: 191.04436344915587 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.388981003999145,
            "unit": "iter/sec",
            "range": "stddev: 0.0034463192927273747",
            "extra": "mean: 51.57568619999893 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 127.28680897635034,
            "unit": "iter/sec",
            "range": "stddev: 0.00037517394145739644",
            "extra": "mean: 7.856273623654106 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 199.23683974401618,
            "unit": "iter/sec",
            "range": "stddev: 0.0005558261353060883",
            "extra": "mean: 5.019152086957521 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.7825759809486,
            "unit": "iter/sec",
            "range": "stddev: 0.014691708048242711",
            "extra": "mean: 10.550462357142532 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3990.0111657858047,
            "unit": "iter/sec",
            "range": "stddev: 0.00010203453454831468",
            "extra": "mean: 250.6258650539533 usec\nrounds: 3431"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 106.76969288281624,
            "unit": "iter/sec",
            "range": "stddev: 0.0009482076025016336",
            "extra": "mean: 9.365953699028971 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 229.0962389071487,
            "unit": "iter/sec",
            "range": "stddev: 0.0005022328917464262",
            "extra": "mean: 4.3649778135611115 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121807.86986711912,
            "unit": "iter/sec",
            "range": "stddev: 0.000009285304696994478",
            "extra": "mean: 8.209650173596382 usec\nrounds: 32256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 156.41968968834843,
            "unit": "iter/sec",
            "range": "stddev: 0.00038158348996424784",
            "extra": "mean: 6.3930570505056385 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8663.65766372683,
            "unit": "iter/sec",
            "range": "stddev: 0.00010050385332538213",
            "extra": "mean: 115.42468998825052 usec\nrounds: 4245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 236.8356636471231,
            "unit": "iter/sec",
            "range": "stddev: 0.0005091018140081549",
            "extra": "mean: 4.222337061068494 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 268.1483971280023,
            "unit": "iter/sec",
            "range": "stddev: 0.00031810292027723887",
            "extra": "mean: 3.7292783052611123 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9725.531324200765,
            "unit": "iter/sec",
            "range": "stddev: 0.00007483294563705472",
            "extra": "mean: 102.82214582062221 usec\nrounds: 4917"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9628229.955587521,
            "unit": "iter/sec",
            "range": "stddev: 2.1221096451077913e-7",
            "extra": "mean: 103.86125015843514 nsec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1700676501593625,
            "unit": "iter/sec",
            "range": "stddev: 0.03431392975399187",
            "extra": "mean: 854.6514382000055 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 603.9546100708399,
            "unit": "iter/sec",
            "range": "stddev: 0.0003286146398496364",
            "extra": "mean: 1.6557535671144337 msec\nrounds: 596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1203663.5173246437,
            "unit": "iter/sec",
            "range": "stddev: 0.000002646885597266451",
            "extra": "mean: 830.7969674304642 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3778.444665370864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000928053170430937",
            "extra": "mean: 264.65916231747894 usec\nrounds: 1916"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60078.10014850786,
            "unit": "iter/sec",
            "range": "stddev: 0.00001620520774889643",
            "extra": "mean: 16.645000383302513 usec\nrounds: 10438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.51121923697131,
            "unit": "iter/sec",
            "range": "stddev: 0.0007845134004740716",
            "extra": "mean: 13.069978625001255 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 224.48209314778978,
            "unit": "iter/sec",
            "range": "stddev: 0.0005983596316611827",
            "extra": "mean: 4.454698305675728 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 233.66260798720003,
            "unit": "iter/sec",
            "range": "stddev: 0.0004423467262277149",
            "extra": "mean: 4.279674906542084 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 113.20991118864268,
            "unit": "iter/sec",
            "range": "stddev: 0.0009681998771943749",
            "extra": "mean: 8.833148878049125 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5368068863849675,
            "unit": "iter/sec",
            "range": "stddev: 0.0062653180984034015",
            "extra": "mean: 1.8628673092000099 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 426273.57540817437,
            "unit": "iter/sec",
            "range": "stddev: 0.000006369341083485699",
            "extra": "mean: 2.345911306002159 usec\nrounds: 2052"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 69.13989320843133,
            "unit": "iter/sec",
            "range": "stddev: 0.01827348155643196",
            "extra": "mean: 14.463429918605286 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 82.18094919768704,
            "unit": "iter/sec",
            "range": "stddev: 0.00127831452882282",
            "extra": "mean: 12.168270259260337 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10153.804453432738,
            "unit": "iter/sec",
            "range": "stddev: 0.00005046820840644954",
            "extra": "mean: 98.48525294988579 usec\nrounds: 6017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 72.71077425598058,
            "unit": "iter/sec",
            "range": "stddev: 0.0022266602507106776",
            "extra": "mean: 13.753119950001746 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.99730779863457,
            "unit": "iter/sec",
            "range": "stddev: 0.0008665610679069029",
            "extra": "mean: 18.182708209306696 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 89.65078499638216,
            "unit": "iter/sec",
            "range": "stddev: 0.0013276170107457983",
            "extra": "mean: 11.154392011629959 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3617.8104592384157,
            "unit": "iter/sec",
            "range": "stddev: 0.00009353088127163948",
            "extra": "mean: 276.4102794402639 usec\nrounds: 2573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.674046649367924,
            "unit": "iter/sec",
            "range": "stddev: 0.0015551096752193388",
            "extra": "mean: 29.69646061290262 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 223.1041456899808,
            "unit": "iter/sec",
            "range": "stddev: 0.00044777162936424054",
            "extra": "mean: 4.48221164563016 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 81.94819530679065,
            "unit": "iter/sec",
            "range": "stddev: 0.0009334789167045478",
            "extra": "mean: 12.202831267440184 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4509752.408973062,
            "unit": "iter/sec",
            "range": "stddev: 3.120235041623575e-7",
            "extra": "mean: 221.74166324737047 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1408.2559671599258,
            "unit": "iter/sec",
            "range": "stddev: 0.0001375442250331767",
            "extra": "mean: 710.0981805294471 usec\nrounds: 1058"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9560461180122855,
            "unit": "iter/sec",
            "range": "stddev: 0.02017350540456329",
            "extra": "mean: 511.23539000000164 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.110012066832628,
            "unit": "iter/sec",
            "range": "stddev: 0.1958343584602169",
            "extra": "mean: 9.089911941399999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 110.40780235207977,
            "unit": "iter/sec",
            "range": "stddev: 0.0009378266921645942",
            "extra": "mean: 9.057330901407648 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.12412795766056,
            "unit": "iter/sec",
            "range": "stddev: 0.0019115834523896684",
            "extra": "mean: 24.922660027782072 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 126.43545584141802,
            "unit": "iter/sec",
            "range": "stddev: 0.0005629015801047157",
            "extra": "mean: 7.909173841665526 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.27304655950607,
            "unit": "iter/sec",
            "range": "stddev: 0.0013352328941832517",
            "extra": "mean: 11.201589265058153 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3917.9217052467175,
            "unit": "iter/sec",
            "range": "stddev: 0.00008331252962024248",
            "extra": "mean: 255.23736185458776 usec\nrounds: 2092"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5639668153118973,
            "unit": "iter/sec",
            "range": "stddev: 0.054011022342336165",
            "extra": "mean: 1.7731539743999973 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2075505.64547606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011566947077104995",
            "extra": "mean: 481.81030110896813 nsec\nrounds: 106372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 101.01857474587226,
            "unit": "iter/sec",
            "range": "stddev: 0.0012614202812988619",
            "extra": "mean: 9.899169558822758 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3921.211044997799,
            "unit": "iter/sec",
            "range": "stddev: 0.00010099467020408392",
            "extra": "mean: 255.02325391939252 usec\nrounds: 2615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 388.82890926666,
            "unit": "iter/sec",
            "range": "stddev: 0.000650489111438895",
            "extra": "mean: 2.5718252325579964 msec\nrounds: 387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 225.44436901490826,
            "unit": "iter/sec",
            "range": "stddev: 0.0005315073832409923",
            "extra": "mean: 4.435684086364879 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.204537787941554,
            "unit": "iter/sec",
            "range": "stddev: 0.001357312633835041",
            "extra": "mean: 34.24125412499753 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.71432775189634,
            "unit": "iter/sec",
            "range": "stddev: 0.0012531638620290528",
            "extra": "mean: 29.66097996552082 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6196063267705585,
            "unit": "iter/sec",
            "range": "stddev: 0.047694246891956955",
            "extra": "mean: 1.6139280004000056 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 184.94043735070068,
            "unit": "iter/sec",
            "range": "stddev: 0.004574611859205137",
            "extra": "mean: 5.407146291666382 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 109.93268488935723,
            "unit": "iter/sec",
            "range": "stddev: 0.000950856166464489",
            "extra": "mean: 9.096475729729145 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 73.10026278534077,
            "unit": "iter/sec",
            "range": "stddev: 0.001094217619223968",
            "extra": "mean: 13.679841383559786 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 221.86954966918583,
            "unit": "iter/sec",
            "range": "stddev: 0.0006941503867912023",
            "extra": "mean: 4.507152971153681 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3729.144928258872,
            "unit": "iter/sec",
            "range": "stddev: 0.00009904954602848064",
            "extra": "mean: 268.157987752677 usec\nrounds: 1878"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6120.5432750177315,
            "unit": "iter/sec",
            "range": "stddev: 0.00006491436655989943",
            "extra": "mean: 163.38418912610385 usec\nrounds: 3881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.55800588610024,
            "unit": "iter/sec",
            "range": "stddev: 0.0011043775837686828",
            "extra": "mean: 17.680962833340647 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 227.56217977064782,
            "unit": "iter/sec",
            "range": "stddev: 0.0005673714113798517",
            "extra": "mean: 4.394403327511918 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 83.99558878524014,
            "unit": "iter/sec",
            "range": "stddev: 0.0010271611453401273",
            "extra": "mean: 11.90538710975405 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6094401251526672,
            "unit": "iter/sec",
            "range": "stddev: 0.08044995361905895",
            "extra": "mean: 1.6408502800000178 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 146.50147610995228,
            "unit": "iter/sec",
            "range": "stddev: 0.0007153544884321593",
            "extra": "mean: 6.8258697902093495 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 62.46698746334311,
            "unit": "iter/sec",
            "range": "stddev: 0.027722122321168007",
            "extra": "mean: 16.008455675677016 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 29.01183192442115,
            "unit": "iter/sec",
            "range": "stddev: 0.0033246845278019025",
            "extra": "mean: 34.46869548276387 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.211154946361455,
            "unit": "iter/sec",
            "range": "stddev: 0.008298735153792204",
            "extra": "mean: 237.46454659998335 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 110.10507122025277,
            "unit": "iter/sec",
            "range": "stddev: 0.0009850098165017321",
            "extra": "mean: 9.082233805558447 msec\nrounds: 108"
          }
        ]
      }
    ]
  }
}
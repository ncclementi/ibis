window.BENCHMARK_DATA = {
  "lastUpdate": 1677232975864,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "bf6a1d62baeee8f32e3ffd6ac2acf3a77b149891",
          "message": "chore(deps): update trinodb/trino docker tag to v408",
          "timestamp": "2023-02-24T04:57:20-05:00",
          "tree_id": "95fb60a358d0bfe9c57b8d52694bc9ccf4af4ebb",
          "url": "https://github.com/ibis-project/ibis/commit/bf6a1d62baeee8f32e3ffd6ac2acf3a77b149891"
        },
        "date": 1677232898842,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 275.45782560420537,
            "unit": "iter/sec",
            "range": "stddev: 0.00004435023900782366",
            "extra": "mean: 3.6303198059686315 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1404.5393834973308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000174535768438643",
            "extra": "mean: 711.9771875032654 usec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10629.051114644031,
            "unit": "iter/sec",
            "range": "stddev: 0.00000239254692438923",
            "extra": "mean: 94.08177542981834 usec\nrounds: 757"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 107.24744651248811,
            "unit": "iter/sec",
            "range": "stddev: 0.006697777835814002",
            "extra": "mean: 9.324231322221346 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 77.87135406814053,
            "unit": "iter/sec",
            "range": "stddev: 0.010039807268018381",
            "extra": "mean: 12.841692711866296 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.33520641930679,
            "unit": "iter/sec",
            "range": "stddev: 0.0006763159322541805",
            "extra": "mean: 12.145472677961369 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.640744438219265,
            "unit": "iter/sec",
            "range": "stddev: 0.0021956962713326096",
            "extra": "mean: 28.867739888889226 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 111.38381661547457,
            "unit": "iter/sec",
            "range": "stddev: 0.0006660025261103911",
            "extra": "mean: 8.97796493589599 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.90100131418215,
            "unit": "iter/sec",
            "range": "stddev: 0.00034596993614601385",
            "extra": "mean: 10.8812742592575 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 266.0466150028404,
            "unit": "iter/sec",
            "range": "stddev: 0.000039615971032607396",
            "extra": "mean: 3.758739798246723 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 83.89409263438807,
            "unit": "iter/sec",
            "range": "stddev: 0.0007979689726616672",
            "extra": "mean: 11.91979039999893 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 151.72356539484798,
            "unit": "iter/sec",
            "range": "stddev: 0.008838417510134946",
            "extra": "mean: 6.590933962022202 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4022.5658266690352,
            "unit": "iter/sec",
            "range": "stddev: 0.00004910516337317516",
            "extra": "mean: 248.59754770702403 usec\nrounds: 1897"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5781991053292156,
            "unit": "iter/sec",
            "range": "stddev: 0.01201559302492722",
            "extra": "mean: 1.7295080375999874 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 962.7448479356995,
            "unit": "iter/sec",
            "range": "stddev: 0.000012815984544926709",
            "extra": "mean: 1.0386968075125849 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 75.0818659205487,
            "unit": "iter/sec",
            "range": "stddev: 0.0007320753733738349",
            "extra": "mean: 13.318795260871589 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 86.45633763717552,
            "unit": "iter/sec",
            "range": "stddev: 0.0006801529298413039",
            "extra": "mean: 11.566532047617155 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10663693.826527044,
            "unit": "iter/sec",
            "range": "stddev: 4.7495862405238156e-9",
            "extra": "mean: 93.77613576197726 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56160.42861102624,
            "unit": "iter/sec",
            "range": "stddev: 9.064783266500711e-7",
            "extra": "mean: 17.806131910532915 usec\nrounds: 796"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 374059.84820622794,
            "unit": "iter/sec",
            "range": "stddev: 0.000005023754891645011",
            "extra": "mean: 2.6733689937463607 usec\nrounds: 1935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1492356.0264150396,
            "unit": "iter/sec",
            "range": "stddev: 1.1191594201674054e-7",
            "extra": "mean: 670.0813896280604 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 616.1434658243379,
            "unit": "iter/sec",
            "range": "stddev: 0.00007598317895119235",
            "extra": "mean: 1.6229986285127616 msec\nrounds: 498"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.830137557068932,
            "unit": "iter/sec",
            "range": "stddev: 0.007497364308692876",
            "extra": "mean: 1.204619633799996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3957.848598046524,
            "unit": "iter/sec",
            "range": "stddev: 0.00005772213129195775",
            "extra": "mean: 252.66251985828117 usec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 409.78990422664333,
            "unit": "iter/sec",
            "range": "stddev: 0.00007498081571355052",
            "extra": "mean: 2.440274857154431 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 102.9121584407057,
            "unit": "iter/sec",
            "range": "stddev: 0.0005810205235716006",
            "extra": "mean: 9.717024840909971 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4091787.0068155364,
            "unit": "iter/sec",
            "range": "stddev: 1.4222470690688303e-8",
            "extra": "mean: 244.39199751509028 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.525543587877329,
            "unit": "iter/sec",
            "range": "stddev: 0.002783769093578597",
            "extra": "mean: 655.5040497999926 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.54239423757959,
            "unit": "iter/sec",
            "range": "stddev: 0.0002402964354286587",
            "extra": "mean: 14.8055160212786 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9306.122554039386,
            "unit": "iter/sec",
            "range": "stddev: 0.000014555057243806822",
            "extra": "mean: 107.45613913777045 usec\nrounds: 3227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1677666700204705,
            "unit": "iter/sec",
            "range": "stddev: 0.0033347472627779412",
            "extra": "mean: 461.30426019999504 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1486509.7026188534,
            "unit": "iter/sec",
            "range": "stddev: 1.693038269999112e-7",
            "extra": "mean: 672.7167661524531 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 105.66506144420315,
            "unit": "iter/sec",
            "range": "stddev: 0.00016966645232054667",
            "extra": "mean: 9.463866166661473 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.00937941170514,
            "unit": "iter/sec",
            "range": "stddev: 0.00005168859610615551",
            "extra": "mean: 11.493013819444306 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 208.97955128369165,
            "unit": "iter/sec",
            "range": "stddev: 0.01101206467852697",
            "extra": "mean: 4.785157178572419 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 96.59290237351095,
            "unit": "iter/sec",
            "range": "stddev: 0.00008303895524785562",
            "extra": "mean: 10.352727534090889 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.72449561785869,
            "unit": "iter/sec",
            "range": "stddev: 0.0043660699264802955",
            "extra": "mean: 1.3802705984000112 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8113868896253835,
            "unit": "iter/sec",
            "range": "stddev: 0.017555380259214957",
            "extra": "mean: 1.2324576755999828 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3935.593534305769,
            "unit": "iter/sec",
            "range": "stddev: 0.00004891695337146798",
            "extra": "mean: 254.09128033248436 usec\nrounds: 1566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3574.6875934185323,
            "unit": "iter/sec",
            "range": "stddev: 0.00005097276283291193",
            "extra": "mean: 279.74472562053563 usec\nrounds: 1651"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4412429.588591932,
            "unit": "iter/sec",
            "range": "stddev: 1.411425342755567e-8",
            "extra": "mean: 226.63251161790734 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.236044873896505,
            "unit": "iter/sec",
            "range": "stddev: 0.0010587313770423384",
            "extra": "mean: 75.55127000000977 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 47.33175093429641,
            "unit": "iter/sec",
            "range": "stddev: 0.0014464328781670158",
            "extra": "mean: 21.127466874997936 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 217.00553025632482,
            "unit": "iter/sec",
            "range": "stddev: 0.00044705622570838984",
            "extra": "mean: 4.60817749123172 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.207048136307215,
            "unit": "iter/sec",
            "range": "stddev: 0.0009376526570314665",
            "extra": "mean: 31.049104399999123 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 79.17454090464692,
            "unit": "iter/sec",
            "range": "stddev: 0.0008642988131411845",
            "extra": "mean: 12.630322684211587 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4020.953306174224,
            "unit": "iter/sec",
            "range": "stddev: 0.00003157164048774894",
            "extra": "mean: 248.69724263260844 usec\nrounds: 1459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.934316400635947,
            "unit": "iter/sec",
            "range": "stddev: 0.0010458102693114788",
            "extra": "mean: 45.590661761905054 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.54066927950384,
            "unit": "iter/sec",
            "range": "stddev: 0.00035458360117881306",
            "extra": "mean: 15.989595434785752 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 155.7257111109196,
            "unit": "iter/sec",
            "range": "stddev: 0.000059099863700062335",
            "extra": "mean: 6.421547173335588 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.39693316668132,
            "unit": "iter/sec",
            "range": "stddev: 0.0004179723837285238",
            "extra": "mean: 12.594944919354225 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1490710.3297469383,
            "unit": "iter/sec",
            "range": "stddev: 1.116476022521668e-7",
            "extra": "mean: 670.8211381145786 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3655.6904072882376,
            "unit": "iter/sec",
            "range": "stddev: 0.00006685810237203982",
            "extra": "mean: 273.54614001402604 usec\nrounds: 1457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 110.319459026717,
            "unit": "iter/sec",
            "range": "stddev: 0.0007553161560733625",
            "extra": "mean: 9.064583971154368 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13157910966778996,
            "unit": "iter/sec",
            "range": "stddev: 0.08390321496944657",
            "extra": "mean: 7.5999906256000145 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5208767.505829136,
            "unit": "iter/sec",
            "range": "stddev: 6.096406570508411e-9",
            "extra": "mean: 191.98399599919753 nsec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 571322.406046443,
            "unit": "iter/sec",
            "range": "stddev: 0.000004493688221729436",
            "extra": "mean: 1.750325191899982 usec\nrounds: 18383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.04339247458649,
            "unit": "iter/sec",
            "range": "stddev: 0.0007515569926828127",
            "extra": "mean: 20.81451680434453 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 80.7758643690343,
            "unit": "iter/sec",
            "range": "stddev: 0.000750488545679441",
            "extra": "mean: 12.379935613333448 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 234.0881542118592,
            "unit": "iter/sec",
            "range": "stddev: 0.00026412236297744345",
            "extra": "mean: 4.271894933628123 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 109.45299746011355,
            "unit": "iter/sec",
            "range": "stddev: 0.0007909879199430993",
            "extra": "mean: 9.136341838097366 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.89589035985849,
            "unit": "iter/sec",
            "range": "stddev: 0.0020520852986193722",
            "extra": "mean: 112.41145737501057 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 242.38690218742795,
            "unit": "iter/sec",
            "range": "stddev: 0.0002725746450657046",
            "extra": "mean: 4.1256354653468055 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1726877.011417977,
            "unit": "iter/sec",
            "range": "stddev: 8.481413840798785e-8",
            "extra": "mean: 579.0800348768774 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 130.35365943528504,
            "unit": "iter/sec",
            "range": "stddev: 0.00019384936007920382",
            "extra": "mean: 7.671437873951339 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.02134677879875,
            "unit": "iter/sec",
            "range": "stddev: 0.0007040792792441856",
            "extra": "mean: 26.30101468571898 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 246.48806813754243,
            "unit": "iter/sec",
            "range": "stddev: 0.00022032492418424442",
            "extra": "mean: 4.056991511012986 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 110.66537102180388,
            "unit": "iter/sec",
            "range": "stddev: 0.0007605833302853921",
            "extra": "mean: 9.036250371428066 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6388.956040258122,
            "unit": "iter/sec",
            "range": "stddev: 0.00001585472125245735",
            "extra": "mean: 156.52009400265004 usec\nrounds: 3585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.8117619704256,
            "unit": "iter/sec",
            "range": "stddev: 0.0007709959419736296",
            "extra": "mean: 28.725923176469838 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122915.17146667434,
            "unit": "iter/sec",
            "range": "stddev: 3.956713310632538e-7",
            "extra": "mean: 8.135692185656083 usec\nrounds: 31545"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 248.60751530427746,
            "unit": "iter/sec",
            "range": "stddev: 0.00028326442771851764",
            "extra": "mean: 4.022404547087295 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 103.74381652004749,
            "unit": "iter/sec",
            "range": "stddev: 0.0007705632780722891",
            "extra": "mean: 9.639128707075855 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3523.599494201994,
            "unit": "iter/sec",
            "range": "stddev: 0.00005310910548872653",
            "extra": "mean: 283.800699155928 usec\nrounds: 1539"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 542.5682908036097,
            "unit": "iter/sec",
            "range": "stddev: 0.00003474082081522554",
            "extra": "mean: 1.8430859616194641 msec\nrounds: 469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 261.2488174048045,
            "unit": "iter/sec",
            "range": "stddev: 0.00002390331349616487",
            "extra": "mean: 3.827768523256134 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 235.179873314508,
            "unit": "iter/sec",
            "range": "stddev: 0.00028272311575716343",
            "extra": "mean: 4.2520645406705 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 83.72603961931634,
            "unit": "iter/sec",
            "range": "stddev: 0.027728126392938278",
            "extra": "mean: 11.94371553398175 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4070.13221456534,
            "unit": "iter/sec",
            "range": "stddev: 0.00005881357234504372",
            "extra": "mean: 245.69226434989227 usec\nrounds: 2561"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.846360114919745,
            "unit": "iter/sec",
            "range": "stddev: 0.00024498149489093804",
            "extra": "mean: 206.34042380000892 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.3766619886412,
            "unit": "iter/sec",
            "range": "stddev: 0.00009444881133352639",
            "extra": "mean: 7.073303230771881 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10436.281924114968,
            "unit": "iter/sec",
            "range": "stddev: 0.000001933661276231022",
            "extra": "mean: 95.81956555708928 usec\nrounds: 4477"
          }
        ]
      }
    ]
  }
}
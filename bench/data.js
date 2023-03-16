window.BENCHMARK_DATA = {
  "lastUpdate": 1678965293671,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "e322f1d5c36d725c9e96b764f86242482e4f577a",
          "message": "feat(mssql): implement ops.StandardDev, ops.Variance",
          "timestamp": "2023-03-16T07:08:18-04:00",
          "tree_id": "ac8845d67c5e28011c2f3b8d0c9bf91d3284fa4f",
          "url": "https://github.com/ibis-project/ibis/commit/e322f1d5c36d725c9e96b764f86242482e4f577a"
        },
        "date": 1678965195789,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 83.98530551748723,
            "unit": "iter/sec",
            "range": "stddev: 0.010808310669146863",
            "extra": "mean: 11.906844820511871 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 54525.78220850706,
            "unit": "iter/sec",
            "range": "stddev: 0.000014830949602466071",
            "extra": "mean: 18.339947809936803 usec\nrounds: 10730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 37.23918189042827,
            "unit": "iter/sec",
            "range": "stddev: 0.0020389124025154636",
            "extra": "mean: 26.85343633333239 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.63737802869956,
            "unit": "iter/sec",
            "range": "stddev: 0.0025992913799529472",
            "extra": "mean: 34.919397962963956 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 209.08646599033517,
            "unit": "iter/sec",
            "range": "stddev: 0.0008174801784682152",
            "extra": "mean: 4.782710326388242 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 73.90231264825066,
            "unit": "iter/sec",
            "range": "stddev: 0.001388760529193528",
            "extra": "mean: 13.531376274510551 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10231.574751775515,
            "unit": "iter/sec",
            "range": "stddev: 0.000020674006169333523",
            "extra": "mean: 97.73666559260265 usec\nrounds: 4345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5198956386200486,
            "unit": "iter/sec",
            "range": "stddev: 0.058178537637508784",
            "extra": "mean: 1.9234629523999955 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 122.91462602780273,
            "unit": "iter/sec",
            "range": "stddev: 0.0007659997192104043",
            "extra": "mean: 8.135728288135576 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1439211.9141393055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014325121325685088",
            "extra": "mean: 694.8247093952331 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 83.14069390024936,
            "unit": "iter/sec",
            "range": "stddev: 0.0011516491595451187",
            "extra": "mean: 12.027804352941548 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 234.24467219842427,
            "unit": "iter/sec",
            "range": "stddev: 0.00072837958946562",
            "extra": "mean: 4.2690405319140785 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.99134454024883,
            "unit": "iter/sec",
            "range": "stddev: 0.0011279881865692704",
            "extra": "mean: 11.364754172412741 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.67598056619427,
            "unit": "iter/sec",
            "range": "stddev: 0.0007648567647136316",
            "extra": "mean: 12.243501615380673 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 235.55692989933894,
            "unit": "iter/sec",
            "range": "stddev: 0.0005330552699243508",
            "extra": "mean: 4.245258250000679 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.538180621659981,
            "unit": "iter/sec",
            "range": "stddev: 0.006253098226381456",
            "extra": "mean: 220.35262219999936 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 954.1689546321472,
            "unit": "iter/sec",
            "range": "stddev: 0.00013664635917285558",
            "extra": "mean: 1.0480324214546695 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9587291498105377,
            "unit": "iter/sec",
            "range": "stddev: 0.02084452406502175",
            "extra": "mean: 510.53510899999986 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 92.85039510366192,
            "unit": "iter/sec",
            "range": "stddev: 0.0015645253215848",
            "extra": "mean: 10.77001340579714 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 145.62467575828327,
            "unit": "iter/sec",
            "range": "stddev: 0.0011502986042036072",
            "extra": "mean: 6.866968079364936 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 58.23793227200333,
            "unit": "iter/sec",
            "range": "stddev: 0.002293848070153583",
            "extra": "mean: 17.170939299998622 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 129029.56593980586,
            "unit": "iter/sec",
            "range": "stddev: 0.00000538168407878613",
            "extra": "mean: 7.750161699114095 usec\nrounds: 40161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1623306.8557726666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012582221746777624",
            "extra": "mean: 616.0264748737336 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 77.52943750604132,
            "unit": "iter/sec",
            "range": "stddev: 0.002234850862768581",
            "extra": "mean: 12.89832652174314 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 237.43250584204813,
            "unit": "iter/sec",
            "range": "stddev: 0.0007721882094799733",
            "extra": "mean: 4.211723228264497 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.40565226390205,
            "unit": "iter/sec",
            "range": "stddev: 0.003430352029892879",
            "extra": "mean: 54.3311362000054 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1299.4101268015188,
            "unit": "iter/sec",
            "range": "stddev: 0.00009571096573457136",
            "extra": "mean: 769.5799650734499 usec\nrounds: 1088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 407692.2511813565,
            "unit": "iter/sec",
            "range": "stddev: 0.000001459372116322326",
            "extra": "mean: 2.452830528670419 usec\nrounds: 1664"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.17127677361966,
            "unit": "iter/sec",
            "range": "stddev: 0.005013015755920225",
            "extra": "mean: 89.51528283333232 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3603.8128521206663,
            "unit": "iter/sec",
            "range": "stddev: 0.00007824874512423396",
            "extra": "mean: 277.4838874919793 usec\nrounds: 1511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 71.1282397258837,
            "unit": "iter/sec",
            "range": "stddev: 0.001719430655049521",
            "extra": "mean: 14.059113565214494 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 506.1382620365293,
            "unit": "iter/sec",
            "range": "stddev: 0.00015960552951602939",
            "extra": "mean: 1.975744722353805 msec\nrounds: 425"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9691.205153136221,
            "unit": "iter/sec",
            "range": "stddev: 0.000024438829485940217",
            "extra": "mean: 103.18634103792394 usec\nrounds: 1947"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 21.958879505792996,
            "unit": "iter/sec",
            "range": "stddev: 0.041513770698216004",
            "extra": "mean: 45.539664249999134 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 566.335344309275,
            "unit": "iter/sec",
            "range": "stddev: 0.00010429285671132356",
            "extra": "mean: 1.765738285714164 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10244443107119813,
            "unit": "iter/sec",
            "range": "stddev: 0.08130055194927165",
            "extra": "mean: 9.761389560600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.190094769580156,
            "unit": "iter/sec",
            "range": "stddev: 0.0014179323964132941",
            "extra": "mean: 33.123446866672644 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1471105.4706268471,
            "unit": "iter/sec",
            "range": "stddev: 0.000004378366368799011",
            "extra": "mean: 679.7609144733136 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1298804.91463162,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024473135376309376",
            "extra": "mean: 769.9385710159789 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 88.23443182656284,
            "unit": "iter/sec",
            "range": "stddev: 0.0009803862435427172",
            "extra": "mean: 11.33344409091499 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 119.29350529727726,
            "unit": "iter/sec",
            "range": "stddev: 0.0005227633645411263",
            "extra": "mean: 8.382686027273806 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 87.88496198447064,
            "unit": "iter/sec",
            "range": "stddev: 0.0004665760542343699",
            "extra": "mean: 11.378510924049795 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 63.40880779930869,
            "unit": "iter/sec",
            "range": "stddev: 0.001823054327780677",
            "extra": "mean: 15.770679732144442 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.578109719009277,
            "unit": "iter/sec",
            "range": "stddev: 0.0013787218498251032",
            "extra": "mean: 36.260643321420666 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 207.80112635072032,
            "unit": "iter/sec",
            "range": "stddev: 0.0005459792953768454",
            "extra": "mean: 4.812293453656411 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 199.96800600760932,
            "unit": "iter/sec",
            "range": "stddev: 0.0008678327357600666",
            "extra": "mean: 5.000799977782183 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.6236333721053,
            "unit": "iter/sec",
            "range": "stddev: 0.0018561471357222165",
            "extra": "mean: 19.370972840907154 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.195136336355304,
            "unit": "iter/sec",
            "range": "stddev: 0.0014946746062803327",
            "extra": "mean: 20.327212697670646 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 193.41107459236562,
            "unit": "iter/sec",
            "range": "stddev: 0.00041842838088478523",
            "extra": "mean: 5.170334750001293 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3652.9622514145367,
            "unit": "iter/sec",
            "range": "stddev: 0.00013984773805274448",
            "extra": "mean: 273.75043353179194 usec\nrounds: 1843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.91529387095295,
            "unit": "iter/sec",
            "range": "stddev: 0.0012316199298630793",
            "extra": "mean: 10.212909142855107 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3852.2583318384636,
            "unit": "iter/sec",
            "range": "stddev: 0.00010841674077989092",
            "extra": "mean: 259.58799069499497 usec\nrounds: 2257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 89.64673706383343,
            "unit": "iter/sec",
            "range": "stddev: 0.0019039686091427595",
            "extra": "mean: 11.15489568000612 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4332721.267395753,
            "unit": "iter/sec",
            "range": "stddev: 8.3270573903199e-7",
            "extra": "mean: 230.8018306016038 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 219.4047459759665,
            "unit": "iter/sec",
            "range": "stddev: 0.0006238430221650223",
            "extra": "mean: 4.557786549018131 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 138.51700001985034,
            "unit": "iter/sec",
            "range": "stddev: 0.0036001150163845483",
            "extra": "mean: 7.219330478256776 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5559123005384938,
            "unit": "iter/sec",
            "range": "stddev: 0.015883084196098556",
            "extra": "mean: 1.7988448880000192 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4146.0893017752105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000833003392679869",
            "extra": "mean: 241.1911387368899 usec\nrounds: 2011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 87.44971830919049,
            "unit": "iter/sec",
            "range": "stddev: 0.0014023032166114204",
            "extra": "mean: 11.43514260920044 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8726.441327139937,
            "unit": "iter/sec",
            "range": "stddev: 0.00003510684090711472",
            "extra": "mean: 114.59425010856594 usec\nrounds: 4598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4480023.067168496,
            "unit": "iter/sec",
            "range": "stddev: 1.8307149405063698e-7",
            "extra": "mean: 223.21313640745754 nsec\nrounds: 39216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3599.956960974659,
            "unit": "iter/sec",
            "range": "stddev: 0.00008764217986625295",
            "extra": "mean: 277.78109872992985 usec\nrounds: 1732"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 628436.1795872417,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028943440104796317",
            "extra": "mean: 1.5912514786414782 usec\nrounds: 20121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5103031.738578357,
            "unit": "iter/sec",
            "range": "stddev: 1.5155554211244962e-7",
            "extra": "mean: 195.9619401227812 nsec\nrounds: 46729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3708.476740234016,
            "unit": "iter/sec",
            "range": "stddev: 0.00008110530219462051",
            "extra": "mean: 269.652493475501 usec\nrounds: 1686"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3548.523206585502,
            "unit": "iter/sec",
            "range": "stddev: 0.00015372160216632654",
            "extra": "mean: 281.8073721891284 usec\nrounds: 2668"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9098340.72330725,
            "unit": "iter/sec",
            "range": "stddev: 6.50136786115105e-8",
            "extra": "mean: 109.91015069797646 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 84.35868293189056,
            "unit": "iter/sec",
            "range": "stddev: 0.0006998900254614453",
            "extra": "mean: 11.854144294872162 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 390.69074126201804,
            "unit": "iter/sec",
            "range": "stddev: 0.0005010759139806154",
            "extra": "mean: 2.5595692305627145 msec\nrounds: 373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3905.147006815128,
            "unit": "iter/sec",
            "range": "stddev: 0.00010334294207873229",
            "extra": "mean: 256.0723061781885 usec\nrounds: 1829"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 220.90828441904887,
            "unit": "iter/sec",
            "range": "stddev: 0.00044694424038399836",
            "extra": "mean: 4.52676549740916 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 85.3407286634206,
            "unit": "iter/sec",
            "range": "stddev: 0.0012288384434242573",
            "extra": "mean: 11.717734493971196 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 114.95130313164829,
            "unit": "iter/sec",
            "range": "stddev: 0.0005865307303601354",
            "extra": "mean: 8.699335916659834 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 72.07541660552509,
            "unit": "iter/sec",
            "range": "stddev: 0.0016534966397521447",
            "extra": "mean: 13.874356154929847 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 169.8091629969382,
            "unit": "iter/sec",
            "range": "stddev: 0.0048548956450581455",
            "extra": "mean: 5.888963718748386 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 216.18011254378212,
            "unit": "iter/sec",
            "range": "stddev: 0.0005233968773286057",
            "extra": "mean: 4.625772409094633 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 75.00788184797594,
            "unit": "iter/sec",
            "range": "stddev: 0.0015659117453921644",
            "extra": "mean: 13.331932263155684 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.459259733143208,
            "unit": "iter/sec",
            "range": "stddev: 0.003412475232924454",
            "extra": "mean: 134.06156050000106 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 250.6482643328626,
            "unit": "iter/sec",
            "range": "stddev: 0.0002579747010393701",
            "extra": "mean: 3.9896545968975596 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 69.01574307131911,
            "unit": "iter/sec",
            "range": "stddev: 0.0013128921862109314",
            "extra": "mean: 14.48944770422345 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6085.594436197885,
            "unit": "iter/sec",
            "range": "stddev: 0.00003371813979339649",
            "extra": "mean: 164.3224849247057 usec\nrounds: 3151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5558935390743773,
            "unit": "iter/sec",
            "range": "stddev: 0.03829095523959752",
            "extra": "mean: 1.7989055991999976 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 88.67733882180254,
            "unit": "iter/sec",
            "range": "stddev: 0.0011462617682819916",
            "extra": "mean: 11.27683817857349 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 95.95967288347263,
            "unit": "iter/sec",
            "range": "stddev: 0.0012018944711954017",
            "extra": "mean: 10.421044277780487 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1627960086775821,
            "unit": "iter/sec",
            "range": "stddev: 0.010555984545850603",
            "extra": "mean: 859.9960720000013 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 59.4929696027497,
            "unit": "iter/sec",
            "range": "stddev: 0.03050579085075864",
            "extra": "mean: 16.808708771427355 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5676435388432421,
            "unit": "iter/sec",
            "range": "stddev: 0.010950794117254043",
            "extra": "mean: 1.7616689551999911 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3713.1864259841213,
            "unit": "iter/sec",
            "range": "stddev: 0.00012118120171209968",
            "extra": "mean: 269.3104749608595 usec\nrounds: 1937"
          }
        ]
      }
    ]
  }
}
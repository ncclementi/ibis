window.BENCHMARK_DATA = {
  "lastUpdate": 1675815951488,
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
          "id": "0ef446eda94ca889c2ab58c959d0712a9c1bf027",
          "message": "chore(flake/nixpkgs): `b2d76c24` -> `f30a2734`",
          "timestamp": "2023-02-08T00:21:06Z",
          "tree_id": "3b75d09fd33a09e00ebb767fcd2f8332aeccebb4",
          "url": "https://github.com/ibis-project/ibis/commit/0ef446eda94ca889c2ab58c959d0712a9c1bf027"
        },
        "date": 1675815878466,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 225.17071547562415,
            "unit": "iter/sec",
            "range": "stddev: 0.004574984405248584",
            "extra": "mean: 4.441074843536902 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4074.9413094845136,
            "unit": "iter/sec",
            "range": "stddev: 0.000033912486397815115",
            "extra": "mean: 245.4023074326196 usec\nrounds: 592"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10837.94710973475,
            "unit": "iter/sec",
            "range": "stddev: 0.000002224935421600049",
            "extra": "mean: 92.26839639231956 usec\nrounds: 4546"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.04701485138751,
            "unit": "iter/sec",
            "range": "stddev: 0.0005272617679564454",
            "extra": "mean: 38.39211540000065 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1497492.3605109598,
            "unit": "iter/sec",
            "range": "stddev: 8.517691164053529e-8",
            "extra": "mean: 667.7830394131626 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.6868250432407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000622135998005306",
            "extra": "mean: 10.0314158823519 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5616.062011308958,
            "unit": "iter/sec",
            "range": "stddev: 0.000050178136385982626",
            "extra": "mean: 178.06071193414866 usec\nrounds: 2430"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 508.8089604687609,
            "unit": "iter/sec",
            "range": "stddev: 0.000036405882943912877",
            "extra": "mean: 1.9653741928575894 msec\nrounds: 420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 382036.93519572396,
            "unit": "iter/sec",
            "range": "stddev: 3.1891561848450267e-7",
            "extra": "mean: 2.617547959041403 usec\nrounds: 1960"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 155.52535068920935,
            "unit": "iter/sec",
            "range": "stddev: 0.0005701908224739967",
            "extra": "mean: 6.429819933332462 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 157.7691631611726,
            "unit": "iter/sec",
            "range": "stddev: 0.0006091780693689629",
            "extra": "mean: 6.3383742422366005 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4324540.008584468,
            "unit": "iter/sec",
            "range": "stddev: 1.0545574972652951e-8",
            "extra": "mean: 231.23846652255634 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10724.08866546609,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014577506592602906",
            "extra": "mean: 93.24801679607691 usec\nrounds: 5537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.69988681656484,
            "unit": "iter/sec",
            "range": "stddev: 0.00004954621322481525",
            "extra": "mean: 8.42460786458347 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.78712845964498,
            "unit": "iter/sec",
            "range": "stddev: 0.00007922670539125436",
            "extra": "mean: 15.200541859999532 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 136.69404594665318,
            "unit": "iter/sec",
            "range": "stddev: 0.010528275395523957",
            "extra": "mean: 7.3156075897428945 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.03898049179469,
            "unit": "iter/sec",
            "range": "stddev: 0.0007883787454922617",
            "extra": "mean: 23.787446515149988 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9457.325802167612,
            "unit": "iter/sec",
            "range": "stddev: 0.00001590377339975399",
            "extra": "mean: 105.73813580270236 usec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.05289786564991,
            "unit": "iter/sec",
            "range": "stddev: 0.0006348897094727802",
            "extra": "mean: 110.46186699999951 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 610641.3361518716,
            "unit": "iter/sec",
            "range": "stddev: 1.8378776618805598e-7",
            "extra": "mean: 1.6376225138995366 usec\nrounds: 22173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 144.4782205293145,
            "unit": "iter/sec",
            "range": "stddev: 0.0006266525141735103",
            "extra": "mean: 6.921458447760303 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.11454456611297,
            "unit": "iter/sec",
            "range": "stddev: 0.00010288365817163282",
            "extra": "mean: 9.889774060606658 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.54576869434837,
            "unit": "iter/sec",
            "range": "stddev: 0.0006927320062945564",
            "extra": "mean: 11.293594428570671 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.46231883928566,
            "unit": "iter/sec",
            "range": "stddev: 0.0006827782619332848",
            "extra": "mean: 10.699499139536256 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5422.845489686812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000841130144552572",
            "extra": "mean: 184.40503272715475 usec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5808283246576784,
            "unit": "iter/sec",
            "range": "stddev: 0.0027030928991047696",
            "extra": "mean: 632.5797586000022 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 273.12114806463904,
            "unit": "iter/sec",
            "range": "stddev: 0.00004541341811392297",
            "extra": "mean: 3.6613788682644666 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 248.89394167009596,
            "unit": "iter/sec",
            "range": "stddev: 0.00018122634457388311",
            "extra": "mean: 4.01777557657663 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.57935541274979,
            "unit": "iter/sec",
            "range": "stddev: 0.00013209147228230423",
            "extra": "mean: 11.163286400000935 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 138.13335913374314,
            "unit": "iter/sec",
            "range": "stddev: 0.00009424663756431251",
            "extra": "mean: 7.239380887217709 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19071.473807597707,
            "unit": "iter/sec",
            "range": "stddev: 0.000013913243005918858",
            "extra": "mean: 52.434332558064774 usec\nrounds: 8170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.342129004728186,
            "unit": "iter/sec",
            "range": "stddev: 0.0002157864114671738",
            "extra": "mean: 24.188401131582577 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4699772.149869336,
            "unit": "iter/sec",
            "range": "stddev: 4.729189314126316e-9",
            "extra": "mean: 212.77627257476271 nsec\nrounds: 47620"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10803217.661986452,
            "unit": "iter/sec",
            "range": "stddev: 3.6925389199253047e-9",
            "extra": "mean: 92.56501454370262 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1335743636776317,
            "unit": "iter/sec",
            "range": "stddev: 0.11061420546999465",
            "extra": "mean: 7.48646650799999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.68344827840988,
            "unit": "iter/sec",
            "range": "stddev: 0.00005228296186577485",
            "extra": "mean: 11.2760613103432 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58078.56969344549,
            "unit": "iter/sec",
            "range": "stddev: 8.56463519720805e-7",
            "extra": "mean: 17.218054874255213 usec\nrounds: 14105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7472872946235881,
            "unit": "iter/sec",
            "range": "stddev: 0.0023284411327604763",
            "extra": "mean: 1.3381734269999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 245.76449175849504,
            "unit": "iter/sec",
            "range": "stddev: 0.00019386675975266205",
            "extra": "mean: 4.068936048673249 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 406.62866858071624,
            "unit": "iter/sec",
            "range": "stddev: 0.00002841040773187701",
            "extra": "mean: 2.459246180281307 msec\nrounds: 355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 82.47850341914943,
            "unit": "iter/sec",
            "range": "stddev: 0.01224023826637287",
            "extra": "mean: 12.124371303369518 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5185.449272807683,
            "unit": "iter/sec",
            "range": "stddev: 0.0000588167686192291",
            "extra": "mean: 192.8473209146921 usec\nrounds: 2013"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.86539325183192,
            "unit": "iter/sec",
            "range": "stddev: 0.0018515214593655665",
            "extra": "mean: 205.5332319999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8585171473047203,
            "unit": "iter/sec",
            "range": "stddev: 0.003563795118553023",
            "extra": "mean: 1.1647990994000055 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.37568991420531,
            "unit": "iter/sec",
            "range": "stddev: 0.0006691160122186362",
            "extra": "mean: 11.064922447057517 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5472800.55280121,
            "unit": "iter/sec",
            "range": "stddev: 5.589869210418399e-9",
            "extra": "mean: 182.72180583820568 nsec\nrounds: 54645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 268.86078991753897,
            "unit": "iter/sec",
            "range": "stddev: 0.00021191136209961777",
            "extra": "mean: 3.71939694258395 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 123573.96089681383,
            "unit": "iter/sec",
            "range": "stddev: 3.1688164880382036e-7",
            "extra": "mean: 8.092319714790202 usec\nrounds: 34365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1686432.4627592163,
            "unit": "iter/sec",
            "range": "stddev: 1.6923581241594921e-7",
            "extra": "mean: 592.9677126612435 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4760.508038279384,
            "unit": "iter/sec",
            "range": "stddev: 0.00006502697341183944",
            "extra": "mean: 210.06161358388027 usec\nrounds: 1708"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.015243106174,
            "unit": "iter/sec",
            "range": "stddev: 0.00003691920979820367",
            "extra": "mean: 5.81343828571497 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1444.770765722644,
            "unit": "iter/sec",
            "range": "stddev: 0.00002637639910512624",
            "extra": "mean: 692.1513251272224 usec\nrounds: 1178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.256363800402056,
            "unit": "iter/sec",
            "range": "stddev: 0.002232412636322994",
            "extra": "mean: 443.1909428000097 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.428819989276334,
            "unit": "iter/sec",
            "range": "stddev: 0.0005702273207567565",
            "extra": "mean: 26.717379823529253 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.40503810444653,
            "unit": "iter/sec",
            "range": "stddev: 0.0005178472657703992",
            "extra": "mean: 18.04890013999909 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 216.8603834690601,
            "unit": "iter/sec",
            "range": "stddev: 0.00044562241800041093",
            "extra": "mean: 4.611261789743501 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4880.35869297939,
            "unit": "iter/sec",
            "range": "stddev: 0.00005761257824961191",
            "extra": "mean: 204.90297187346982 usec\nrounds: 3022"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.33087779136017,
            "unit": "iter/sec",
            "range": "stddev: 0.0012200054672683368",
            "extra": "mean: 29.12829686666688 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4459.051269670307,
            "unit": "iter/sec",
            "range": "stddev: 0.00013200081243397492",
            "extra": "mean: 224.26295180811812 usec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5610.3874807013935,
            "unit": "iter/sec",
            "range": "stddev: 0.00004827384153243151",
            "extra": "mean: 178.24080840045346 usec\nrounds: 3095"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.1000913669865,
            "unit": "iter/sec",
            "range": "stddev: 0.0005578860655713548",
            "extra": "mean: 11.350726026315192 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 956.5800086056441,
            "unit": "iter/sec",
            "range": "stddev: 0.00010650706371129338",
            "extra": "mean: 1.0453908622422987 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.00912952120095,
            "unit": "iter/sec",
            "range": "stddev: 0.00012813676175971956",
            "extra": "mean: 6.710998199997675 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 233.98029039612882,
            "unit": "iter/sec",
            "range": "stddev: 0.00020981533639601477",
            "extra": "mean: 4.273864257143194 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1521377.834074855,
            "unit": "iter/sec",
            "range": "stddev: 1.4211316937862188e-7",
            "extra": "mean: 657.2989152350158 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 154.60097510998833,
            "unit": "iter/sec",
            "range": "stddev: 0.0006897804097017041",
            "extra": "mean: 6.468264506666704 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.00072835854264,
            "unit": "iter/sec",
            "range": "stddev: 0.0006674759026816122",
            "extra": "mean: 12.345568000001029 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.90506808483358,
            "unit": "iter/sec",
            "range": "stddev: 0.0007403049393844067",
            "extra": "mean: 16.41899486274472 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 153.7017103471262,
            "unit": "iter/sec",
            "range": "stddev: 0.0006747751500395592",
            "extra": "mean: 6.506108472973783 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 239.6627107454344,
            "unit": "iter/sec",
            "range": "stddev: 0.00015183539967568994",
            "extra": "mean: 4.172530623932493 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.333077668394946,
            "unit": "iter/sec",
            "range": "stddev: 0.0001300860562752865",
            "extra": "mean: 75.00143814285464 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.70936478975196,
            "unit": "iter/sec",
            "range": "stddev: 0.00008757169165590607",
            "extra": "mean: 7.056696651513868 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 248.28362268070876,
            "unit": "iter/sec",
            "range": "stddev: 0.00022039883404292052",
            "extra": "mean: 4.027651881356645 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 602.7608409470708,
            "unit": "iter/sec",
            "range": "stddev: 0.000059200805280152574",
            "extra": "mean: 1.659032790565456 msec\nrounds: 530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.95275167100702,
            "unit": "iter/sec",
            "range": "stddev: 0.00010415730200999545",
            "extra": "mean: 14.935905919353518 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8522630308922147,
            "unit": "iter/sec",
            "range": "stddev: 0.0020366775149876382",
            "extra": "mean: 1.1733466825999983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 116.97517006669915,
            "unit": "iter/sec",
            "range": "stddev: 0.015262045458872726",
            "extra": "mean: 8.548822792305417 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 244.02120973448393,
            "unit": "iter/sec",
            "range": "stddev: 0.0002574108577879105",
            "extra": "mean: 4.098004436122935 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 260.9091225407786,
            "unit": "iter/sec",
            "range": "stddev: 0.00001791159524983069",
            "extra": "mean: 3.832752148571217 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5804850970413576,
            "unit": "iter/sec",
            "range": "stddev: 0.0024929815210910727",
            "extra": "mean: 1.722697111600013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.58625162946542,
            "unit": "iter/sec",
            "range": "stddev: 0.0006699498941451476",
            "extra": "mean: 10.68533019101229 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1487171.744191054,
            "unit": "iter/sec",
            "range": "stddev: 1.7765310093106354e-7",
            "extra": "mean: 672.41729403886 nsec\nrounds: 185186"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1684516389921,
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
          "id": "d41341b128237151ea06cab1226025f6cd3b2817",
          "message": "ci: error on no benchmark files found",
          "timestamp": "2023-05-19T11:10:46-04:00",
          "tree_id": "50571bbb4b127092fe560f75508fd993ca3ba9ae",
          "url": "https://github.com/ibis-project/ibis/commit/d41341b128237151ea06cab1226025f6cd3b2817"
        },
        "date": 1684509324339,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.97257555360083,
            "unit": "iter/sec",
            "range": "stddev: 0.0005120424741020257",
            "extra": "mean: 15.391109117646472 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.45733280238522,
            "unit": "iter/sec",
            "range": "stddev: 0.00013538661293325115",
            "extra": "mean: 6.3509268333348246 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.17456497651563,
            "unit": "iter/sec",
            "range": "stddev: 0.00009188780314613831",
            "extra": "mean: 8.9146768717967 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 102.07511284336725,
            "unit": "iter/sec",
            "range": "stddev: 0.0007014371614419302",
            "extra": "mean: 9.796707269229135 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.84810389120582,
            "unit": "iter/sec",
            "range": "stddev: 0.00010673671237694991",
            "extra": "mean: 5.686726088435293 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.3959970991195,
            "unit": "iter/sec",
            "range": "stddev: 0.000015541901611236034",
            "extra": "mean: 1.337978800905165 msec\nrounds: 663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 86.54048525443541,
            "unit": "iter/sec",
            "range": "stddev: 0.0005847699810755458",
            "extra": "mean: 11.555285333331865 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.9201367851602,
            "unit": "iter/sec",
            "range": "stddev: 0.00072305865594224",
            "extra": "mean: 9.622774093026406 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.5814821204385,
            "unit": "iter/sec",
            "range": "stddev: 0.0003073862519204286",
            "extra": "mean: 3.551369900000307 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.32605869014763,
            "unit": "iter/sec",
            "range": "stddev: 0.0145143642203472",
            "extra": "mean: 11.858730450980232 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.46381905366914,
            "unit": "iter/sec",
            "range": "stddev: 0.0037323986246192925",
            "extra": "mean: 6.155216624999163 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1181.908456490928,
            "unit": "iter/sec",
            "range": "stddev: 0.000014915700063108271",
            "extra": "mean: 846.0892165616515 usec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.37227129751375,
            "unit": "iter/sec",
            "range": "stddev: 0.0008791428211225584",
            "extra": "mean: 10.485227901100316 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.65047624767743,
            "unit": "iter/sec",
            "range": "stddev: 0.000722463504865288",
            "extra": "mean: 9.465172666668252 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.57199901102523,
            "unit": "iter/sec",
            "range": "stddev: 0.0008400688658491283",
            "extra": "mean: 27.343323499996092 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.83080917826237,
            "unit": "iter/sec",
            "range": "stddev: 0.0003047276004787126",
            "extra": "mean: 3.6123146949155513 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146504.86998987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011890165307917823",
            "extra": "mean: 6.825711664527906 usec\nrounds: 38313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1730307.8737018807,
            "unit": "iter/sec",
            "range": "stddev: 3.112516948438699e-7",
            "extra": "mean: 577.9318323626219 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6370491901797848,
            "unit": "iter/sec",
            "range": "stddev: 0.0028322107142675352",
            "extra": "mean: 610.8551936000026 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12479.857193031574,
            "unit": "iter/sec",
            "range": "stddev: 0.000011635340019603806",
            "extra": "mean: 80.12912203501607 usec\nrounds: 4384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 176.10174106685895,
            "unit": "iter/sec",
            "range": "stddev: 0.01497406716084056",
            "extra": "mean: 5.6785355666661985 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.52010308713297,
            "unit": "iter/sec",
            "range": "stddev: 0.0008190721936631617",
            "extra": "mean: 10.360535971426138 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4408.315169106256,
            "unit": "iter/sec",
            "range": "stddev: 0.00006640535790101035",
            "extra": "mean: 226.84403488390794 usec\nrounds: 2064"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 263.2238190635084,
            "unit": "iter/sec",
            "range": "stddev: 0.000386462645255338",
            "extra": "mean: 3.7990482911378494 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13935.254291728237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013443461122350004",
            "extra": "mean: 71.7604414720717 usec\nrounds: 7364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 190.0082692913746,
            "unit": "iter/sec",
            "range": "stddev: 0.011252220975141131",
            "extra": "mean: 5.2629288384629 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.620136843994885,
            "unit": "iter/sec",
            "range": "stddev: 0.0011902157934881065",
            "extra": "mean: 25.239690714283014 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 186.5852278668221,
            "unit": "iter/sec",
            "range": "stddev: 0.00016066685672805564",
            "extra": "mean: 5.359481087719144 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 98.80559800166628,
            "unit": "iter/sec",
            "range": "stddev: 0.0009569269029304659",
            "extra": "mean: 10.12088404123758 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.03808171476639,
            "unit": "iter/sec",
            "range": "stddev: 0.013925229376868582",
            "extra": "mean: 11.35872091397776 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.48434464287358,
            "unit": "iter/sec",
            "range": "stddev: 0.00003076227469889557",
            "extra": "mean: 9.217919906249724 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10031.013484703966,
            "unit": "iter/sec",
            "range": "stddev: 0.000002030790686828605",
            "extra": "mean: 99.69082401542718 usec\nrounds: 4722"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1036918.8400548846,
            "unit": "iter/sec",
            "range": "stddev: 1.2873552481413055e-7",
            "extra": "mean: 964.3956319156758 nsec\nrounds: 82645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.05429847852577,
            "unit": "iter/sec",
            "range": "stddev: 0.0007730621634185564",
            "extra": "mean: 10.303510670588794 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.51170785499359,
            "unit": "iter/sec",
            "range": "stddev: 0.00030981479032696923",
            "extra": "mean: 10.469920625000295 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 47.20014116121676,
            "unit": "iter/sec",
            "range": "stddev: 0.00044228024844426936",
            "extra": "mean: 21.18637731578812 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.54970363543065,
            "unit": "iter/sec",
            "range": "stddev: 0.0008527514035330668",
            "extra": "mean: 10.465757212764306 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.561458736422157,
            "unit": "iter/sec",
            "range": "stddev: 0.000258338046647671",
            "extra": "mean: 116.80252522222645 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5992129809744253,
            "unit": "iter/sec",
            "range": "stddev: 0.0009245311398568445",
            "extra": "mean: 384.7318428000108 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.968040791695,
            "unit": "iter/sec",
            "range": "stddev: 0.0003159776336098355",
            "extra": "mean: 3.6105248719006195 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7900281444239968,
            "unit": "iter/sec",
            "range": "stddev: 0.0009967334455615834",
            "extra": "mean: 1.2657776903999944 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.61756235270056,
            "unit": "iter/sec",
            "range": "stddev: 0.0004371214197579621",
            "extra": "mean: 3.9429446081077035 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.854257662957735,
            "unit": "iter/sec",
            "range": "stddev: 0.0002317848771150162",
            "extra": "mean: 53.03841805263238 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.5611926128947,
            "unit": "iter/sec",
            "range": "stddev: 0.00016854783815190312",
            "extra": "mean: 9.656126728261405 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.70485490187156,
            "unit": "iter/sec",
            "range": "stddev: 0.00040782741947836755",
            "extra": "mean: 17.95175666037687 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2139.5515771610967,
            "unit": "iter/sec",
            "range": "stddev: 0.00008501448809304722",
            "extra": "mean: 467.3876576169611 usec\nrounds: 1326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1759.3650238641922,
            "unit": "iter/sec",
            "range": "stddev: 0.000007000896712943647",
            "extra": "mean: 568.3868818783518 usec\nrounds: 1363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6283453.2219220605,
            "unit": "iter/sec",
            "range": "stddev: 4.216046212539137e-9",
            "extra": "mean: 159.1481570215398 nsec\nrounds: 44842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.68506582258966,
            "unit": "iter/sec",
            "range": "stddev: 0.0008770746447430187",
            "extra": "mean: 9.931959539680216 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2719908.0807138286,
            "unit": "iter/sec",
            "range": "stddev: 1.4818452252752761e-8",
            "extra": "mean: 367.6594834547466 nsec\nrounds: 108684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 88.45471517030482,
            "unit": "iter/sec",
            "range": "stddev: 0.017958178378516272",
            "extra": "mean: 11.305219829996247 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.83046720868624,
            "unit": "iter/sec",
            "range": "stddev: 0.0008869195645047192",
            "extra": "mean: 10.016982069307495 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7179854.289018681,
            "unit": "iter/sec",
            "range": "stddev: 4.6537341360368855e-9",
            "extra": "mean: 139.27859253768696 nsec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2196.0261150662254,
            "unit": "iter/sec",
            "range": "stddev: 0.00007788116531429812",
            "extra": "mean: 455.36799090836087 usec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.067685571155174,
            "unit": "iter/sec",
            "range": "stddev: 0.0007107079924640258",
            "extra": "mean: 39.89199550000251 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 431.23183467633453,
            "unit": "iter/sec",
            "range": "stddev: 0.000026770043132456224",
            "extra": "mean: 2.318938259162987 msec\nrounds: 382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16954334807798538,
            "unit": "iter/sec",
            "range": "stddev: 0.08321261614655355",
            "extra": "mean: 5.898196604800011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.84196334608175,
            "unit": "iter/sec",
            "range": "stddev: 0.0002718016049894615",
            "extra": "mean: 18.924353613635184 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 106.86891610070316,
            "unit": "iter/sec",
            "range": "stddev: 0.00007791907829648588",
            "extra": "mean: 9.357257811595044 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2164.259710230066,
            "unit": "iter/sec",
            "range": "stddev: 0.00008280590478791633",
            "extra": "mean: 462.05175620706694 usec\nrounds: 1329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 285.3056442955174,
            "unit": "iter/sec",
            "range": "stddev: 0.00026700099473935907",
            "extra": "mean: 3.5050130272368802 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.696108090175,
            "unit": "iter/sec",
            "range": "stddev: 0.00003844913043072873",
            "extra": "mean: 1.4583719933677841 msec\nrounds: 603"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2170.5113932904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000884779807970517",
            "extra": "mean: 460.7209172415556 usec\nrounds: 1305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9363154307152612,
            "unit": "iter/sec",
            "range": "stddev: 0.004994967990145117",
            "extra": "mean: 1.0680161483999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.50052789596418,
            "unit": "iter/sec",
            "range": "stddev: 0.0007854160725189728",
            "extra": "mean: 9.661786469390494 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.78951527771732,
            "unit": "iter/sec",
            "range": "stddev: 0.029263390081927455",
            "extra": "mean: 38.775447666673315 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2249.5435130631386,
            "unit": "iter/sec",
            "range": "stddev: 0.00008304411246087244",
            "extra": "mean: 444.53463300131 usec\nrounds: 1406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 274.8375919688964,
            "unit": "iter/sec",
            "range": "stddev: 0.00028970357605349195",
            "extra": "mean: 3.638512449611227 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.84863700589223,
            "unit": "iter/sec",
            "range": "stddev: 0.0008519878941594715",
            "extra": "mean: 10.015159244897738 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.11546294965352,
            "unit": "iter/sec",
            "range": "stddev: 0.0002278326634750041",
            "extra": "mean: 7.929241796457658 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5426826.546331374,
            "unit": "iter/sec",
            "range": "stddev: 9.669852070709355e-9",
            "extra": "mean: 184.26975534647295 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6038355.709234419,
            "unit": "iter/sec",
            "range": "stddev: 9.257899237776523e-9",
            "extra": "mean: 165.60799796364853 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.34913666396022,
            "unit": "iter/sec",
            "range": "stddev: 0.0010178996794250397",
            "extra": "mean: 10.065512731956723 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.03957992893203,
            "unit": "iter/sec",
            "range": "stddev: 0.00002652714601021163",
            "extra": "mean: 5.1010107263161775 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8537.719927766473,
            "unit": "iter/sec",
            "range": "stddev: 0.00001799728473272888",
            "extra": "mean: 117.12729024382591 usec\nrounds: 3690"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2150.434508159205,
            "unit": "iter/sec",
            "range": "stddev: 0.000085652952054967",
            "extra": "mean: 465.0222995426217 usec\nrounds: 1312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1941669.6618388277,
            "unit": "iter/sec",
            "range": "stddev: 7.925889883078504e-8",
            "extra": "mean: 515.0206647679532 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 316.01840018859565,
            "unit": "iter/sec",
            "range": "stddev: 0.00002260973566049235",
            "extra": "mean: 3.164372705523517 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4524485.67453709,
            "unit": "iter/sec",
            "range": "stddev: 1.1720709158549506e-8",
            "extra": "mean: 221.01959690717518 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.14011024456715,
            "unit": "iter/sec",
            "range": "stddev: 0.00004480064098356511",
            "extra": "mean: 6.055464045161605 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.675708154942626,
            "unit": "iter/sec",
            "range": "stddev: 0.00025880472723459065",
            "extra": "mean: 20.975042400001104 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11170648.155410767,
            "unit": "iter/sec",
            "range": "stddev: 3.3910906857076098e-9",
            "extra": "mean: 89.52032022563117 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1857183.130881851,
            "unit": "iter/sec",
            "range": "stddev: 9.367452834575523e-8",
            "extra": "mean: 538.449861713512 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2180.732225838191,
            "unit": "iter/sec",
            "range": "stddev: 0.00012039623809654513",
            "extra": "mean: 458.5615731044823 usec\nrounds: 1279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2222.744333126235,
            "unit": "iter/sec",
            "range": "stddev: 0.00008540743323076678",
            "extra": "mean: 449.89429737675897 usec\nrounds: 1715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.2341312145562,
            "unit": "iter/sec",
            "range": "stddev: 0.00003913430993551667",
            "extra": "mean: 1.847629227957133 msec\nrounds: 465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2980246141951741,
            "unit": "iter/sec",
            "range": "stddev: 0.07460369839127932",
            "extra": "mean: 770.4014153999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9394256300180075,
            "unit": "iter/sec",
            "range": "stddev: 0.00309588357055392",
            "extra": "mean: 1.064480218599988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.81863654637799,
            "unit": "iter/sec",
            "range": "stddev: 0.0007893057075955717",
            "extra": "mean: 9.821384708333861 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 212.63419297095908,
            "unit": "iter/sec",
            "range": "stddev: 0.004169103418165029",
            "extra": "mean: 4.702912480950686 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2137.2927794731177,
            "unit": "iter/sec",
            "range": "stddev: 0.00009073161543960586",
            "extra": "mean: 467.88161622223726 usec\nrounds: 1196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.44662608318593,
            "unit": "iter/sec",
            "range": "stddev: 0.0008548002992616093",
            "extra": "mean: 9.95553597959417 msec\nrounds: 98"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "ae9ae7d07deb3f8e5802365fedfc54c56d04af2e",
          "message": "feat(duckdb): support 0.8.0",
          "timestamp": "2023-05-19T11:49:20-04:00",
          "tree_id": "961769f9a2bc9e9b5948f61116e07ccf3cbbb85a",
          "url": "https://github.com/ibis-project/ibis/commit/ae9ae7d07deb3f8e5802365fedfc54c56d04af2e"
        },
        "date": 1684511686383,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.91247590136432,
            "unit": "iter/sec",
            "range": "stddev: 0.000808718331957422",
            "extra": "mean: 10.426172305554834 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 422.3722840327288,
            "unit": "iter/sec",
            "range": "stddev: 0.000028700675016569838",
            "extra": "mean: 2.3675795922312743 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.9638761006267,
            "unit": "iter/sec",
            "range": "stddev: 0.0003194852589115107",
            "extra": "mean: 3.6769589194632593 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7154437.868178635,
            "unit": "iter/sec",
            "range": "stddev: 4.943486742558138e-9",
            "extra": "mean: 139.77338519466608 nsec\nrounds: 63695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4411.064773708653,
            "unit": "iter/sec",
            "range": "stddev: 0.00002906555482594489",
            "extra": "mean: 226.70263333250458 usec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.38515465429614,
            "unit": "iter/sec",
            "range": "stddev: 0.0008528849252296048",
            "extra": "mean: 9.96163230951603 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.731438780913614,
            "unit": "iter/sec",
            "range": "stddev: 0.0006066681486439347",
            "extra": "mean: 18.964018868416588 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6171221.891987349,
            "unit": "iter/sec",
            "range": "stddev: 9.896833459656397e-9",
            "extra": "mean: 162.04246379428616 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.7225986195698,
            "unit": "iter/sec",
            "range": "stddev: 0.00039537198272404943",
            "extra": "mean: 3.5749703632634513 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1884084.0198129446,
            "unit": "iter/sec",
            "range": "stddev: 8.671694330859597e-8",
            "extra": "mean: 530.7618925080008 nsec\nrounds: 166639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5572229.11982955,
            "unit": "iter/sec",
            "range": "stddev: 9.566640419991078e-9",
            "extra": "mean: 179.46139300726085 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 230.10202781507093,
            "unit": "iter/sec",
            "range": "stddev: 0.000292153448837453",
            "extra": "mean: 4.345898249987101 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 84.06233722658334,
            "unit": "iter/sec",
            "range": "stddev: 0.013011153698580982",
            "extra": "mean: 11.895933815218338 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 79.9737426124156,
            "unit": "iter/sec",
            "range": "stddev: 0.02026660465685459",
            "extra": "mean: 12.504104063834996 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.35591996404101,
            "unit": "iter/sec",
            "range": "stddev: 0.00024017390805746176",
            "extra": "mean: 9.964534233339842 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 271.57084998317237,
            "unit": "iter/sec",
            "range": "stddev: 0.00030615020417398673",
            "extra": "mean: 3.6822803333346124 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.01705706268102,
            "unit": "iter/sec",
            "range": "stddev: 0.0007469856670114651",
            "extra": "mean: 9.802282371129202 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.215224176331585,
            "unit": "iter/sec",
            "range": "stddev: 0.0005341289746363633",
            "extra": "mean: 41.29633460000832 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147530.74900219156,
            "unit": "iter/sec",
            "range": "stddev: 3.277290290879978e-7",
            "extra": "mean: 6.778247970429168 usec\nrounds: 35843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.9465159750496,
            "unit": "iter/sec",
            "range": "stddev: 0.00014033460535831685",
            "extra": "mean: 7.877333161286148 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1047046.0817926123,
            "unit": "iter/sec",
            "range": "stddev: 1.328261869717801e-7",
            "extra": "mean: 955.0678020664897 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 264.45984648355403,
            "unit": "iter/sec",
            "range": "stddev: 0.00017077940017928294",
            "extra": "mean: 3.7812923712113964 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.41427199805571,
            "unit": "iter/sec",
            "range": "stddev: 0.0006824683527367657",
            "extra": "mean: 11.707645298700939 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.66987877440836,
            "unit": "iter/sec",
            "range": "stddev: 0.01638811885834959",
            "extra": "mean: 12.244416362637661 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.66917994639385,
            "unit": "iter/sec",
            "range": "stddev: 0.0008714086092908562",
            "extra": "mean: 10.033191810525988 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.90033749818167,
            "unit": "iter/sec",
            "range": "stddev: 0.00031989544347504315",
            "extra": "mean: 3.598412326528906 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5884502.431834756,
            "unit": "iter/sec",
            "range": "stddev: 9.745109549247319e-9",
            "extra": "mean: 169.93790241111662 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.7979080932663,
            "unit": "iter/sec",
            "range": "stddev: 0.00010919005011320283",
            "extra": "mean: 6.297312174998382 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.9327795912372,
            "unit": "iter/sec",
            "range": "stddev: 0.0009528833909373993",
            "extra": "mean: 10.006726562499088 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2151.102387140663,
            "unit": "iter/sec",
            "range": "stddev: 0.00008389297654745498",
            "extra": "mean: 464.8779184003615 usec\nrounds: 1250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4519928.426443197,
            "unit": "iter/sec",
            "range": "stddev: 1.4092315034828355e-8",
            "extra": "mean: 221.24244139526343 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1920030.7766741558,
            "unit": "iter/sec",
            "range": "stddev: 1.2538820833132228e-7",
            "extra": "mean: 520.8249847599749 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.38078892306815,
            "unit": "iter/sec",
            "range": "stddev: 0.00008485985690868093",
            "extra": "mean: 9.489395649998755 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.697914515228334,
            "unit": "iter/sec",
            "range": "stddev: 0.0008236250925658499",
            "extra": "mean: 28.01284090624989 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.52721822100237,
            "unit": "iter/sec",
            "range": "stddev: 0.0009520716655271529",
            "extra": "mean: 10.149479687500573 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 70.32827216785762,
            "unit": "iter/sec",
            "range": "stddev: 0.055831354733388266",
            "extra": "mean: 14.21903267598025 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2131.893081895704,
            "unit": "iter/sec",
            "range": "stddev: 0.00009096572110626965",
            "extra": "mean: 469.06667529067096 usec\nrounds: 1121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 208.13908478066486,
            "unit": "iter/sec",
            "range": "stddev: 0.003724032160773651",
            "extra": "mean: 4.804479663460571 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 131.97683169641928,
            "unit": "iter/sec",
            "range": "stddev: 0.019334931982832305",
            "extra": "mean: 7.577087486842067 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2118.4979057001538,
            "unit": "iter/sec",
            "range": "stddev: 0.00008505553005619368",
            "extra": "mean: 472.0325648230956 usec\nrounds: 1103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2980606858604549,
            "unit": "iter/sec",
            "range": "stddev: 0.07536577579333041",
            "extra": "mean: 770.3800068000078 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.5676035955017,
            "unit": "iter/sec",
            "range": "stddev: 0.00004655506919222645",
            "extra": "mean: 1.860231147322747 msec\nrounds: 448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.58476019485569,
            "unit": "iter/sec",
            "range": "stddev: 0.0008300295027787024",
            "extra": "mean: 9.653929768422275 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12348.641099334596,
            "unit": "iter/sec",
            "range": "stddev: 0.000016774244567259737",
            "extra": "mean: 80.98057040898895 usec\nrounds: 5184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.59401547537662,
            "unit": "iter/sec",
            "range": "stddev: 0.033092040621817254",
            "extra": "mean: 26.59997841026004 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.99947089197707,
            "unit": "iter/sec",
            "range": "stddev: 0.00035173295197905326",
            "extra": "mean: 10.638357753621683 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.5951296454956,
            "unit": "iter/sec",
            "range": "stddev: 0.000024942519933760264",
            "extra": "mean: 1.4543442163640272 msec\nrounds: 550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.7374043814772,
            "unit": "iter/sec",
            "range": "stddev: 0.0002989856552961423",
            "extra": "mean: 3.6665304572646815 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2100.2375973036383,
            "unit": "iter/sec",
            "range": "stddev: 0.00008735012233666465",
            "extra": "mean: 476.13660534590775 usec\nrounds: 1272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2138.8428374357864,
            "unit": "iter/sec",
            "range": "stddev: 0.00009238231385271351",
            "extra": "mean: 467.54253398013986 usec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10005.506857117723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017385459676116634",
            "extra": "mean: 99.94496173760747 usec\nrounds: 4443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.97325024087701,
            "unit": "iter/sec",
            "range": "stddev: 0.00007303321578296766",
            "extra": "mean: 8.851652916666913 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1780.6651954628023,
            "unit": "iter/sec",
            "range": "stddev: 0.000008024242850571199",
            "extra": "mean: 561.5878844310739 usec\nrounds: 1246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.1429826352576,
            "unit": "iter/sec",
            "range": "stddev: 0.000050461672732009256",
            "extra": "mean: 5.2592001352911 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6260690278210854,
            "unit": "iter/sec",
            "range": "stddev: 0.0020822997344215268",
            "extra": "mean: 614.9800426000297 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14001.172380284459,
            "unit": "iter/sec",
            "range": "stddev: 0.000002242579491226821",
            "extra": "mean: 71.42259039736807 usec\nrounds: 5603"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 201.00295763830147,
            "unit": "iter/sec",
            "range": "stddev: 0.00003187220709596489",
            "extra": "mean: 4.9750511721298585 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1179.1948029431444,
            "unit": "iter/sec",
            "range": "stddev: 0.00001601033279075059",
            "extra": "mean: 848.0363019783558 usec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.909547365744665,
            "unit": "iter/sec",
            "range": "stddev: 0.0003121831656803913",
            "extra": "mean: 21.317622022723725 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2193.9561938171128,
            "unit": "iter/sec",
            "range": "stddev: 0.00008348653478485734",
            "extra": "mean: 455.79761474643175 usec\nrounds: 1085"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.07833452655335,
            "unit": "iter/sec",
            "range": "stddev: 0.000948432941627135",
            "extra": "mean: 10.09302391666663 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2160.386876485014,
            "unit": "iter/sec",
            "range": "stddev: 0.00010513594699838486",
            "extra": "mean: 462.88005675493497 usec\nrounds: 1251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7729951810793914,
            "unit": "iter/sec",
            "range": "stddev: 0.0036136151104566045",
            "extra": "mean: 1.293669125600013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 81.95769994014293,
            "unit": "iter/sec",
            "range": "stddev: 0.02033529977359892",
            "extra": "mean: 12.201416105263338 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.972102921735676,
            "unit": "iter/sec",
            "range": "stddev: 0.0012355221892052784",
            "extra": "mean: 17.24967613043181 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.270563961276565,
            "unit": "iter/sec",
            "range": "stddev: 0.00011153046146348938",
            "extra": "mean: 33.03539376667194 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8992161250324464,
            "unit": "iter/sec",
            "range": "stddev: 0.004755957712946231",
            "extra": "mean: 1.1120797016000097 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.4278204421422,
            "unit": "iter/sec",
            "range": "stddev: 0.0002764610781228555",
            "extra": "mean: 19.44472838636102 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.635970599821041,
            "unit": "iter/sec",
            "range": "stddev: 0.00010641531554986722",
            "extra": "mean: 115.79474344443952 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.965304666356,
            "unit": "iter/sec",
            "range": "stddev: 0.00025096313659806705",
            "extra": "mean: 3.5975712911376045 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.60406932705418,
            "unit": "iter/sec",
            "range": "stddev: 0.0008337997100188468",
            "extra": "mean: 9.746202139531755 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 82.0994235038417,
            "unit": "iter/sec",
            "range": "stddev: 0.02042574009854901",
            "extra": "mean: 12.180353494847703 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8461.008135620745,
            "unit": "iter/sec",
            "range": "stddev: 0.00002539884033789068",
            "extra": "mean: 118.18922567749483 usec\nrounds: 4245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2105.683400458101,
            "unit": "iter/sec",
            "range": "stddev: 0.00009077388380999408",
            "extra": "mean: 474.9052016948253 usec\nrounds: 1180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.422348312288305,
            "unit": "iter/sec",
            "range": "stddev: 0.0025690563370785856",
            "extra": "mean: 412.8225469999961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.79954592216065,
            "unit": "iter/sec",
            "range": "stddev: 0.0008259384702348677",
            "extra": "mean: 10.02008567032917 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.32049738735655,
            "unit": "iter/sec",
            "range": "stddev: 0.0007681013796739808",
            "extra": "mean: 10.275327673468258 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9025189262618665,
            "unit": "iter/sec",
            "range": "stddev: 0.0038226547836002905",
            "extra": "mean: 1.1080100049999941 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.98695863657922,
            "unit": "iter/sec",
            "range": "stddev: 0.0005477833964024656",
            "extra": "mean: 52.6677294210488 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 750.1555498486022,
            "unit": "iter/sec",
            "range": "stddev: 0.000012053027174638824",
            "extra": "mean: 1.3330568576101611 msec\nrounds: 611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 176.41632633504327,
            "unit": "iter/sec",
            "range": "stddev: 0.00006177301140975776",
            "extra": "mean: 5.668409612502856 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.22429980472184,
            "unit": "iter/sec",
            "range": "stddev: 0.00003611602572473762",
            "extra": "mean: 9.240069021507958 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 101.80656336087064,
            "unit": "iter/sec",
            "range": "stddev: 0.0008672538194959716",
            "extra": "mean: 9.822549421055795 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1614.253328769403,
            "unit": "iter/sec",
            "range": "stddev: 0.005960699850884931",
            "extra": "mean: 619.4814544767469 usec\nrounds: 1307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.0909962475596,
            "unit": "iter/sec",
            "range": "stddev: 0.00032665904533945444",
            "extra": "mean: 3.5959452607008866 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1638447135078709,
            "unit": "iter/sec",
            "range": "stddev: 0.17460702969515882",
            "extra": "mean: 6.103340038200019 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 314.8329008215027,
            "unit": "iter/sec",
            "range": "stddev: 0.00002709328916863611",
            "extra": "mean: 3.176288111536853 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1682373.178614721,
            "unit": "iter/sec",
            "range": "stddev: 8.473005855800247e-8",
            "extra": "mean: 594.398444240182 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1929948.3519002267,
            "unit": "iter/sec",
            "range": "stddev: 8.761936346580316e-8",
            "extra": "mean: 518.1485810308864 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11421959.807682687,
            "unit": "iter/sec",
            "range": "stddev: 8.491921977571356e-9",
            "extra": "mean: 87.55064952408642 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.41757499083292,
            "unit": "iter/sec",
            "range": "stddev: 0.0007876137037072319",
            "extra": "mean: 9.860223931506836 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.05060088361271,
            "unit": "iter/sec",
            "range": "stddev: 0.000973062452990273",
            "extra": "mean: 26.99011557575831 msec\nrounds: 33"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "20400b46078aa58d7a48dfb4fdc39c8e7a7cd972",
          "message": "chore: isolate per os/per backend/per python version",
          "timestamp": "2023-05-19T12:04:36-05:00",
          "tree_id": "b11c24d2cccdd8629bd60fb1eef080675cfa4c29",
          "url": "https://github.com/ibis-project/ibis/commit/20400b46078aa58d7a48dfb4fdc39c8e7a7cd972"
        },
        "date": 1684516299586,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.772960951571434,
            "unit": "iter/sec",
            "range": "stddev: 0.010827534388530456",
            "extra": "mean: 29.609485571429314 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 89.42385577907088,
            "unit": "iter/sec",
            "range": "stddev: 0.010581055920400954",
            "extra": "mean: 11.182698299999316 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11775.82931816668,
            "unit": "iter/sec",
            "range": "stddev: 0.000012625798587739669",
            "extra": "mean: 84.91970909066175 usec\nrounds: 330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.21147988801533,
            "unit": "iter/sec",
            "range": "stddev: 0.0002801713429217836",
            "extra": "mean: 3.6073542134833962 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.0030430920662,
            "unit": "iter/sec",
            "range": "stddev: 0.000057287155714019345",
            "extra": "mean: 1.8382250112353906 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 696.0085076582806,
            "unit": "iter/sec",
            "range": "stddev: 0.00003026514157531522",
            "extra": "mean: 1.436764046698938 msec\nrounds: 621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.01892447783536,
            "unit": "iter/sec",
            "range": "stddev: 0.00009339935104862012",
            "extra": "mean: 9.007473317755366 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.89916428104112,
            "unit": "iter/sec",
            "range": "stddev: 0.0006166954292976554",
            "extra": "mean: 10.010093750001271 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4703763.133330127,
            "unit": "iter/sec",
            "range": "stddev: 1.3436041572098462e-8",
            "extra": "mean: 212.59573912502537 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.90037146853754,
            "unit": "iter/sec",
            "range": "stddev: 0.0008952354504878544",
            "extra": "mean: 10.00997278888936 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7547775338860298,
            "unit": "iter/sec",
            "range": "stddev: 0.002274995804908628",
            "extra": "mean: 1.3248937005999948 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 266.10798727628844,
            "unit": "iter/sec",
            "range": "stddev: 0.00032472058562854427",
            "extra": "mean: 3.7578729230766874 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.12807249950127,
            "unit": "iter/sec",
            "range": "stddev: 0.0006776918220629081",
            "extra": "mean: 9.791627076922296 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2550100.4220471275,
            "unit": "iter/sec",
            "range": "stddev: 1.8133132401615146e-8",
            "extra": "mean: 392.14141974744643 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 74.98209959592147,
            "unit": "iter/sec",
            "range": "stddev: 0.01311244404122483",
            "extra": "mean: 13.33651638709772 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12815566.311736748,
            "unit": "iter/sec",
            "range": "stddev: 3.910970170963147e-9",
            "extra": "mean: 78.0301061751247 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13683.121607200013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016643545844977237",
            "extra": "mean: 73.08273862550512 usec\nrounds: 5253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 98.50141608579116,
            "unit": "iter/sec",
            "range": "stddev: 0.000874924843964713",
            "extra": "mean: 10.152138311687176 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.753361176016877,
            "unit": "iter/sec",
            "range": "stddev: 0.00008049641995451395",
            "extra": "mean: 33.60964813636129 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5716437259521063,
            "unit": "iter/sec",
            "range": "stddev: 0.0010276668238962294",
            "extra": "mean: 636.2765196000112 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.96216793404059,
            "unit": "iter/sec",
            "range": "stddev: 0.000059310945929143486",
            "extra": "mean: 52.736586000001374 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.4417757006949,
            "unit": "iter/sec",
            "range": "stddev: 0.00005321843763072954",
            "extra": "mean: 5.799058818181552 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.38706488844454,
            "unit": "iter/sec",
            "range": "stddev: 0.000022364445170180813",
            "extra": "mean: 5.01537048333347 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.24250641420991,
            "unit": "iter/sec",
            "range": "stddev: 0.020511466151859",
            "extra": "mean: 24.84934684999871 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7372284.773594,
            "unit": "iter/sec",
            "range": "stddev: 5.419528530245031e-9",
            "extra": "mean: 135.64315957817442 nsec\nrounds: 65360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8926622872727545,
            "unit": "iter/sec",
            "range": "stddev: 0.00543398186097524",
            "extra": "mean: 1.120244480199989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.37218045807454,
            "unit": "iter/sec",
            "range": "stddev: 0.00045885214649227625",
            "extra": "mean: 16.03278885964524 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.972372270344984,
            "unit": "iter/sec",
            "range": "stddev: 0.00048798311677181297",
            "extra": "mean: 18.190955905671423 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2266.4079764402186,
            "unit": "iter/sec",
            "range": "stddev: 0.00007757151922261571",
            "extra": "mean: 441.22682694166616 usec\nrounds: 1017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.29041135929317,
            "unit": "iter/sec",
            "range": "stddev: 0.00075550470472862",
            "extra": "mean: 10.494235314290888 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5797463.262127329,
            "unit": "iter/sec",
            "range": "stddev: 9.639793891382445e-9",
            "extra": "mean: 172.4892344785747 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.99566602290324,
            "unit": "iter/sec",
            "range": "stddev: 0.00045627898367632037",
            "extra": "mean: 38.46795073913318 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 274.19145737582795,
            "unit": "iter/sec",
            "range": "stddev: 0.00030780808047950464",
            "extra": "mean: 3.647086636361989 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.2822154049694,
            "unit": "iter/sec",
            "range": "stddev: 0.016026610240626474",
            "extra": "mean: 11.457087739583946 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.12670995978564,
            "unit": "iter/sec",
            "range": "stddev: 0.0007393920564299068",
            "extra": "mean: 10.088098358209269 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 269.44827464243303,
            "unit": "iter/sec",
            "range": "stddev: 0.0002907481780509348",
            "extra": "mean: 3.711287449611744 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1187.5511615807661,
            "unit": "iter/sec",
            "range": "stddev: 0.00001694707666022904",
            "extra": "mean: 842.0689839323519 usec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.104293453813,
            "unit": "iter/sec",
            "range": "stddev: 0.0008124652277870749",
            "extra": "mean: 9.989581520410898 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.11776154794154,
            "unit": "iter/sec",
            "range": "stddev: 0.0008809109762405492",
            "extra": "mean: 10.624987075267635 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.23901008927477,
            "unit": "iter/sec",
            "range": "stddev: 0.0173956318828172",
            "extra": "mean: 11.870984701033649 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8167.120382863563,
            "unit": "iter/sec",
            "range": "stddev: 0.00001657306296685972",
            "extra": "mean: 122.44217706135723 usec\nrounds: 4377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2351.233377898519,
            "unit": "iter/sec",
            "range": "stddev: 0.00008017169826104827",
            "extra": "mean: 425.3086951724793 usec\nrounds: 1450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1878500.2329870916,
            "unit": "iter/sec",
            "range": "stddev: 1.0527577300239767e-7",
            "extra": "mean: 532.3395666605018 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6339031.61202121,
            "unit": "iter/sec",
            "range": "stddev: 4.8927754039181105e-9",
            "extra": "mean: 157.75280219517776 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4549.9804537518785,
            "unit": "iter/sec",
            "range": "stddev: 0.0001306934744111955",
            "extra": "mean: 219.78116393344237 usec\nrounds: 366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2427.9707612631596,
            "unit": "iter/sec",
            "range": "stddev: 0.00007973632893311945",
            "extra": "mean: 411.8665743238797 usec\nrounds: 1332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2356.499471771786,
            "unit": "iter/sec",
            "range": "stddev: 0.00008392513010588208",
            "extra": "mean: 424.35825340887004 usec\nrounds: 1760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.74627814295036,
            "unit": "iter/sec",
            "range": "stddev: 0.00020480458906895415",
            "extra": "mean: 9.195717012820145 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.57616620082604,
            "unit": "iter/sec",
            "range": "stddev: 0.00016633410731352964",
            "extra": "mean: 116.60221788888394 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.99855881791603,
            "unit": "iter/sec",
            "range": "stddev: 0.003630682687986995",
            "extra": "mean: 6.135023568626085 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2400.609413819333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000823055906086968",
            "extra": "mean: 416.56089251479494 usec\nrounds: 1256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2362.055331172058,
            "unit": "iter/sec",
            "range": "stddev: 0.00007831282824240656",
            "extra": "mean: 423.3601079547097 usec\nrounds: 1408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140916.62051584912,
            "unit": "iter/sec",
            "range": "stddev: 3.258540634704111e-7",
            "extra": "mean: 7.09639499116095 usec\nrounds: 38611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2361.2033560448494,
            "unit": "iter/sec",
            "range": "stddev: 0.00008335889793437232",
            "extra": "mean: 423.5128657766509 usec\nrounds: 1274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 236.406015319824,
            "unit": "iter/sec",
            "range": "stddev: 0.004099100351383009",
            "extra": "mean: 4.230010808511539 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1863218.2526567567,
            "unit": "iter/sec",
            "range": "stddev: 1.1075473426886793e-7",
            "extra": "mean: 536.7057769931694 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17639519093532757,
            "unit": "iter/sec",
            "range": "stddev: 0.07519622528834267",
            "extra": "mean: 5.669088792599984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 439.0471367518849,
            "unit": "iter/sec",
            "range": "stddev: 0.000037340793671296705",
            "extra": "mean: 2.27765976883052 msec\nrounds: 385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1790.6376161297842,
            "unit": "iter/sec",
            "range": "stddev: 0.00000487655369180579",
            "extra": "mean: 558.4602886659791 usec\nrounds: 1306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6355181.850754436,
            "unit": "iter/sec",
            "range": "stddev: 9.616556167388545e-9",
            "extra": "mean: 157.35190958880452 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 266.8511886031141,
            "unit": "iter/sec",
            "range": "stddev: 0.0003396644653478495",
            "extra": "mean: 3.7474069545453403 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1080255.497411252,
            "unit": "iter/sec",
            "range": "stddev: 1.5989972010510947e-7",
            "extra": "mean: 925.7069298850337 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.8037244216764,
            "unit": "iter/sec",
            "range": "stddev: 0.00011813811383177723",
            "extra": "mean: 6.104867294871278 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 252.87374997698788,
            "unit": "iter/sec",
            "range": "stddev: 0.0004175611462537796",
            "extra": "mean: 3.9545425339364106 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.343993114570791,
            "unit": "iter/sec",
            "range": "stddev: 0.002027484757940269",
            "extra": "mean: 426.6224136000119 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.18158326731721,
            "unit": "iter/sec",
            "range": "stddev: 0.0008022797363871398",
            "extra": "mean: 9.786499367345879 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 192.6871646927506,
            "unit": "iter/sec",
            "range": "stddev: 0.00021989993757714568",
            "extra": "mean: 5.1897592742856045 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 94.95868943207476,
            "unit": "iter/sec",
            "range": "stddev: 0.000763939227412104",
            "extra": "mean: 10.53089512903728 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.33548332323566,
            "unit": "iter/sec",
            "range": "stddev: 0.00019197618381210663",
            "extra": "mean: 10.489273931821298 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.935448631738254,
            "unit": "iter/sec",
            "range": "stddev: 0.0002522940687288274",
            "extra": "mean: 20.861388148934438 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.45885028197438,
            "unit": "iter/sec",
            "range": "stddev: 0.0008457920113584694",
            "extra": "mean: 10.054409408161408 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 124.93674753559343,
            "unit": "iter/sec",
            "range": "stddev: 0.00024915432840088523",
            "extra": "mean: 8.004050207206719 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2334.3714941784397,
            "unit": "iter/sec",
            "range": "stddev: 0.00008287700616520469",
            "extra": "mean: 428.3808307691577 usec\nrounds: 1495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 99.89838912595262,
            "unit": "iter/sec",
            "range": "stddev: 0.0006541568151633685",
            "extra": "mean: 10.010171422676223 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2874471997239751,
            "unit": "iter/sec",
            "range": "stddev: 0.07797890899796678",
            "extra": "mean: 776.7308828000068 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9433.157649818126,
            "unit": "iter/sec",
            "range": "stddev: 0.000001830522140054969",
            "extra": "mean: 106.0090414177781 usec\nrounds: 5360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1632309.68387686,
            "unit": "iter/sec",
            "range": "stddev: 9.8063223030224e-8",
            "extra": "mean: 612.6288472570498 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8879842227182893,
            "unit": "iter/sec",
            "range": "stddev: 0.004615906675552465",
            "extra": "mean: 1.1261461346000146 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.7662355245386,
            "unit": "iter/sec",
            "range": "stddev: 0.0002522360435610329",
            "extra": "mean: 3.5744127525792475 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 395.9066556542096,
            "unit": "iter/sec",
            "range": "stddev: 0.00003223616778368173",
            "extra": "mean: 2.5258479131843994 msec\nrounds: 311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 231.10773814057092,
            "unit": "iter/sec",
            "range": "stddev: 0.00028578303369623266",
            "extra": "mean: 4.326986227487335 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.26526712809482,
            "unit": "iter/sec",
            "range": "stddev: 0.00012408192087580053",
            "extra": "mean: 6.567485933339867 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.35820658894164,
            "unit": "iter/sec",
            "range": "stddev: 0.00026396102516095644",
            "extra": "mean: 3.5924933281263893 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.966940894769174,
            "unit": "iter/sec",
            "range": "stddev: 0.001021962583028095",
            "extra": "mean: 24.409926105263185 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2358.862123907753,
            "unit": "iter/sec",
            "range": "stddev: 0.00009326529841731802",
            "extra": "mean: 423.933213333967 usec\nrounds: 1425"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.56110821691887,
            "unit": "iter/sec",
            "range": "stddev: 0.0009042314212426956",
            "extra": "mean: 10.575172170212362 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 746.8383998959855,
            "unit": "iter/sec",
            "range": "stddev: 0.00009724074962874512",
            "extra": "mean: 1.3389777495898352 msec\nrounds: 611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.021888431371764,
            "unit": "iter/sec",
            "range": "stddev: 0.00018936444293547408",
            "extra": "mean: 18.511015239135492 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.02317264232751,
            "unit": "iter/sec",
            "range": "stddev: 0.0008613761649333608",
            "extra": "mean: 10.09864634020572 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.175593813519,
            "unit": "iter/sec",
            "range": "stddev: 0.0001606088910157614",
            "extra": "mean: 9.418360322583599 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.43249597570103,
            "unit": "iter/sec",
            "range": "stddev: 0.0007345987878790917",
            "extra": "mean: 9.668141434341155 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.03338066022229,
            "unit": "iter/sec",
            "range": "stddev: 0.0007613149331887277",
            "extra": "mean: 10.200607112244132 msec\nrounds: 98"
          }
        ]
      }
    ]
  }
}
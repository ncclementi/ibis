window.BENCHMARK_DATA = {
  "lastUpdate": 1684509405907,
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
      }
    ]
  }
}
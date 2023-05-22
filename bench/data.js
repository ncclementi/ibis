window.BENCHMARK_DATA = {
  "lastUpdate": 1684762280991,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "cecc24cafe710e6247c110c6dd2a63f874440626",
          "message": "refactor(dask/pandas): align datatype conversions with the new convention",
          "timestamp": "2023-05-19T12:06:31-05:00",
          "tree_id": "cb89e000eb0caf6a388a9a44484ef74df63f2817",
          "url": "https://github.com/ibis-project/ibis/commit/cecc24cafe710e6247c110c6dd2a63f874440626"
        },
        "date": 1684516484176,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1713.4468341033173,
            "unit": "iter/sec",
            "range": "stddev: 0.00021381496530698603",
            "extra": "mean: 583.6189253711633 usec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 81.40484053689093,
            "unit": "iter/sec",
            "range": "stddev: 0.012049408437269257",
            "extra": "mean: 12.284281787233787 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.08937831103724,
            "unit": "iter/sec",
            "range": "stddev: 0.00036553001951570544",
            "extra": "mean: 22.68119983333179 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143957.18757243012,
            "unit": "iter/sec",
            "range": "stddev: 6.571529603515777e-7",
            "extra": "mean: 6.946509700996093 usec\nrounds: 32574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.356903700822277,
            "unit": "iter/sec",
            "range": "stddev: 0.0014978775490564378",
            "extra": "mean: 135.92674862499976 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 77.78294514179815,
            "unit": "iter/sec",
            "range": "stddev: 0.01303530134605733",
            "extra": "mean: 12.856288716980336 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.3509036465451,
            "unit": "iter/sec",
            "range": "stddev: 0.0008610197007500188",
            "extra": "mean: 11.716337581394532 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6569243233910961,
            "unit": "iter/sec",
            "range": "stddev: 0.006840437715947074",
            "extra": "mean: 1.522245355200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1514.5881074103463,
            "unit": "iter/sec",
            "range": "stddev: 0.000013342278294533179",
            "extra": "mean: 660.2455117053621 usec\nrounds: 299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 266.5864429071027,
            "unit": "iter/sec",
            "range": "stddev: 0.00004271270624018404",
            "extra": "mean: 3.7511284861116128 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1632736.9377132426,
            "unit": "iter/sec",
            "range": "stddev: 2.797851754631542e-7",
            "extra": "mean: 612.4685348275191 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1599743.5909875003,
            "unit": "iter/sec",
            "range": "stddev: 2.0790961219120295e-7",
            "extra": "mean: 625.1001758242478 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 85.1208095816608,
            "unit": "iter/sec",
            "range": "stddev: 0.0010524893476489985",
            "extra": "mean: 11.7480085647053 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.04602538944991,
            "unit": "iter/sec",
            "range": "stddev: 0.0010012491566469125",
            "extra": "mean: 12.338668000000085 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 202.14850972232304,
            "unit": "iter/sec",
            "range": "stddev: 0.00039896204905402033",
            "extra": "mean: 4.946858135999264 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1596088.2876900071,
            "unit": "iter/sec",
            "range": "stddev: 1.3420812382884056e-7",
            "extra": "mean: 626.5317574927411 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 166.20025397639418,
            "unit": "iter/sec",
            "range": "stddev: 0.005139720600248916",
            "extra": "mean: 6.016837977528195 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1708.7493119877784,
            "unit": "iter/sec",
            "range": "stddev: 0.00026488612159657725",
            "extra": "mean: 585.223351947809 usec\nrounds: 770"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5015354.769905604,
            "unit": "iter/sec",
            "range": "stddev: 2.99730733114866e-8",
            "extra": "mean: 199.38768958059381 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.426651722113,
            "unit": "iter/sec",
            "range": "stddev: 0.0012783073914041164",
            "extra": "mean: 13.08444079999731 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 64.300658021088,
            "unit": "iter/sec",
            "range": "stddev: 0.017919870470163936",
            "extra": "mean: 15.551940380952878 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 248.4479121425065,
            "unit": "iter/sec",
            "range": "stddev: 0.000330892801403856",
            "extra": "mean: 4.024988543378916 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1827.0065981965079,
            "unit": "iter/sec",
            "range": "stddev: 0.00010135245027054129",
            "extra": "mean: 547.343398205091 usec\nrounds: 1449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1004.8369975345333,
            "unit": "iter/sec",
            "range": "stddev: 0.00001666833758279678",
            "extra": "mean: 995.1862863863479 usec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5893970.474216922,
            "unit": "iter/sec",
            "range": "stddev: 7.378466064704508e-9",
            "extra": "mean: 169.66491508124847 nsec\nrounds: 56819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 72.26926235392469,
            "unit": "iter/sec",
            "range": "stddev: 0.0006737314891341103",
            "extra": "mean: 13.837141371426956 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9733.880250952066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000816189711282811",
            "extra": "mean: 102.73395338947081 usec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 73.49289108164797,
            "unit": "iter/sec",
            "range": "stddev: 0.015841013123064636",
            "extra": "mean: 13.60675822222092 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.010960018752836,
            "unit": "iter/sec",
            "range": "stddev: 0.002480765756596015",
            "extra": "mean: 62.45721673333453 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.553451681935,
            "unit": "iter/sec",
            "range": "stddev: 0.0008648008511545483",
            "extra": "mean: 10.922581089286407 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.62252721953715,
            "unit": "iter/sec",
            "range": "stddev: 0.0009061663382326371",
            "extra": "mean: 29.74196417391632 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1878.6909263969872,
            "unit": "iter/sec",
            "range": "stddev: 0.00010886907803363593",
            "extra": "mean: 532.2855324147606 usec\nrounds: 1234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1010723487184007,
            "unit": "iter/sec",
            "range": "stddev: 0.10197726723597819",
            "extra": "mean: 908.2055335999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.10931438153639,
            "unit": "iter/sec",
            "range": "stddev: 0.000754427493009425",
            "extra": "mean: 18.481106468080252 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 85.80100398593576,
            "unit": "iter/sec",
            "range": "stddev: 0.001054453357599004",
            "extra": "mean: 11.6548752758641 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 77.54386579604666,
            "unit": "iter/sec",
            "range": "stddev: 0.01585253554061974",
            "extra": "mean: 12.895926579546181 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.08732524910985,
            "unit": "iter/sec",
            "range": "stddev: 0.0009814001163955637",
            "extra": "mean: 11.616111862069268 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 84.99456010531142,
            "unit": "iter/sec",
            "range": "stddev: 0.0009608762980445629",
            "extra": "mean: 11.765458857142889 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9229968.13032092,
            "unit": "iter/sec",
            "range": "stddev: 5.67440313023889e-9",
            "extra": "mean: 108.34273595325335 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3598387.803465504,
            "unit": "iter/sec",
            "range": "stddev: 3.7804826645922984e-8",
            "extra": "mean: 277.90223139336297 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1819214351010614,
            "unit": "iter/sec",
            "range": "stddev: 0.0016362090006521181",
            "extra": "mean: 458.31164399999693 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 635.3289888969362,
            "unit": "iter/sec",
            "range": "stddev: 0.000022365972004412902",
            "extra": "mean: 1.5739876780000372 msec\nrounds: 500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 237.77011795284474,
            "unit": "iter/sec",
            "range": "stddev: 0.0003375776000438658",
            "extra": "mean: 4.205742961351952 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 459.61481126814203,
            "unit": "iter/sec",
            "range": "stddev: 0.000037964026210735884",
            "extra": "mean: 2.1757349316939094 msec\nrounds: 366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 84.72651808297573,
            "unit": "iter/sec",
            "range": "stddev: 0.0008727048293398276",
            "extra": "mean: 11.80268023077101 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 217.71048939622654,
            "unit": "iter/sec",
            "range": "stddev: 0.0006022797636899307",
            "extra": "mean: 4.593255946340876 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14514258873841426,
            "unit": "iter/sec",
            "range": "stddev: 0.1480876521891726",
            "extra": "mean: 6.8897765204 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 96.55749762585316,
            "unit": "iter/sec",
            "range": "stddev: 0.00009338941237216822",
            "extra": "mean: 10.35652356976835 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 76.70820877036817,
            "unit": "iter/sec",
            "range": "stddev: 0.016581512894257865",
            "extra": "mean: 13.03641443373519 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 235.2069753074533,
            "unit": "iter/sec",
            "range": "stddev: 0.0004096495916807808",
            "extra": "mean: 4.251574591666933 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1839.1431848432273,
            "unit": "iter/sec",
            "range": "stddev: 0.00011228754441461719",
            "extra": "mean: 543.73145508257 usec\nrounds: 1692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 25.51141533927594,
            "unit": "iter/sec",
            "range": "stddev: 0.034526413157344046",
            "extra": "mean: 39.1981388214262 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8836.340390719457,
            "unit": "iter/sec",
            "range": "stddev: 0.000003935238036650767",
            "extra": "mean: 113.1690219913065 usec\nrounds: 4138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4601386.836280702,
            "unit": "iter/sec",
            "range": "stddev: 2.20368626382756e-8",
            "extra": "mean: 217.3257836348535 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7772148931213603,
            "unit": "iter/sec",
            "range": "stddev: 0.00834777090629726",
            "extra": "mean: 1.2866454423999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.36881195900623,
            "unit": "iter/sec",
            "range": "stddev: 0.03322001999586693",
            "extra": "mean: 30.893935843751663 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.33757102978981,
            "unit": "iter/sec",
            "range": "stddev: 0.0009014050961141719",
            "extra": "mean: 11.193498865852842 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.000715208051762,
            "unit": "iter/sec",
            "range": "stddev: 0.0002131256725947403",
            "extra": "mean: 45.453067799996916 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7805931200343664,
            "unit": "iter/sec",
            "range": "stddev: 0.005013429997024944",
            "extra": "mean: 1.2810771378000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.53805841231425,
            "unit": "iter/sec",
            "range": "stddev: 0.0005358190890390991",
            "extra": "mean: 21.03577708888843 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 85.16782953993798,
            "unit": "iter/sec",
            "range": "stddev: 0.0010378069409200706",
            "extra": "mean: 11.741522654760942 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 133.26025742029992,
            "unit": "iter/sec",
            "range": "stddev: 0.004711538771054248",
            "extra": "mean: 7.504112774193599 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1367283.1530915978,
            "unit": "iter/sec",
            "range": "stddev: 4.260311658800889e-7",
            "extra": "mean: 731.3774017758319 nsec\nrounds: 140826"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7278.312930977841,
            "unit": "iter/sec",
            "range": "stddev: 0.00004521669333152387",
            "extra": "mean: 137.3944771931715 usec\nrounds: 2850"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1903.1613774844943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000970434888954706",
            "extra": "mean: 525.4415163267715 usec\nrounds: 980"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 363.4399068300221,
            "unit": "iter/sec",
            "range": "stddev: 0.00004191220745078614",
            "extra": "mean: 2.7514865076929813 msec\nrounds: 325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.060936411221807,
            "unit": "iter/sec",
            "range": "stddev: 0.00021870216414147475",
            "extra": "mean: 38.371606615386284 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.6761656000874,
            "unit": "iter/sec",
            "range": "stddev: 0.00010037975621379592",
            "extra": "mean: 7.316564637363229 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.10373103266348,
            "unit": "iter/sec",
            "range": "stddev: 0.00016047875364422586",
            "extra": "mean: 11.222874602562062 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11993.1139435933,
            "unit": "iter/sec",
            "range": "stddev: 0.000004063401559630176",
            "extra": "mean: 83.38118062608737 usec\nrounds: 6101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 579.1551631972469,
            "unit": "iter/sec",
            "range": "stddev: 0.000039162824080003905",
            "extra": "mean: 1.7266529999999725 msec\nrounds: 478"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 165.01845049472115,
            "unit": "iter/sec",
            "range": "stddev: 0.00008350587935392954",
            "extra": "mean: 6.059928432257274 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5231371.555487705,
            "unit": "iter/sec",
            "range": "stddev: 1.3464805479058301e-8",
            "extra": "mean: 191.15445909227327 nsec\nrounds: 51811"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1871.664205145041,
            "unit": "iter/sec",
            "range": "stddev: 0.00010515757014357429",
            "extra": "mean: 534.2838727433519 usec\nrounds: 1108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3868.5488303898037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000301132820928548",
            "extra": "mean: 258.49486302057034 usec\nrounds: 1847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 246.43280182475522,
            "unit": "iter/sec",
            "range": "stddev: 0.00032391974695949685",
            "extra": "mean: 4.057901353209976 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 70.04106112712932,
            "unit": "iter/sec",
            "range": "stddev: 0.026231753784039937",
            "extra": "mean: 14.27733937646849 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1824.367894316091,
            "unit": "iter/sec",
            "range": "stddev: 0.00010184113610392177",
            "extra": "mean: 548.1350571425586 usec\nrounds: 1190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.28432815241172,
            "unit": "iter/sec",
            "range": "stddev: 0.0010942835042833242",
            "extra": "mean: 12.455731062500774 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1789.238998256274,
            "unit": "iter/sec",
            "range": "stddev: 0.00012601408103042337",
            "extra": "mean: 558.896827631503 usec\nrounds: 1520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.02395838803184,
            "unit": "iter/sec",
            "range": "stddev: 0.00012031887257344305",
            "extra": "mean: 7.193004799999185 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 870383.289264782,
            "unit": "iter/sec",
            "range": "stddev: 1.897642578794413e-7",
            "extra": "mean: 1.1489191168234698 usec\nrounds: 71424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 149.19027825882142,
            "unit": "iter/sec",
            "range": "stddev: 0.0001367977040215084",
            "extra": "mean: 6.702849620436788 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 242.48337950175724,
            "unit": "iter/sec",
            "range": "stddev: 0.00029937101041007096",
            "extra": "mean: 4.123993991071678 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 89.60442659199349,
            "unit": "iter/sec",
            "range": "stddev: 0.00009499556403470655",
            "extra": "mean: 11.160162929822866 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.75118572623997,
            "unit": "iter/sec",
            "range": "stddev: 0.023610978625764258",
            "extra": "mean: 14.33667384415239 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.05159980809795,
            "unit": "iter/sec",
            "range": "stddev: 0.00010365186426328133",
            "extra": "mean: 9.25483751999991 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.365200213139682,
            "unit": "iter/sec",
            "range": "stddev: 0.002406106303584982",
            "extra": "mean: 732.4932931999797 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.72320874520733,
            "unit": "iter/sec",
            "range": "stddev: 0.00004854589787269796",
            "extra": "mean: 5.823324682243391 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.229847985407744,
            "unit": "iter/sec",
            "range": "stddev: 0.00037059556506300456",
            "extra": "mean: 24.85716576315978 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 241.48819634343522,
            "unit": "iter/sec",
            "range": "stddev: 0.0002946737241105925",
            "extra": "mean: 4.140989146226586 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 245.2199875763161,
            "unit": "iter/sec",
            "range": "stddev: 0.0003035958913503014",
            "extra": "mean: 4.077971008333018 msec\nrounds: 240"
          }
        ]
      },
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
          "id": "0d896398cfae7319e0a4c751be1e4e90b72b1a9b",
          "message": "chore(flake/nixpkgs): `c8f6370f` -> `5dcb4a7a`",
          "timestamp": "2023-05-20T00:37:47Z",
          "tree_id": "e5773827d5d0d3907cbe05a5635b61374b7ad741",
          "url": "https://github.com/ibis-project/ibis/commit/0d896398cfae7319e0a4c751be1e4e90b72b1a9b"
        },
        "date": 1684543387208,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3373743.8259545434,
            "unit": "iter/sec",
            "range": "stddev: 6.335057746708843e-8",
            "extra": "mean: 296.40661875596527 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1618982.8871195605,
            "unit": "iter/sec",
            "range": "stddev: 8.955971481750332e-8",
            "extra": "mean: 617.6717542574933 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.32939360170946,
            "unit": "iter/sec",
            "range": "stddev: 0.0002900542304782037",
            "extra": "mean: 3.5928652272745736 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5707535.873982368,
            "unit": "iter/sec",
            "range": "stddev: 9.487103765719029e-9",
            "extra": "mean: 175.206958323074 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.4580991017759,
            "unit": "iter/sec",
            "range": "stddev: 0.0004557740749706607",
            "extra": "mean: 3.992683820512592 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.030920872841302,
            "unit": "iter/sec",
            "range": "stddev: 0.02154016614958873",
            "extra": "mean: 124.51872155555242 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1168.1471599795682,
            "unit": "iter/sec",
            "range": "stddev: 0.00003112408165305071",
            "extra": "mean: 856.0565263177036 usec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.89348108774061,
            "unit": "iter/sec",
            "range": "stddev: 0.00007632649054465435",
            "extra": "mean: 7.9432230434795645 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 17.705726435619678,
            "unit": "iter/sec",
            "range": "stddev: 0.01692779892527876",
            "extra": "mean: 56.47890266666719 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1747.4947532255198,
            "unit": "iter/sec",
            "range": "stddev: 0.000008742168098578023",
            "extra": "mean: 572.2477839513987 usec\nrounds: 324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.72007732897458,
            "unit": "iter/sec",
            "range": "stddev: 0.0007167845929989109",
            "extra": "mean: 10.447129044444459 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.17301033508511,
            "unit": "iter/sec",
            "range": "stddev: 0.009501613977695072",
            "extra": "mean: 10.849162855423808 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7288610.059440739,
            "unit": "iter/sec",
            "range": "stddev: 4.941979752886661e-9",
            "extra": "mean: 137.2003704196781 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.33960775769712,
            "unit": "iter/sec",
            "range": "stddev: 0.0008674028478501631",
            "extra": "mean: 10.066478241379176 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.97527462480602,
            "unit": "iter/sec",
            "range": "stddev: 0.0005256779038050424",
            "extra": "mean: 16.135467023807962 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12191139.094297191,
            "unit": "iter/sec",
            "range": "stddev: 3.3366248850456775e-9",
            "extra": "mean: 82.0267894790871 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.17053452124593,
            "unit": "iter/sec",
            "range": "stddev: 0.0009417250325121287",
            "extra": "mean: 27.64681288888937 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6431387.125456236,
            "unit": "iter/sec",
            "range": "stddev: 4.292211579716555e-9",
            "extra": "mean: 155.48745247223317 nsec\nrounds: 47847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.160049221906185,
            "unit": "iter/sec",
            "range": "stddev: 0.00026783184943110245",
            "extra": "mean: 20.341720885714462 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.885555338378416,
            "unit": "iter/sec",
            "range": "stddev: 0.0027808418976789377",
            "extra": "mean: 1.1292349068000078 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2329.329491776057,
            "unit": "iter/sec",
            "range": "stddev: 0.00008759725276189024",
            "extra": "mean: 429.30809210573494 usec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.6252518077541,
            "unit": "iter/sec",
            "range": "stddev: 0.00026372005883352405",
            "extra": "mean: 3.6019778225810137 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.70761764425419,
            "unit": "iter/sec",
            "range": "stddev: 0.0007422838668720066",
            "extra": "mean: 9.929735439998808 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.88402454597139,
            "unit": "iter/sec",
            "range": "stddev: 0.012392688555889984",
            "extra": "mean: 11.12544754255577 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.0115814651303,
            "unit": "iter/sec",
            "range": "stddev: 0.0002412121674332961",
            "extra": "mean: 3.7734199934638633 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.27381644256266,
            "unit": "iter/sec",
            "range": "stddev: 0.00007036944345025378",
            "extra": "mean: 6.124680746663293 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 22.256160393917703,
            "unit": "iter/sec",
            "range": "stddev: 0.06471784899548125",
            "extra": "mean: 44.931379999997034 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3517395768031693,
            "unit": "iter/sec",
            "range": "stddev: 0.0007397118222159104",
            "extra": "mean: 739.7874688000002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 90.63951065563168,
            "unit": "iter/sec",
            "range": "stddev: 0.011226591020929563",
            "extra": "mean: 11.032716226804425 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.87178416715638,
            "unit": "iter/sec",
            "range": "stddev: 0.0000946240045717432",
            "extra": "mean: 9.62725352238817 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.9740387972089,
            "unit": "iter/sec",
            "range": "stddev: 0.00022388014080158098",
            "extra": "mean: 3.6633520330587013 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.67932567480293,
            "unit": "iter/sec",
            "range": "stddev: 0.00002826328235563551",
            "extra": "mean: 5.136652269231836 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.35740390930659,
            "unit": "iter/sec",
            "range": "stddev: 0.0004610432170653412",
            "extra": "mean: 36.55317600000103 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.27457097474047,
            "unit": "iter/sec",
            "range": "stddev: 0.00023506718720162623",
            "extra": "mean: 3.6459814573626503 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4831636698264266,
            "unit": "iter/sec",
            "range": "stddev: 0.0013009633101877863",
            "extra": "mean: 402.7120773999968 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2328.8381897430295,
            "unit": "iter/sec",
            "range": "stddev: 0.00008511088963151542",
            "extra": "mean: 429.39866084484925 usec\nrounds: 1374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.55101827654832,
            "unit": "iter/sec",
            "range": "stddev: 0.01331524679167001",
            "extra": "mean: 11.421911700002044 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.47219831688751,
            "unit": "iter/sec",
            "range": "stddev: 0.0006260071735160351",
            "extra": "mean: 10.053060221051018 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4740.644481666554,
            "unit": "iter/sec",
            "range": "stddev: 0.00004105725894359516",
            "extra": "mean: 210.94178309875159 usec\nrounds: 2130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.37436766887438,
            "unit": "iter/sec",
            "range": "stddev: 0.0005769378526111142",
            "extra": "mean: 9.96270286154037 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2395.9949682818715,
            "unit": "iter/sec",
            "range": "stddev: 0.00007885377033383621",
            "extra": "mean: 417.36314693393683 usec\nrounds: 1647"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 540.759857953585,
            "unit": "iter/sec",
            "range": "stddev: 0.00003777067892336085",
            "extra": "mean: 1.8492496905823084 msec\nrounds: 446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.862423290640514,
            "unit": "iter/sec",
            "range": "stddev: 0.00020066108486155892",
            "extra": "mean: 16.988767096155318 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.92234204473885,
            "unit": "iter/sec",
            "range": "stddev: 0.004258402717260293",
            "extra": "mean: 6.175800000000629 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 223.11541240282355,
            "unit": "iter/sec",
            "range": "stddev: 0.010851865716390933",
            "extra": "mean: 4.481985306306633 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2591358.931241204,
            "unit": "iter/sec",
            "range": "stddev: 1.4725138188578016e-8",
            "extra": "mean: 385.89791168796 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.37773870768665,
            "unit": "iter/sec",
            "range": "stddev: 0.0008165818485167002",
            "extra": "mean: 10.062615762886665 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4627477.0876597855,
            "unit": "iter/sec",
            "range": "stddev: 1.0396482046966265e-8",
            "extra": "mean: 216.10047571412917 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 112.72976660415539,
            "unit": "iter/sec",
            "range": "stddev: 0.0006008006508764461",
            "extra": "mean: 8.870771492958442 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140199.50585619351,
            "unit": "iter/sec",
            "range": "stddev: 3.09504848115776e-7",
            "extra": "mean: 7.132692757317757 usec\nrounds: 38315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 744.2947968485855,
            "unit": "iter/sec",
            "range": "stddev: 0.000023202316480838514",
            "extra": "mean: 1.343553662116267 msec\nrounds: 586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 230.46908910170913,
            "unit": "iter/sec",
            "range": "stddev: 0.0002487284913551586",
            "extra": "mean: 4.338976666665639 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.77415356640248,
            "unit": "iter/sec",
            "range": "stddev: 0.0007867808364914906",
            "extra": "mean: 10.441230360826696 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2356.828296104729,
            "unit": "iter/sec",
            "range": "stddev: 0.00008696113799488105",
            "extra": "mean: 424.29904700854104 usec\nrounds: 1404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 86.33234363134,
            "unit": "iter/sec",
            "range": "stddev: 0.0005503974795777661",
            "extra": "mean: 11.583144369047156 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.97146689426614,
            "unit": "iter/sec",
            "range": "stddev: 0.0002570918873134231",
            "extra": "mean: 3.597491538152643 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.20319654340966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000474940399573933",
            "extra": "mean: 10.080320340911765 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.0588513198128,
            "unit": "iter/sec",
            "range": "stddev: 0.0004463139326090167",
            "extra": "mean: 21.711353439025892 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.650228287234511,
            "unit": "iter/sec",
            "range": "stddev: 0.001616451098180681",
            "extra": "mean: 605.976765600002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11843.56935827275,
            "unit": "iter/sec",
            "range": "stddev: 0.000012281801758819832",
            "extra": "mean: 84.4340054716274 usec\nrounds: 4569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 191.12714582917928,
            "unit": "iter/sec",
            "range": "stddev: 0.00005439423309874629",
            "extra": "mean: 5.232119151163144 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.09620421515913,
            "unit": "iter/sec",
            "range": "stddev: 0.017129460245832624",
            "extra": "mean: 12.331033365592125 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 46.615562269330546,
            "unit": "iter/sec",
            "range": "stddev: 0.0005537514852179411",
            "extra": "mean: 21.45206345945811 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 676.6214861162143,
            "unit": "iter/sec",
            "range": "stddev: 0.00006522477731466662",
            "extra": "mean: 1.477931192726332 msec\nrounds: 550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.70084485702013,
            "unit": "iter/sec",
            "range": "stddev: 0.0007070128495832164",
            "extra": "mean: 9.643122979169286 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 400.7330147436884,
            "unit": "iter/sec",
            "range": "stddev: 0.00003209195042333329",
            "extra": "mean: 2.495427037973417 msec\nrounds: 316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.3031400918347,
            "unit": "iter/sec",
            "range": "stddev: 0.0007246980188786238",
            "extra": "mean: 9.871362319997843 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7862740819150951,
            "unit": "iter/sec",
            "range": "stddev: 0.003350529832690376",
            "extra": "mean: 1.2718211410000209 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.55955438891792,
            "unit": "iter/sec",
            "range": "stddev: 0.0007031643192373466",
            "extra": "mean: 9.94435592000002 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8093.621158835361,
            "unit": "iter/sec",
            "range": "stddev: 0.000015023577674602277",
            "extra": "mean: 123.55409036020362 usec\nrounds: 4471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2372.7222307137113,
            "unit": "iter/sec",
            "range": "stddev: 0.00008089709906179975",
            "extra": "mean: 421.45683428742586 usec\nrounds: 1400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1084344.39539889,
            "unit": "iter/sec",
            "range": "stddev: 1.374682668152412e-7",
            "extra": "mean: 922.2162296805501 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.84630365609128,
            "unit": "iter/sec",
            "range": "stddev: 0.0006340097525745689",
            "extra": "mean: 9.916079853657564 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 171.13029287372063,
            "unit": "iter/sec",
            "range": "stddev: 0.00004481439520419841",
            "extra": "mean: 5.843500780647373 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 432.09723266984196,
            "unit": "iter/sec",
            "range": "stddev: 0.000036722839501087365",
            "extra": "mean: 2.3142939236643594 msec\nrounds: 393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2376.196081038417,
            "unit": "iter/sec",
            "range": "stddev: 0.00007867966635244701",
            "extra": "mean: 420.84069070722137 usec\nrounds: 1442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9447.193681771083,
            "unit": "iter/sec",
            "range": "stddev: 0.000002517300413318696",
            "extra": "mean: 105.85154001124789 usec\nrounds: 5061"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8848675898004515,
            "unit": "iter/sec",
            "range": "stddev: 0.009262306447836974",
            "extra": "mean: 1.1301125857999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.45356185520518,
            "unit": "iter/sec",
            "range": "stddev: 0.00016838766662124663",
            "extra": "mean: 18.033106739132474 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2386.242490701775,
            "unit": "iter/sec",
            "range": "stddev: 0.00007906028716318295",
            "extra": "mean: 419.068893415735 usec\nrounds: 1473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 96.01649129162129,
            "unit": "iter/sec",
            "range": "stddev: 0.0006420322534172296",
            "extra": "mean: 10.414877554344283 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.886358466818635,
            "unit": "iter/sec",
            "range": "stddev: 0.00016015639300052148",
            "extra": "mean: 33.460081833330456 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.77898647111024,
            "unit": "iter/sec",
            "range": "stddev: 0.0006420241197762658",
            "extra": "mean: 9.729615306929361 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17576241391628264,
            "unit": "iter/sec",
            "range": "stddev: 0.07417470228927274",
            "extra": "mean: 5.689498554999989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.45290822285094,
            "unit": "iter/sec",
            "range": "stddev: 0.00003275536859069228",
            "extra": "mean: 9.30640237234026 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13570.446371940343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014604135458289218",
            "extra": "mean: 73.68954362972933 usec\nrounds: 7174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.54273583359824,
            "unit": "iter/sec",
            "range": "stddev: 0.00007553194724017988",
            "extra": "mean: 9.046275112145914 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2538507.458172696,
            "unit": "iter/sec",
            "range": "stddev: 1.6652525700603494e-8",
            "extra": "mean: 393.93226786876244 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.20997169770342,
            "unit": "iter/sec",
            "range": "stddev: 0.000058377626947175714",
            "extra": "mean: 6.484664960319764 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2373.608825894962,
            "unit": "iter/sec",
            "range": "stddev: 0.00007846488121222179",
            "extra": "mean: 421.2994108761594 usec\nrounds: 1324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2580674.337350422,
            "unit": "iter/sec",
            "range": "stddev: 1.6287243101346735e-8",
            "extra": "mean: 387.4956190816106 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2389.6206270485,
            "unit": "iter/sec",
            "range": "stddev: 0.00009541423425050845",
            "extra": "mean: 418.47646805557304 usec\nrounds: 1440"
          }
        ]
      },
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
          "id": "81f94d7e7e6bd6c2d677e516d1743fc3bce14253",
          "message": "chore(deps): update cpcloud/compare-commits-action action to v5.0.30",
          "timestamp": "2023-05-20T04:24:13-05:00",
          "tree_id": "68c7b6f01325558f22dbfd89c9ba391df1cd55ed",
          "url": "https://github.com/ibis-project/ibis/commit/81f94d7e7e6bd6c2d677e516d1743fc3bce14253"
        },
        "date": 1684575125866,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 187.5913251518293,
            "unit": "iter/sec",
            "range": "stddev: 0.004530659343341648",
            "extra": "mean: 5.3307369047616575 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 201.26671049887435,
            "unit": "iter/sec",
            "range": "stddev: 0.006527533751910924",
            "extra": "mean: 4.968531544642068 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 233.55056714189936,
            "unit": "iter/sec",
            "range": "stddev: 0.0006048131203142686",
            "extra": "mean: 4.281727988236592 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1778671.1144564506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012005990144224899",
            "extra": "mean: 562.2174846560057 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 88.9768178454628,
            "unit": "iter/sec",
            "range": "stddev: 0.001482864847055109",
            "extra": "mean: 11.238882488884075 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3964194.269282559,
            "unit": "iter/sec",
            "range": "stddev: 6.344550941990955e-7",
            "extra": "mean: 252.25807114119567 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.68735428309185,
            "unit": "iter/sec",
            "range": "stddev: 0.0006493755310944627",
            "extra": "mean: 9.200702387099755 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1957314946367976,
            "unit": "iter/sec",
            "range": "stddev: 0.007292901730174397",
            "extra": "mean: 455.4290916000241 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.7964832716786,
            "unit": "iter/sec",
            "range": "stddev: 0.00027121121059727734",
            "extra": "mean: 6.8588760000238835 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1761628.580630272,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031935457534762268",
            "extra": "mean: 567.6565486024426 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5337078.882334174,
            "unit": "iter/sec",
            "range": "stddev: 8.558976833377031e-7",
            "extra": "mean: 187.3684129553452 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 83.86984489833492,
            "unit": "iter/sec",
            "range": "stddev: 0.000872990687108245",
            "extra": "mean: 11.923236548394442 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 89.05127736778564,
            "unit": "iter/sec",
            "range": "stddev: 0.000983009148412423",
            "extra": "mean: 11.22948518604575 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 86.6746186584304,
            "unit": "iter/sec",
            "range": "stddev: 0.0009608681808181394",
            "extra": "mean: 11.537402938463751 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.26521777918195,
            "unit": "iter/sec",
            "range": "stddev: 0.001031395964523252",
            "extra": "mean: 11.202571672134715 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.45687343273395,
            "unit": "iter/sec",
            "range": "stddev: 0.0034189571494377957",
            "extra": "mean: 60.76488368750077 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9708.065547798005,
            "unit": "iter/sec",
            "range": "stddev: 0.0001090124095304111",
            "extra": "mean: 103.0071330973678 usec\nrounds: 4538"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 232.3792220385444,
            "unit": "iter/sec",
            "range": "stddev: 0.0006025163524909266",
            "extra": "mean: 4.303310731602894 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5571244040110468,
            "unit": "iter/sec",
            "range": "stddev: 0.11130382861577187",
            "extra": "mean: 1.7949312447999888 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 238.4389439806103,
            "unit": "iter/sec",
            "range": "stddev: 0.0004434004298765134",
            "extra": "mean: 4.193945767857953 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.409601911794518,
            "unit": "iter/sec",
            "range": "stddev: 0.0015752907280527132",
            "extra": "mean: 37.86501603999568 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8489.479578995371,
            "unit": "iter/sec",
            "range": "stddev: 0.000036767074420090515",
            "extra": "mean: 117.79285063294044 usec\nrounds: 5925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 96.38980600007919,
            "unit": "iter/sec",
            "range": "stddev: 0.0007550573652120318",
            "extra": "mean: 10.374541058825022 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1761.4788336870395,
            "unit": "iter/sec",
            "range": "stddev: 0.00012941023525665722",
            "extra": "mean: 567.7048062546685 usec\nrounds: 1311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.052312474386245,
            "unit": "iter/sec",
            "range": "stddev: 0.0015308443165717703",
            "extra": "mean: 43.379595913039715 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 98.53418470204201,
            "unit": "iter/sec",
            "range": "stddev: 0.0008510787887459442",
            "extra": "mean: 10.14876210752547 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1765.705822280147,
            "unit": "iter/sec",
            "range": "stddev: 0.00015104316592403142",
            "extra": "mean: 566.3457566836635 usec\nrounds: 1122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1017.665485547027,
            "unit": "iter/sec",
            "range": "stddev: 0.00007490926616780306",
            "extra": "mean: 982.6411666722379 usec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 182.8067259846341,
            "unit": "iter/sec",
            "range": "stddev: 0.0008041397255938515",
            "extra": "mean: 5.470258244677799 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.739188934879185,
            "unit": "iter/sec",
            "range": "stddev: 0.002586457091510368",
            "extra": "mean: 129.21250642857072 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6988.8727725308445,
            "unit": "iter/sec",
            "range": "stddev: 0.000054801571114475705",
            "extra": "mean: 143.08459068398165 usec\nrounds: 3027"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1784.7775552100961,
            "unit": "iter/sec",
            "range": "stddev: 0.0002429931916191829",
            "extra": "mean: 560.293912863715 usec\nrounds: 1205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.39260474921775,
            "unit": "iter/sec",
            "range": "stddev: 0.0007549927161177276",
            "extra": "mean: 9.862652236554906 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 671.8229976776789,
            "unit": "iter/sec",
            "range": "stddev: 0.00023341635121914973",
            "extra": "mean: 1.4884873001620151 msec\nrounds: 613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 87.23389791969389,
            "unit": "iter/sec",
            "range": "stddev: 0.0014207649251608092",
            "extra": "mean: 11.463433640447706 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1832.0026771226928,
            "unit": "iter/sec",
            "range": "stddev: 0.00016758036726535262",
            "extra": "mean: 545.850730726322 usec\nrounds: 1790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.30429866747408,
            "unit": "iter/sec",
            "range": "stddev: 0.0012211481577112256",
            "extra": "mean: 19.879016833338408 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 41.55027511267759,
            "unit": "iter/sec",
            "range": "stddev: 0.0015524580797305946",
            "extra": "mean: 24.067229333335643 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.88112681002329,
            "unit": "iter/sec",
            "range": "stddev: 0.0009573872930608913",
            "extra": "mean: 16.699752547619287 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 90.24188850910714,
            "unit": "iter/sec",
            "range": "stddev: 0.0012231746282386677",
            "extra": "mean: 11.08132837777526 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.52944846053269,
            "unit": "iter/sec",
            "range": "stddev: 0.0016860564134885427",
            "extra": "mean: 32.755259279995244 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1489.2504023019144,
            "unit": "iter/sec",
            "range": "stddev: 0.0003021321947956213",
            "extra": "mean: 671.4787509570676 usec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1690130.9910854588,
            "unit": "iter/sec",
            "range": "stddev: 0.00000817505607104277",
            "extra": "mean: 591.6701162658205 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 120.33330004963938,
            "unit": "iter/sec",
            "range": "stddev: 0.018712462578274493",
            "extra": "mean: 8.310251606059872 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6345180.714866305,
            "unit": "iter/sec",
            "range": "stddev: 6.254362366916702e-8",
            "extra": "mean: 157.5999242476045 nsec\nrounds: 58480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1831.1793187245494,
            "unit": "iter/sec",
            "range": "stddev: 0.00011990199995932043",
            "extra": "mean: 546.0961631526718 usec\nrounds: 1091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.47137207346329,
            "unit": "iter/sec",
            "range": "stddev: 0.0016503282126861688",
            "extra": "mean: 11.699823879514797 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.359712457583434,
            "unit": "iter/sec",
            "range": "stddev: 0.0019281865753672561",
            "extra": "mean: 27.502967774197376 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 276.335374483652,
            "unit": "iter/sec",
            "range": "stddev: 0.0005387299835608714",
            "extra": "mean: 3.6187911224487834 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 994245.9198025533,
            "unit": "iter/sec",
            "range": "stddev: 0.000005129046275842931",
            "extra": "mean: 1.0057873812533116 usec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10527875.422438985,
            "unit": "iter/sec",
            "range": "stddev: 3.0239562970921347e-7",
            "extra": "mean: 94.9859263977642 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 89.4668404735051,
            "unit": "iter/sec",
            "range": "stddev: 0.001121165410148619",
            "extra": "mean: 11.177325528737567 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 586.7994836440625,
            "unit": "iter/sec",
            "range": "stddev: 0.0002897475454070681",
            "extra": "mean: 1.7041596454549273 msec\nrounds: 550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 87.77001570124442,
            "unit": "iter/sec",
            "range": "stddev: 0.0011366886621910386",
            "extra": "mean: 11.393412568180977 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 71.60550510670846,
            "unit": "iter/sec",
            "range": "stddev: 0.0015104154187989848",
            "extra": "mean: 13.965406689189232 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.6715196941571,
            "unit": "iter/sec",
            "range": "stddev: 0.0012680791815796162",
            "extra": "mean: 11.15181278750157 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.63798118809498,
            "unit": "iter/sec",
            "range": "stddev: 0.00143073877851533",
            "extra": "mean: 26.56890641935661 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.2568837564213,
            "unit": "iter/sec",
            "range": "stddev: 0.001394164805903991",
            "extra": "mean: 11.330560942530933 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 190.54964203183422,
            "unit": "iter/sec",
            "range": "stddev: 0.010780260629036564",
            "extra": "mean: 5.2479762718889535 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6799221479186576,
            "unit": "iter/sec",
            "range": "stddev: 0.011525408012968698",
            "extra": "mean: 1.4707566197999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 86.76340184280579,
            "unit": "iter/sec",
            "range": "stddev: 0.001689553470628482",
            "extra": "mean: 11.525596954021664 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.06234005973536,
            "unit": "iter/sec",
            "range": "stddev: 0.0014197225474365",
            "extra": "mean: 11.895933414289823 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11469578671132079,
            "unit": "iter/sec",
            "range": "stddev: 0.14099572318330797",
            "extra": "mean: 8.718716080800004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 82.39434881355561,
            "unit": "iter/sec",
            "range": "stddev: 0.001141698060507962",
            "extra": "mean: 12.136754697374087 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 222.16977985879325,
            "unit": "iter/sec",
            "range": "stddev: 0.0005632670051520091",
            "extra": "mean: 4.501062208530702 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1778.8697794062848,
            "unit": "iter/sec",
            "range": "stddev: 0.0001308837487227688",
            "extra": "mean: 562.1546959630513 usec\nrounds: 1684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1826.6939294333883,
            "unit": "iter/sec",
            "range": "stddev: 0.00019910705242619567",
            "extra": "mean: 547.4370850458698 usec\nrounds: 1752"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 144.43885756875673,
            "unit": "iter/sec",
            "range": "stddev: 0.0005693582447645277",
            "extra": "mean: 6.923344706766137 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11836.313274407989,
            "unit": "iter/sec",
            "range": "stddev: 0.00006285554577621123",
            "extra": "mean: 84.48576654034332 usec\nrounds: 6605"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3449.816068756039,
            "unit": "iter/sec",
            "range": "stddev: 0.00029050047300667334",
            "extra": "mean: 289.8705264482659 usec\nrounds: 1966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1617027.5096973008,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018746036177726693",
            "extra": "mean: 618.4186688247468 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1528661738781325,
            "unit": "iter/sec",
            "range": "stddev: 0.0194891778299425",
            "extra": "mean: 867.4033661999943 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 208.1397669447992,
            "unit": "iter/sec",
            "range": "stddev: 0.0006142879671991448",
            "extra": "mean: 4.804463917100524 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 87.8264041295131,
            "unit": "iter/sec",
            "range": "stddev: 0.0012393922191403495",
            "extra": "mean: 11.386097494386213 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5160389.095413907,
            "unit": "iter/sec",
            "range": "stddev: 1.1344391725998781e-7",
            "extra": "mean: 193.78383713132507 nsec\nrounds: 26525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1910797639075559,
            "unit": "iter/sec",
            "range": "stddev: 0.006255172281236748",
            "extra": "mean: 839.5743344000039 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 162.893863025611,
            "unit": "iter/sec",
            "range": "stddev: 0.0006258338453309546",
            "extra": "mean: 6.138966695404448 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 47.976090443670785,
            "unit": "iter/sec",
            "range": "stddev: 0.0016390756957827648",
            "extra": "mean: 20.843715916662912 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1789.8452726369026,
            "unit": "iter/sec",
            "range": "stddev: 0.00017507351555854752",
            "extra": "mean: 558.70751248053 usec\nrounds: 1282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 447.77990668664523,
            "unit": "iter/sec",
            "range": "stddev: 0.00039305883828598506",
            "extra": "mean: 2.233240002660049 msec\nrounds: 376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6775588390378232,
            "unit": "iter/sec",
            "range": "stddev: 0.005403331041472072",
            "extra": "mean: 1.4758865833999948 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 82.02548286717006,
            "unit": "iter/sec",
            "range": "stddev: 0.0014241526453984963",
            "extra": "mean: 12.191333291135564 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 88.05523252268519,
            "unit": "iter/sec",
            "range": "stddev: 0.0013922728697859845",
            "extra": "mean: 11.356508538460512 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.45934094488157,
            "unit": "iter/sec",
            "range": "stddev: 0.0010479675614863122",
            "extra": "mean: 11.566130265063052 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 144.04220515455157,
            "unit": "iter/sec",
            "range": "stddev: 0.004163781491690468",
            "extra": "mean: 6.942409684210539 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 225.30426919129917,
            "unit": "iter/sec",
            "range": "stddev: 0.000666719626101253",
            "extra": "mean: 4.438442305551386 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4961940.500839697,
            "unit": "iter/sec",
            "range": "stddev: 4.725245770481077e-7",
            "extra": "mean: 201.53405705509982 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.78861683613984,
            "unit": "iter/sec",
            "range": "stddev: 0.0013635343165832549",
            "extra": "mean: 11.262705013701346 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 150.99021757390724,
            "unit": "iter/sec",
            "range": "stddev: 0.00079830277040385",
            "extra": "mean: 6.622945619046587 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 341.5571976095331,
            "unit": "iter/sec",
            "range": "stddev: 0.00045350109554676574",
            "extra": "mean: 2.9277673168615124 msec\nrounds: 344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1785.1558310860137,
            "unit": "iter/sec",
            "range": "stddev: 0.000187867616582842",
            "extra": "mean: 560.1751861581978 usec\nrounds: 1257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139932.93489552,
            "unit": "iter/sec",
            "range": "stddev: 0.000005283443055674389",
            "extra": "mean: 7.146280471760585 usec\nrounds: 39840"
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "69899cabd3aa2f52c58a2a469aa7e6cec4e1a585",
          "message": "test(bigquery): xfail using correct error for interval operation",
          "timestamp": "2023-05-20T05:45:28-04:00",
          "tree_id": "c534cb01386f941023179f5ef3ab796610fae45b",
          "url": "https://github.com/ibis-project/ibis/commit/69899cabd3aa2f52c58a2a469aa7e6cec4e1a585"
        },
        "date": 1684576153436,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.8323670627852,
            "unit": "iter/sec",
            "range": "stddev: 0.010137815737619326",
            "extra": "mean: 11.25715809523816 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 276.73796562077786,
            "unit": "iter/sec",
            "range": "stddev: 0.00029356550473515154",
            "extra": "mean: 3.613526599997954 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 105.33573361406684,
            "unit": "iter/sec",
            "range": "stddev: 0.0006740188313463689",
            "extra": "mean: 9.493454554214612 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8140.223884096899,
            "unit": "iter/sec",
            "range": "stddev: 0.00006175908049694817",
            "extra": "mean: 122.84674405008 usec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.147828102002876,
            "unit": "iter/sec",
            "range": "stddev: 0.014976258038243742",
            "extra": "mean: 23.176137571419986 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.78196893206449,
            "unit": "iter/sec",
            "range": "stddev: 0.00026498336715347884",
            "extra": "mean: 10.123305000001892 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 260.4613043301001,
            "unit": "iter/sec",
            "range": "stddev: 0.00030720423468402975",
            "extra": "mean: 3.8393419036734637 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 238.92206327235164,
            "unit": "iter/sec",
            "range": "stddev: 0.00025033143569408906",
            "extra": "mean: 4.185465278106534 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.6873301489988,
            "unit": "iter/sec",
            "range": "stddev: 0.00002168260777612371",
            "extra": "mean: 5.0078289857140135 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.3735796284144,
            "unit": "iter/sec",
            "range": "stddev: 0.00002594607515296041",
            "extra": "mean: 1.8678545935981148 msec\nrounds: 406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.06442601794531,
            "unit": "iter/sec",
            "range": "stddev: 0.0006444760634838402",
            "extra": "mean: 10.30243561956591 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.9192258539624,
            "unit": "iter/sec",
            "range": "stddev: 0.0006400478799986743",
            "extra": "mean: 9.811691480397192 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.55518251195434,
            "unit": "iter/sec",
            "range": "stddev: 0.00010464021355916719",
            "extra": "mean: 6.189835475726721 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2074.351284214895,
            "unit": "iter/sec",
            "range": "stddev: 0.00013151166370731917",
            "extra": "mean: 482.0784250043175 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2125.6166026280503,
            "unit": "iter/sec",
            "range": "stddev: 0.00008010200919046822",
            "extra": "mean: 470.45172622552406 usec\nrounds: 1735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 106.20641797241858,
            "unit": "iter/sec",
            "range": "stddev: 0.00017481264777234582",
            "extra": "mean: 9.415626843376796 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.936717566854746,
            "unit": "iter/sec",
            "range": "stddev: 0.00009026949957041166",
            "extra": "mean: 52.8074623529432 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.638986834255554,
            "unit": "iter/sec",
            "range": "stddev: 0.0004712488321621314",
            "extra": "mean: 17.34936810869978 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.63737401014356,
            "unit": "iter/sec",
            "range": "stddev: 0.00008589085821073798",
            "extra": "mean: 6.073954993587231 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1753744.0789183886,
            "unit": "iter/sec",
            "range": "stddev: 8.176605318994708e-8",
            "extra": "mean: 570.2086250901237 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.78640655214866,
            "unit": "iter/sec",
            "range": "stddev: 0.0006419946990825972",
            "extra": "mean: 9.364487787232118 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.49792587499024,
            "unit": "iter/sec",
            "range": "stddev: 0.0007561518773755479",
            "extra": "mean: 9.95045411428594 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2706335.883190634,
            "unit": "iter/sec",
            "range": "stddev: 1.5957941475593728e-8",
            "extra": "mean: 369.5032853133224 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 286.754510724794,
            "unit": "iter/sec",
            "range": "stddev: 0.0002520105521123691",
            "extra": "mean: 3.487303468993124 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 98.3957842187569,
            "unit": "iter/sec",
            "range": "stddev: 0.000713877491029819",
            "extra": "mean: 10.16303704411528 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 86.95284358613307,
            "unit": "iter/sec",
            "range": "stddev: 0.017967418787616908",
            "extra": "mean: 11.5004864563104 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.13679841873908,
            "unit": "iter/sec",
            "range": "stddev: 0.0007881753034117919",
            "extra": "mean: 10.401844210001059 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12629.539544728721,
            "unit": "iter/sec",
            "range": "stddev: 0.000011113798537669493",
            "extra": "mean: 79.17945040342956 usec\nrounds: 3972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 176.25839574227157,
            "unit": "iter/sec",
            "range": "stddev: 0.00004865792416282581",
            "extra": "mean: 5.673488606251809 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.75574620718798,
            "unit": "iter/sec",
            "range": "stddev: 0.017972250408399882",
            "extra": "mean: 11.798610061853148 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148387.25012797318,
            "unit": "iter/sec",
            "range": "stddev: 2.9173558848203727e-7",
            "extra": "mean: 6.739123470093103 usec\nrounds: 33004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.01787649406963,
            "unit": "iter/sec",
            "range": "stddev: 0.0008277826138367234",
            "extra": "mean: 9.99821267010496 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.41794676488115,
            "unit": "iter/sec",
            "range": "stddev: 0.0007072587491528382",
            "extra": "mean: 9.396911239129533 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.66630308620785,
            "unit": "iter/sec",
            "range": "stddev: 0.0007798801510995447",
            "extra": "mean: 9.933810712643611 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.1259167147222,
            "unit": "iter/sec",
            "range": "stddev: 0.00011327629789592645",
            "extra": "mean: 1.3603111756268915 msec\nrounds: 558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.69536574543176,
            "unit": "iter/sec",
            "range": "stddev: 0.00008053160398848117",
            "extra": "mean: 9.643632507695306 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 286.07069593516457,
            "unit": "iter/sec",
            "range": "stddev: 0.00024643223345756593",
            "extra": "mean: 3.4956394143447715 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11655875.504257556,
            "unit": "iter/sec",
            "range": "stddev: 4.047061812349145e-9",
            "extra": "mean: 85.79364112413698 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5574370.529475189,
            "unit": "iter/sec",
            "range": "stddev: 1.0705131133922236e-8",
            "extra": "mean: 179.39245242360548 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4456.927222587898,
            "unit": "iter/sec",
            "range": "stddev: 0.000028840831571188728",
            "extra": "mean: 224.36982926980664 usec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1162.6553080396682,
            "unit": "iter/sec",
            "range": "stddev: 0.000012932382430318291",
            "extra": "mean: 860.1001458343502 usec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 684.3101228907641,
            "unit": "iter/sec",
            "range": "stddev: 0.000020711949800067205",
            "extra": "mean: 1.4613257447890031 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 280.66425633914645,
            "unit": "iter/sec",
            "range": "stddev: 0.0002278629105902031",
            "extra": "mean: 3.5629759665285956 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.98550558415933,
            "unit": "iter/sec",
            "range": "stddev: 0.000746633052448752",
            "extra": "mean: 10.41823964893541 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1736.4843930648105,
            "unit": "iter/sec",
            "range": "stddev: 0.000007279905286155516",
            "extra": "mean: 575.8761806289826 usec\nrounds: 382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.413078650752524,
            "unit": "iter/sec",
            "range": "stddev: 0.0007966055563403861",
            "extra": "mean: 23.577632933332403 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5907850115581932,
            "unit": "iter/sec",
            "range": "stddev: 0.001303073924142096",
            "extra": "mean: 628.6204564000059 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9174730572086544,
            "unit": "iter/sec",
            "range": "stddev: 0.009202112742965987",
            "extra": "mean: 1.0899502630000142 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16898301592948878,
            "unit": "iter/sec",
            "range": "stddev: 0.08091790800445246",
            "extra": "mean: 5.917754482600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13940.550390756878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015808442294071717",
            "extra": "mean: 71.73317924829126 usec\nrounds: 2795"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.98422548230084,
            "unit": "iter/sec",
            "range": "stddev: 0.000569860625184064",
            "extra": "mean: 11.630040212502024 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2700844.0005786284,
            "unit": "iter/sec",
            "range": "stddev: 1.6868656127009126e-8",
            "extra": "mean: 370.2546314356345 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.68020447463464,
            "unit": "iter/sec",
            "range": "stddev: 0.00031339006182452606",
            "extra": "mean: 7.956702522725643 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.94906069950687,
            "unit": "iter/sec",
            "range": "stddev: 0.0006652056171418514",
            "extra": "mean: 9.52843211110987 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.48781548900261,
            "unit": "iter/sec",
            "range": "stddev: 0.00016956895223833458",
            "extra": "mean: 8.969590045457856 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1984.9817269603,
            "unit": "iter/sec",
            "range": "stddev: 0.00009206718016456228",
            "extra": "mean: 503.7829751366775 usec\nrounds: 1287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.063629075116985,
            "unit": "iter/sec",
            "range": "stddev: 0.0005686033967614294",
            "extra": "mean: 38.36764239998729 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6155634.061948972,
            "unit": "iter/sec",
            "range": "stddev: 6.393363194234688e-9",
            "extra": "mean: 162.45280176418967 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 316.9480876124793,
            "unit": "iter/sec",
            "range": "stddev: 0.00003541720989771481",
            "extra": "mean: 3.1550908148171666 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1032557.0714982166,
            "unit": "iter/sec",
            "range": "stddev: 1.1187529054933928e-7",
            "extra": "mean: 968.4694702143901 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 192.03356827630537,
            "unit": "iter/sec",
            "range": "stddev: 0.000045194811314099874",
            "extra": "mean: 5.2074228947366175 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6039426.58846179,
            "unit": "iter/sec",
            "range": "stddev: 8.092317914483656e-9",
            "extra": "mean: 165.57863322811653 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4532925.682895916,
            "unit": "iter/sec",
            "range": "stddev: 1.243859245159972e-8",
            "extra": "mean: 220.60807301019076 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.5987752974296,
            "unit": "iter/sec",
            "range": "stddev: 0.0038455577070651303",
            "extra": "mean: 6.150107823203316 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1936920.7766491056,
            "unit": "iter/sec",
            "range": "stddev: 8.260233891267109e-8",
            "extra": "mean: 516.2833772323983 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 285.56269582159354,
            "unit": "iter/sec",
            "range": "stddev: 0.00025501708812211373",
            "extra": "mean: 3.501857961954366 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7677696315696712,
            "unit": "iter/sec",
            "range": "stddev: 0.0031124027552457533",
            "extra": "mean: 1.30247402199999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.4299216410115,
            "unit": "iter/sec",
            "range": "stddev: 0.0006197777099526602",
            "extra": "mean: 27.44996296874369 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2105.7197705410135,
            "unit": "iter/sec",
            "range": "stddev: 0.00008637448338544415",
            "extra": "mean: 474.8969991116502 usec\nrounds: 1127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 229.06206122685683,
            "unit": "iter/sec",
            "range": "stddev: 0.004076741157652477",
            "extra": "mean: 4.365629099135832 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2107.097868836316,
            "unit": "iter/sec",
            "range": "stddev: 0.00008654853607516436",
            "extra": "mean: 474.5864037878167 usec\nrounds: 1320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2123.901700045913,
            "unit": "iter/sec",
            "range": "stddev: 0.00008736257340346808",
            "extra": "mean: 470.8315832029245 usec\nrounds: 1274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2185.856128234353,
            "unit": "iter/sec",
            "range": "stddev: 0.00008282315351797758",
            "extra": "mean: 457.4866511492501 usec\nrounds: 1697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9848.64045950833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031247243189741872",
            "extra": "mean: 101.53685720495098 usec\nrounds: 4622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9216928927506419,
            "unit": "iter/sec",
            "range": "stddev: 0.005473130032377034",
            "extra": "mean: 1.0849600858000144 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 80.73706920497388,
            "unit": "iter/sec",
            "range": "stddev: 0.025130357722573472",
            "extra": "mean: 12.385884326085918 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5042060268797406,
            "unit": "iter/sec",
            "range": "stddev: 0.0029027075909578083",
            "extra": "mean: 399.3281659999866 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.39529066879248,
            "unit": "iter/sec",
            "range": "stddev: 0.0006601724457087246",
            "extra": "mean: 9.862390978950867 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.39244698582733,
            "unit": "iter/sec",
            "range": "stddev: 0.0007361925298213249",
            "extra": "mean: 9.862667582524962 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7110920.947726579,
            "unit": "iter/sec",
            "range": "stddev: 3.511267738193498e-9",
            "extra": "mean: 140.62876065574366 nsec\nrounds: 33784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.629056095368579,
            "unit": "iter/sec",
            "range": "stddev: 0.00030257718330283445",
            "extra": "mean: 115.88753033332624 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2144.423473985335,
            "unit": "iter/sec",
            "range": "stddev: 0.00008148357385216223",
            "extra": "mean: 466.3258037096262 usec\nrounds: 1294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.284838423071638,
            "unit": "iter/sec",
            "range": "stddev: 0.09120568904233753",
            "extra": "mean: 778.3079818000147 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2177.2835396716637,
            "unit": "iter/sec",
            "range": "stddev: 0.00008145591211776904",
            "extra": "mean: 459.28790705449455 usec\nrounds: 1205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 279.1242609035041,
            "unit": "iter/sec",
            "range": "stddev: 0.00023817301276080643",
            "extra": "mean: 3.5826337587534516 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.92057981917266,
            "unit": "iter/sec",
            "range": "stddev: 0.0001766326191543209",
            "extra": "mean: 18.545794636363087 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 420.6055097686473,
            "unit": "iter/sec",
            "range": "stddev: 0.00005120935527376313",
            "extra": "mean: 2.377524727505464 msec\nrounds: 389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.67623047608354,
            "unit": "iter/sec",
            "range": "stddev: 0.03930393789437903",
            "extra": "mean: 28.02986713157308 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.96316414979682,
            "unit": "iter/sec",
            "range": "stddev: 0.00007480248532890984",
            "extra": "mean: 9.093954395835269 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.1358128758767,
            "unit": "iter/sec",
            "range": "stddev: 0.0002446845898705334",
            "extra": "mean: 3.701841637930047 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.34978622953338,
            "unit": "iter/sec",
            "range": "stddev: 0.0004614020609389213",
            "extra": "mean: 14.847857075476398 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.04437322583564,
            "unit": "iter/sec",
            "range": "stddev: 0.0001152824960890424",
            "extra": "mean: 33.28410256666909 msec\nrounds: 30"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "e04c38c9c5cfe95c4015efde3d14f2d786665970",
          "message": "feat(api): raise better error on column name collision in joins",
          "timestamp": "2023-05-20T05:08:35-05:00",
          "tree_id": "5e9e3a424142ce830df97d0895d44a23c859b980",
          "url": "https://github.com/ibis-project/ibis/commit/e04c38c9c5cfe95c4015efde3d14f2d786665970"
        },
        "date": 1684578205075,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.776716550925556,
            "unit": "iter/sec",
            "range": "stddev: 0.00016622263513155252",
            "extra": "mean: 18.59540827586635 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1942621.6470584688,
            "unit": "iter/sec",
            "range": "stddev: 7.92651511138011e-8",
            "extra": "mean: 514.7682779681812 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2087.1585354893414,
            "unit": "iter/sec",
            "range": "stddev: 0.00011761178719545418",
            "extra": "mean: 479.1202886586412 usec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2218.6987570436463,
            "unit": "iter/sec",
            "range": "stddev: 0.00007896417833347829",
            "extra": "mean: 450.7146347945279 usec\nrounds: 753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.508386298196,
            "unit": "iter/sec",
            "range": "stddev: 0.00015331800160824189",
            "extra": "mean: 6.472140599993281 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3542490570915067,
            "unit": "iter/sec",
            "range": "stddev: 0.00030458793156260656",
            "extra": "mean: 738.416611599996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1752125.8463742454,
            "unit": "iter/sec",
            "range": "stddev: 9.282127289392461e-8",
            "extra": "mean: 570.7352597242635 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.801229177218472,
            "unit": "iter/sec",
            "range": "stddev: 0.003015905104036991",
            "extra": "mean: 1.2480823569999984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1139.6282838403868,
            "unit": "iter/sec",
            "range": "stddev: 0.00004370458622503945",
            "extra": "mean: 877.4790992639644 usec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2727386.1636565835,
            "unit": "iter/sec",
            "range": "stddev: 4.426375778145572e-8",
            "extra": "mean: 366.6514164090559 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.12680722759387,
            "unit": "iter/sec",
            "range": "stddev: 0.00015844761733286493",
            "extra": "mean: 10.512283857141012 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2148.6844152895974,
            "unit": "iter/sec",
            "range": "stddev: 0.00009868292714979914",
            "extra": "mean: 465.4010579144173 usec\nrounds: 518"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1892190.908662342,
            "unit": "iter/sec",
            "range": "stddev: 4.1597683566245214e-7",
            "extra": "mean: 528.4879001490057 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.60498485423919,
            "unit": "iter/sec",
            "range": "stddev: 0.00010862939224282667",
            "extra": "mean: 9.04118382474217 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2197.547578325284,
            "unit": "iter/sec",
            "range": "stddev: 0.00008008901285788515",
            "extra": "mean: 455.05271870476815 usec\nrounds: 1390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 127.27500694169869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000724211663718822",
            "extra": "mean: 7.857002124997514 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.9590119645927,
            "unit": "iter/sec",
            "range": "stddev: 0.00023210263357740303",
            "extra": "mean: 3.571951454545329 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.5527398932852,
            "unit": "iter/sec",
            "range": "stddev: 0.00006482385642951942",
            "extra": "mean: 1.8637496850708277 msec\nrounds: 489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12412.955247516571,
            "unit": "iter/sec",
            "range": "stddev: 0.000020584826156732375",
            "extra": "mean: 80.56099293518903 usec\nrounds: 4671"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.924187904406118,
            "unit": "iter/sec",
            "range": "stddev: 0.0003148500251255043",
            "extra": "mean: 52.84242605555455 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8553.46389113366,
            "unit": "iter/sec",
            "range": "stddev: 0.000012676116534117927",
            "extra": "mean: 116.91169948546562 usec\nrounds: 4276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 272.8351947625772,
            "unit": "iter/sec",
            "range": "stddev: 0.00033953073061524197",
            "extra": "mean: 3.6652162887937014 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5411660307846056,
            "unit": "iter/sec",
            "range": "stddev: 0.0022075900561529605",
            "extra": "mean: 393.52013519999787 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 98.75751075384447,
            "unit": "iter/sec",
            "range": "stddev: 0.0008206856679790725",
            "extra": "mean: 10.125812126760916 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.7117556635501,
            "unit": "iter/sec",
            "range": "stddev: 0.0007116891822225664",
            "extra": "mean: 10.028907758622012 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.4726690278889,
            "unit": "iter/sec",
            "range": "stddev: 0.00016463175782542325",
            "extra": "mean: 9.1347000934566 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.53657714385045,
            "unit": "iter/sec",
            "range": "stddev: 0.00009774692822434475",
            "extra": "mean: 5.762473920244869 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 415.85974719804034,
            "unit": "iter/sec",
            "range": "stddev: 0.000032551348996969786",
            "extra": "mean: 2.4046568746740977 msec\nrounds: 383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 235.2951070729012,
            "unit": "iter/sec",
            "range": "stddev: 0.0002718698647863942",
            "extra": "mean: 4.249982128570872 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148394.60975810513,
            "unit": "iter/sec",
            "range": "stddev: 4.617163593186452e-7",
            "extra": "mean: 6.738789243289083 usec\nrounds: 37038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.6928121452274,
            "unit": "iter/sec",
            "range": "stddev: 0.014513807309505465",
            "extra": "mean: 10.9059802682914 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5590945.733443519,
            "unit": "iter/sec",
            "range": "stddev: 8.272446116421978e-9",
            "extra": "mean: 178.86061637443478 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4509770.63050883,
            "unit": "iter/sec",
            "range": "stddev: 1.1206747426507557e-8",
            "extra": "mean: 221.74076730955116 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.119736492299,
            "unit": "iter/sec",
            "range": "stddev: 0.0009526699755192701",
            "extra": "mean: 9.792426364862502 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2092.985552307698,
            "unit": "iter/sec",
            "range": "stddev: 0.00008845066917238227",
            "extra": "mean: 477.78638457270443 usec\nrounds: 1841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.73105713654914,
            "unit": "iter/sec",
            "range": "stddev: 0.0006850114714114047",
            "extra": "mean: 9.829839855667123 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.82470550685115,
            "unit": "iter/sec",
            "range": "stddev: 0.0007328605939444402",
            "extra": "mean: 9.631618940002795 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6173925.805227196,
            "unit": "iter/sec",
            "range": "stddev: 7.3756325510826864e-9",
            "extra": "mean: 161.97149618351 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.533376902860022,
            "unit": "iter/sec",
            "range": "stddev: 0.0009384448376971097",
            "extra": "mean: 117.18690166665941 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.56087663626349,
            "unit": "iter/sec",
            "range": "stddev: 0.000579117755348546",
            "extra": "mean: 9.75030667441097 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.3186271654292,
            "unit": "iter/sec",
            "range": "stddev: 0.00001226961147205659",
            "extra": "mean: 1.3309932215747058 msec\nrounds: 686"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.31936006980436,
            "unit": "iter/sec",
            "range": "stddev: 0.0005751762084498391",
            "extra": "mean: 11.720669250001947 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 284.9888358824997,
            "unit": "iter/sec",
            "range": "stddev: 0.0002523850706050453",
            "extra": "mean: 3.508909382023294 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.7044176427822,
            "unit": "iter/sec",
            "range": "stddev: 0.00006060318107239579",
            "extra": "mean: 6.1841229483852365 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.496491001777294,
            "unit": "iter/sec",
            "range": "stddev: 0.00036123423660326296",
            "extra": "mean: 20.620048571418334 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.02607377583635,
            "unit": "iter/sec",
            "range": "stddev: 0.0007951061961567497",
            "extra": "mean: 9.997393302080937 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 79.66434744186223,
            "unit": "iter/sec",
            "range": "stddev: 0.018579706937097172",
            "extra": "mean: 12.55266668354729 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.16414011929357,
            "unit": "iter/sec",
            "range": "stddev: 0.0006021415841273963",
            "extra": "mean: 27.65170129032046 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 98.38091586386912,
            "unit": "iter/sec",
            "range": "stddev: 0.0007063623150968181",
            "extra": "mean: 10.164572988766563 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2108.9254679824494,
            "unit": "iter/sec",
            "range": "stddev: 0.00009158433979627386",
            "extra": "mean: 474.1751262346281 usec\nrounds: 1418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 93.55391247661424,
            "unit": "iter/sec",
            "range": "stddev: 0.0009569911246029271",
            "extra": "mean: 10.689023831579155 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.33055883887029,
            "unit": "iter/sec",
            "range": "stddev: 0.00013728915538807284",
            "extra": "mean: 9.584919424656924 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.34574156340267,
            "unit": "iter/sec",
            "range": "stddev: 0.000627176961185704",
            "extra": "mean: 9.492552666669937 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.96372178597102,
            "unit": "iter/sec",
            "range": "stddev: 0.0006168413354063495",
            "extra": "mean: 15.159848063828887 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.47154720258551,
            "unit": "iter/sec",
            "range": "stddev: 0.000784236362717686",
            "extra": "mean: 9.571984207918877 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7079129.434758475,
            "unit": "iter/sec",
            "range": "stddev: 4.83653522948757e-9",
            "extra": "mean: 141.26030738892874 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1048401.106669293,
            "unit": "iter/sec",
            "range": "stddev: 1.3941465783845878e-7",
            "extra": "mean: 953.8334074989101 nsec\nrounds: 76336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9628057260615159,
            "unit": "iter/sec",
            "range": "stddev: 0.00318800294481677",
            "extra": "mean: 1.0386311308000131 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1756.2854093445453,
            "unit": "iter/sec",
            "range": "stddev: 0.000006568394129699663",
            "extra": "mean: 569.3835379371541 usec\nrounds: 1318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 277.5266021579183,
            "unit": "iter/sec",
            "range": "stddev: 0.00026856282292704256",
            "extra": "mean: 3.6032581821867278 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.80568919448741,
            "unit": "iter/sec",
            "range": "stddev: 0.00048482521632323855",
            "extra": "mean: 33.5506417407369 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 316.5840125657471,
            "unit": "iter/sec",
            "range": "stddev: 0.000022660757953166403",
            "extra": "mean: 3.1587192034604823 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 227.09911424137135,
            "unit": "iter/sec",
            "range": "stddev: 0.0035297331317197876",
            "extra": "mean: 4.403363717822141 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 146.52329167210812,
            "unit": "iter/sec",
            "range": "stddev: 0.019535443484695866",
            "extra": "mean: 6.824853500000628 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.04585429500074,
            "unit": "iter/sec",
            "range": "stddev: 0.0008171268489335634",
            "extra": "mean: 10.096333734691955 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.20437015205122,
            "unit": "iter/sec",
            "range": "stddev: 0.0015198818488778403",
            "extra": "mean: 26.175016000003588 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6167753.266607118,
            "unit": "iter/sec",
            "range": "stddev: 6.64709340754485e-9",
            "extra": "mean: 162.1335933480923 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13817.953093302809,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053202296409859805",
            "extra": "mean: 72.36961894773496 usec\nrounds: 5721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2119.305752409598,
            "unit": "iter/sec",
            "range": "stddev: 0.00009761598754299527",
            "extra": "mean: 471.8526332800375 usec\nrounds: 1238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.64407625895757,
            "unit": "iter/sec",
            "range": "stddev: 0.03210909585300421",
            "extra": "mean: 26.564604564099135 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4570.535903045434,
            "unit": "iter/sec",
            "range": "stddev: 0.00003813741609825726",
            "extra": "mean: 218.7927239196789 usec\nrounds: 2684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.8440331683067,
            "unit": "iter/sec",
            "range": "stddev: 0.000022609428585740556",
            "extra": "mean: 1.466611059648533 msec\nrounds: 570"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17139221424301007,
            "unit": "iter/sec",
            "range": "stddev: 0.14835769847878097",
            "extra": "mean: 5.83457075 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 287.6210636862841,
            "unit": "iter/sec",
            "range": "stddev: 0.00022626407676934934",
            "extra": "mean: 3.4767968214272593 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10964396.317629108,
            "unit": "iter/sec",
            "range": "stddev: 3.2072394838323017e-9",
            "extra": "mean: 91.2042916940186 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.28993835097258,
            "unit": "iter/sec",
            "range": "stddev: 0.00005462154273806223",
            "extra": "mean: 9.497583678571532 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9964.309799032008,
            "unit": "iter/sec",
            "range": "stddev: 0.000001926527932567007",
            "extra": "mean: 100.35818036259228 usec\nrounds: 6243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 163.15900420846515,
            "unit": "iter/sec",
            "range": "stddev: 0.011744620403744058",
            "extra": "mean: 6.128990581005993 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2081.4547332492075,
            "unit": "iter/sec",
            "range": "stddev: 0.00008260831078150061",
            "extra": "mean: 480.43322010609995 usec\nrounds: 1313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2086.681076637733,
            "unit": "iter/sec",
            "range": "stddev: 0.00008371543630671593",
            "extra": "mean: 479.22991740132085 usec\nrounds: 1586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 156.83948907609775,
            "unit": "iter/sec",
            "range": "stddev: 0.0035651287966990794",
            "extra": "mean: 6.375945279411137 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.85282329729053,
            "unit": "iter/sec",
            "range": "stddev: 0.0007040603923643285",
            "extra": "mean: 10.54264876086788 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6803514731490246,
            "unit": "iter/sec",
            "range": "stddev: 0.0014723822382564852",
            "extra": "mean: 595.113591400002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.679317028339895,
            "unit": "iter/sec",
            "range": "stddev: 0.0003439648553408501",
            "extra": "mean: 17.337237185188314 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 259.9449018223146,
            "unit": "iter/sec",
            "range": "stddev: 0.0003668489618171562",
            "extra": "mean: 3.846969080715229 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 282.2640596783292,
            "unit": "iter/sec",
            "range": "stddev: 0.00024284759437277187",
            "extra": "mean: 3.5427818941582907 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 271.56022386920677,
            "unit": "iter/sec",
            "range": "stddev: 0.00024020831855260603",
            "extra": "mean: 3.6824244204542866 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.81852496689962,
            "unit": "iter/sec",
            "range": "stddev: 0.0006495087121600963",
            "extra": "mean: 9.725873818185296 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9647219117545536,
            "unit": "iter/sec",
            "range": "stddev: 0.005486046940577175",
            "extra": "mean: 1.036568142400006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.92333716316396,
            "unit": "iter/sec",
            "range": "stddev: 0.0008941378210168231",
            "extra": "mean: 10.10883810309191 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.06299358219434,
            "unit": "iter/sec",
            "range": "stddev: 0.0004730806423726576",
            "extra": "mean: 38.3685779166664 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.33889852041497,
            "unit": "iter/sec",
            "range": "stddev: 0.0007361443530436481",
            "extra": "mean: 9.96622461224786 msec\nrounds: 98"
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "c87585392b664ea27f6c1e93bca354a8dc735c4d",
          "message": "chore(deps): relock",
          "timestamp": "2023-05-20T05:35:28-05:00",
          "tree_id": "954af765954370f31653adf190d3acd5584f9f9b",
          "url": "https://github.com/ibis-project/ibis/commit/c87585392b664ea27f6c1e93bca354a8dc735c4d"
        },
        "date": 1684579765944,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.26700986929892,
            "unit": "iter/sec",
            "range": "stddev: 0.000565290060383279",
            "extra": "mean: 9.41025819047634 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9527376916712755,
            "unit": "iter/sec",
            "range": "stddev: 0.0038622625030796556",
            "extra": "mean: 1.0496068421999951 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 790.417602864281,
            "unit": "iter/sec",
            "range": "stddev: 0.007778875462312866",
            "extra": "mean: 1.2651540102045342 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 423.83064627914376,
            "unit": "iter/sec",
            "range": "stddev: 0.000041265430559549154",
            "extra": "mean: 2.359432968755589 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.18843762018659,
            "unit": "iter/sec",
            "range": "stddev: 0.00011146786100367367",
            "extra": "mean: 33.1252651290345 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.525246384312417,
            "unit": "iter/sec",
            "range": "stddev: 0.001452632854658956",
            "extra": "mean: 396.00096300000587 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 227.2781294327472,
            "unit": "iter/sec",
            "range": "stddev: 0.003596792175966252",
            "extra": "mean: 4.399895416667909 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2199.877488045649,
            "unit": "iter/sec",
            "range": "stddev: 0.00008411948919849726",
            "extra": "mean: 454.5707683423729 usec\nrounds: 1213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 515.1091067368703,
            "unit": "iter/sec",
            "range": "stddev: 0.00005335362620394578",
            "extra": "mean: 1.941336285694563 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9878.2631825252,
            "unit": "iter/sec",
            "range": "stddev: 0.000003049156212027331",
            "extra": "mean: 101.23237066299423 usec\nrounds: 4179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.15539391490772,
            "unit": "iter/sec",
            "range": "stddev: 0.013167192000251578",
            "extra": "mean: 11.091959743904399 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.542992582943636,
            "unit": "iter/sec",
            "range": "stddev: 0.0002487906670935871",
            "extra": "mean: 117.0550003749895 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6045741.195522096,
            "unit": "iter/sec",
            "range": "stddev: 1.7535527372842556e-8",
            "extra": "mean: 165.40569099111747 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.53709908980998,
            "unit": "iter/sec",
            "range": "stddev: 0.0009268103965713665",
            "extra": "mean: 9.658373749998361 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7683993024325501,
            "unit": "iter/sec",
            "range": "stddev: 0.0025512635872956845",
            "extra": "mean: 1.3014066993999904 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.33129826669098,
            "unit": "iter/sec",
            "range": "stddev: 0.0007773716686746588",
            "extra": "mean: 9.966979569444986 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.66400541753262,
            "unit": "iter/sec",
            "range": "stddev: 0.00004107669257159908",
            "extra": "mean: 9.11876231579012 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.47981455475274,
            "unit": "iter/sec",
            "range": "stddev: 0.0007612167000420674",
            "extra": "mean: 10.364862376808317 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.82633398834943,
            "unit": "iter/sec",
            "range": "stddev: 0.0006679027375043667",
            "extra": "mean: 23.350119117644812 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2195.003271591077,
            "unit": "iter/sec",
            "range": "stddev: 0.00008394326621233185",
            "extra": "mean: 455.58018657308736 usec\nrounds: 1147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.63979756370352,
            "unit": "iter/sec",
            "range": "stddev: 0.00004468998571250211",
            "extra": "mean: 5.2731547536275 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2532660.9142268864,
            "unit": "iter/sec",
            "range": "stddev: 1.5712039568466076e-8",
            "extra": "mean: 394.84164436811164 nsec\nrounds: 113624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 679.7379946458367,
            "unit": "iter/sec",
            "range": "stddev: 0.00005101860272124628",
            "extra": "mean: 1.471155074273918 msec\nrounds: 552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1024357.2024683217,
            "unit": "iter/sec",
            "range": "stddev: 1.0581335712514905e-7",
            "extra": "mean: 976.2219639695707 nsec\nrounds: 151493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6291.453244781301,
            "unit": "iter/sec",
            "range": "stddev: 0.0025608158085151283",
            "extra": "mean: 158.94578900820574 usec\nrounds: 3730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5482067.374804084,
            "unit": "iter/sec",
            "range": "stddev: 1.4411280459841807e-8",
            "extra": "mean: 182.4129350536329 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.38808965511723,
            "unit": "iter/sec",
            "range": "stddev: 0.0002095361470284361",
            "extra": "mean: 10.163831857141759 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 47.09027868323984,
            "unit": "iter/sec",
            "range": "stddev: 0.0004465731072533454",
            "extra": "mean: 21.235805520002486 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.03342617297662,
            "unit": "iter/sec",
            "range": "stddev: 0.0006041378446066403",
            "extra": "mean: 9.897714428568687 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.08878652174326,
            "unit": "iter/sec",
            "range": "stddev: 0.003788531259128267",
            "extra": "mean: 6.246533699998906 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 82.9761990189007,
            "unit": "iter/sec",
            "range": "stddev: 0.021153777552693067",
            "extra": "mean: 12.051648687501526 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.868444198988097,
            "unit": "iter/sec",
            "range": "stddev: 0.0005427288689446736",
            "extra": "mean: 38.65713733333515 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1164.1108904240898,
            "unit": "iter/sec",
            "range": "stddev: 0.000014325931075384925",
            "extra": "mean: 859.024692772779 usec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4582.346075358881,
            "unit": "iter/sec",
            "range": "stddev: 0.000021528267740894974",
            "extra": "mean: 218.22882505042617 usec\nrounds: 1932"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.05629127314724,
            "unit": "iter/sec",
            "range": "stddev: 0.0005999780348494806",
            "extra": "mean: 11.756919858974685 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.761851474323016,
            "unit": "iter/sec",
            "range": "stddev: 0.027743578011851153",
            "extra": "mean: 32.50779624999822 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2138.509528317103,
            "unit": "iter/sec",
            "range": "stddev: 0.00008663585658992804",
            "extra": "mean: 467.6154053832758 usec\nrounds: 1189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.227387624958,
            "unit": "iter/sec",
            "range": "stddev: 0.00006435335258042297",
            "extra": "mean: 6.052265392404882 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 252.01999806321112,
            "unit": "iter/sec",
            "range": "stddev: 0.00035812493158767335",
            "extra": "mean: 3.9679390829500045 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 237.76896058240965,
            "unit": "iter/sec",
            "range": "stddev: 0.010321757086804063",
            "extra": "mean: 4.20576343333681 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12395.116212932542,
            "unit": "iter/sec",
            "range": "stddev: 0.000012023895690044794",
            "extra": "mean: 80.67693620787855 usec\nrounds: 3966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.10872389352812,
            "unit": "iter/sec",
            "range": "stddev: 0.0001749023746949312",
            "extra": "mean: 7.929665522936275 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.52672947667091,
            "unit": "iter/sec",
            "range": "stddev: 0.0006524657102785876",
            "extra": "mean: 9.947603042552664 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 105.13138749837273,
            "unit": "iter/sec",
            "range": "stddev: 0.00012184195276972056",
            "extra": "mean: 9.511907183908122 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2005.975414631339,
            "unit": "iter/sec",
            "range": "stddev: 0.00009736668254702998",
            "extra": "mean: 498.51059624466114 usec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 82.39096246748375,
            "unit": "iter/sec",
            "range": "stddev: 0.016431183236806268",
            "extra": "mean: 12.13725352941056 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.74004727607448,
            "unit": "iter/sec",
            "range": "stddev: 0.00012482671030767813",
            "extra": "mean: 18.608096767440106 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9538145399948551,
            "unit": "iter/sec",
            "range": "stddev: 0.0033672443332595225",
            "extra": "mean: 1.048421845200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148697.3784670729,
            "unit": "iter/sec",
            "range": "stddev: 3.012766263644536e-7",
            "extra": "mean: 6.725068123655166 usec\nrounds: 34364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.46832944094058,
            "unit": "iter/sec",
            "range": "stddev: 0.00011646624256586056",
            "extra": "mean: 5.764741052287947 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2660265.2224519067,
            "unit": "iter/sec",
            "range": "stddev: 1.975476619564657e-8",
            "extra": "mean: 375.90236926778476 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.7945218601101,
            "unit": "iter/sec",
            "range": "stddev: 0.00007978512335275588",
            "extra": "mean: 9.63441983332953 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1737.2040100384331,
            "unit": "iter/sec",
            "range": "stddev: 0.000009201672821011172",
            "extra": "mean: 575.6376304806461 usec\nrounds: 1391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1937617.2901384658,
            "unit": "iter/sec",
            "range": "stddev: 9.947991022359461e-8",
            "extra": "mean: 516.0977893258467 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 269.88255458944104,
            "unit": "iter/sec",
            "range": "stddev: 0.0002842856844902044",
            "extra": "mean: 3.705315452943042 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 262.16509308546205,
            "unit": "iter/sec",
            "range": "stddev: 0.00033751497397573635",
            "extra": "mean: 3.8143903455293886 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2169.7192991960333,
            "unit": "iter/sec",
            "range": "stddev: 0.00009118753447116578",
            "extra": "mean: 460.88911149499364 usec\nrounds: 1740"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6102833348180186,
            "unit": "iter/sec",
            "range": "stddev: 0.001947385422217567",
            "extra": "mean: 621.0087246000171 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 314.42630362775975,
            "unit": "iter/sec",
            "range": "stddev: 0.00002316225243224677",
            "extra": "mean: 3.180395496376382 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.2952701350321,
            "unit": "iter/sec",
            "range": "stddev: 0.000043570550232992895",
            "extra": "mean: 6.238487256408776 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2908731758647707,
            "unit": "iter/sec",
            "range": "stddev: 0.07516082248079621",
            "extra": "mean: 774.6694397999931 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.61547546884992,
            "unit": "iter/sec",
            "range": "stddev: 0.0007645610072249743",
            "extra": "mean: 10.038600882979305 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.796135535387826,
            "unit": "iter/sec",
            "range": "stddev: 0.0002341449272083622",
            "extra": "mean: 20.493426150002847 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1912994.4467971611,
            "unit": "iter/sec",
            "range": "stddev: 1.0896791234661124e-7",
            "extra": "mean: 522.740670614206 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.0212360507995,
            "unit": "iter/sec",
            "range": "stddev: 0.018389533816810313",
            "extra": "mean: 11.901753021050498 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11666773.927906374,
            "unit": "iter/sec",
            "range": "stddev: 3.501087457249757e-9",
            "extra": "mean: 85.71349767975462 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.32945588735825,
            "unit": "iter/sec",
            "range": "stddev: 0.0006954754320206378",
            "extra": "mean: 9.868798675003632 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 275.85616089481823,
            "unit": "iter/sec",
            "range": "stddev: 0.00027482020617932595",
            "extra": "mean: 3.625077637404271 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2126.8644824123503,
            "unit": "iter/sec",
            "range": "stddev: 0.00013205482258413242",
            "extra": "mean: 470.17570149357687 usec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.42861508612985,
            "unit": "iter/sec",
            "range": "stddev: 0.0006574028423055427",
            "extra": "mean: 9.668504206183687 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 750.8763716592211,
            "unit": "iter/sec",
            "range": "stddev: 0.000013865599427376344",
            "extra": "mean: 1.331777157656842 msec\nrounds: 666"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.311189974518584,
            "unit": "iter/sec",
            "range": "stddev: 0.0004578243555600815",
            "extra": "mean: 15.79499611999836 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.48030881590863,
            "unit": "iter/sec",
            "range": "stddev: 0.0009087329834660061",
            "extra": "mean: 10.0522406082447 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6148304.80957928,
            "unit": "iter/sec",
            "range": "stddev: 8.24790976895599e-9",
            "extra": "mean: 162.64645800268596 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.5131511269263,
            "unit": "iter/sec",
            "range": "stddev: 0.00006719993690270717",
            "extra": "mean: 8.967552166665811 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.2864297791938,
            "unit": "iter/sec",
            "range": "stddev: 0.00023537725995848095",
            "extra": "mean: 3.6063791538457575 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7079042.77434444,
            "unit": "iter/sec",
            "range": "stddev: 5.114444617037471e-9",
            "extra": "mean: 141.26203667312598 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16534167228510874,
            "unit": "iter/sec",
            "range": "stddev: 0.08025710375007648",
            "extra": "mean: 6.048082048399988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 272.3526706460139,
            "unit": "iter/sec",
            "range": "stddev: 0.000252851386254431",
            "extra": "mean: 3.671709910639115 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14025.388126468373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017794751923993278",
            "extra": "mean: 71.29927464273335 usec\nrounds: 2658"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.43945862855486,
            "unit": "iter/sec",
            "range": "stddev: 0.018953506944983364",
            "extra": "mean: 12.588202604398738 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.0598650336162,
            "unit": "iter/sec",
            "range": "stddev: 0.00025097200827204323",
            "extra": "mean: 3.7727326235270477 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.57512808745204,
            "unit": "iter/sec",
            "range": "stddev: 0.0009229076334501286",
            "extra": "mean: 10.144546797979697 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 231.3200519608623,
            "unit": "iter/sec",
            "range": "stddev: 0.00024893421896055176",
            "extra": "mean: 4.323014764708737 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.64270534444645,
            "unit": "iter/sec",
            "range": "stddev: 0.000029584639660947217",
            "extra": "mean: 5.008948352381248 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4518945.202178812,
            "unit": "iter/sec",
            "range": "stddev: 1.0946125777013529e-8",
            "extra": "mean: 221.29057894222632 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2163.8314038224044,
            "unit": "iter/sec",
            "range": "stddev: 0.00012392524474293964",
            "extra": "mean: 462.1432142233918 usec\nrounds: 1153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2145.7177346720005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000868718474290246",
            "extra": "mean: 466.044523863183 usec\nrounds: 1760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.44399287701617,
            "unit": "iter/sec",
            "range": "stddev: 0.0005303169299340793",
            "extra": "mean: 17.716677170214815 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.04572415831714,
            "unit": "iter/sec",
            "range": "stddev: 0.0006379327657918992",
            "extra": "mean: 9.995429673911422 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.56876055263889,
            "unit": "iter/sec",
            "range": "stddev: 0.000914927856255535",
            "extra": "mean: 10.687327630437416 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.824142339828246,
            "unit": "iter/sec",
            "range": "stddev: 0.000607353340064644",
            "extra": "mean: 53.12327021052074 msec\nrounds: 19"
          }
        ]
      },
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
          "id": "bbe6400539558e017b2c9f37bfccb3473f35e3cd",
          "message": "chore(flake/nixpkgs): `5dcb4a7a` -> `33bd20c0`",
          "timestamp": "2023-05-21T00:37:13Z",
          "tree_id": "5db1ab3189c0b4ee8200c0aef3c0c88d0a02ccff",
          "url": "https://github.com/ibis-project/ibis/commit/bbe6400539558e017b2c9f37bfccb3473f35e3cd"
        },
        "date": 1684629944261,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4658253.410169876,
            "unit": "iter/sec",
            "range": "stddev: 4.7327101499608764e-7",
            "extra": "mean: 214.67273502484673 nsec\nrounds: 29326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 840549.6485236397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023209269434830257",
            "extra": "mean: 1.1896977195296228 usec\nrounds: 40651"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 249.8176435293827,
            "unit": "iter/sec",
            "range": "stddev: 0.000675213346714295",
            "extra": "mean: 4.002919833331881 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 136.52807570385772,
            "unit": "iter/sec",
            "range": "stddev: 0.0012651877764564153",
            "extra": "mean: 7.324500802084799 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 924.6257305152417,
            "unit": "iter/sec",
            "range": "stddev: 0.0003547522477373798",
            "extra": "mean: 1.0815186804749166 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.9750235384624859,
            "unit": "iter/sec",
            "range": "stddev: 0.034423761631623265",
            "extra": "mean: 1.0256162652000171 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 190.34214199538988,
            "unit": "iter/sec",
            "range": "stddev: 0.0008576339512807183",
            "extra": "mean: 5.253697313252996 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1631.7367162914416,
            "unit": "iter/sec",
            "range": "stddev: 0.00025487918452205634",
            "extra": "mean: 612.8439655833496 usec\nrounds: 1046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 76.19534771665526,
            "unit": "iter/sec",
            "range": "stddev: 0.0013515355382215056",
            "extra": "mean: 13.12416085715183 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4774664.64211972,
            "unit": "iter/sec",
            "range": "stddev: 5.316411004877895e-7",
            "extra": "mean: 209.43879307835073 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.523648418959827,
            "unit": "iter/sec",
            "range": "stddev: 0.02751960091113811",
            "extra": "mean: 1.9096782569999846 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 159.8227044122992,
            "unit": "iter/sec",
            "range": "stddev: 0.0008374162914771279",
            "extra": "mean: 6.256933291657181 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9935.253093071778,
            "unit": "iter/sec",
            "range": "stddev: 0.00009578216404597022",
            "extra": "mean: 100.6516885510785 usec\nrounds: 1721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5426997.570530928,
            "unit": "iter/sec",
            "range": "stddev: 4.4335236060707677e-7",
            "extra": "mean: 184.2639483439 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 61.1348289411552,
            "unit": "iter/sec",
            "range": "stddev: 0.002187806259048809",
            "extra": "mean: 16.357287937495357 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 298.5818363027259,
            "unit": "iter/sec",
            "range": "stddev: 0.0005262274127249021",
            "extra": "mean: 3.349165549997224 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1571.9912886839327,
            "unit": "iter/sec",
            "range": "stddev: 0.00017296766798762458",
            "extra": "mean: 636.1358406999809 usec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5841995904253757,
            "unit": "iter/sec",
            "range": "stddev: 0.033476505148609746",
            "extra": "mean: 1.7117437540000082 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1475081.3759582222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019066949818293903",
            "extra": "mean: 677.9287002728197 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1381.6553262623324,
            "unit": "iter/sec",
            "range": "stddev: 0.0004937086989145969",
            "extra": "mean: 723.7695111017375 usec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.060975747977334,
            "unit": "iter/sec",
            "range": "stddev: 0.003665297380968446",
            "extra": "mean: 71.11881976923613 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5781899409860096,
            "unit": "iter/sec",
            "range": "stddev: 0.028430168630948934",
            "extra": "mean: 1.7295354504000215 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1502.6423222498738,
            "unit": "iter/sec",
            "range": "stddev: 0.00025063816229765006",
            "extra": "mean: 665.4943662858648 usec\nrounds: 789"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 63.270620970186116,
            "unit": "iter/sec",
            "range": "stddev: 0.019223231349062914",
            "extra": "mean: 15.805123842094298 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 191.99364477203267,
            "unit": "iter/sec",
            "range": "stddev: 0.0006814816059342337",
            "extra": "mean: 5.20850573563187 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 73.75150828596821,
            "unit": "iter/sec",
            "range": "stddev: 0.002018779560768766",
            "extra": "mean: 13.559044733329984 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.886971528552568,
            "unit": "iter/sec",
            "range": "stddev: 0.004332434312029858",
            "extra": "mean: 37.19273473913014 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4772.997470555418,
            "unit": "iter/sec",
            "range": "stddev: 0.0003069151109800967",
            "extra": "mean: 209.51194844937416 usec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 56.65805651030219,
            "unit": "iter/sec",
            "range": "stddev: 0.028455691528269822",
            "extra": "mean: 17.649740594581974 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.64016502773969,
            "unit": "iter/sec",
            "range": "stddev: 0.0025793816140720236",
            "extra": "mean: 25.22693836668471 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 193.09177465209393,
            "unit": "iter/sec",
            "range": "stddev: 0.0009854026194231042",
            "extra": "mean: 5.1788845060943975 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 77.69572429456237,
            "unit": "iter/sec",
            "range": "stddev: 0.0012086457624965383",
            "extra": "mean: 12.87072112499743 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 380.7598629634902,
            "unit": "iter/sec",
            "range": "stddev: 0.0005445872562862807",
            "extra": "mean: 2.6263272400008364 msec\nrounds: 325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 92.94497097323296,
            "unit": "iter/sec",
            "range": "stddev: 0.03167278113309593",
            "extra": "mean: 10.759054411754972 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 133.54203701837807,
            "unit": "iter/sec",
            "range": "stddev: 0.0015409304374790515",
            "extra": "mean: 7.48827876470373 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 150.1868508087561,
            "unit": "iter/sec",
            "range": "stddev: 0.00513788845075027",
            "extra": "mean: 6.658372518066666 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.54202743003129,
            "unit": "iter/sec",
            "range": "stddev: 0.0021939967733647626",
            "extra": "mean: 23.506166969702985 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2938.844041663583,
            "unit": "iter/sec",
            "range": "stddev: 0.00018895570204881845",
            "extra": "mean: 340.2698427759824 usec\nrounds: 706"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 101.2408114343893,
            "unit": "iter/sec",
            "range": "stddev: 0.002089548985350799",
            "extra": "mean: 9.877439600018079 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 586.1371111497175,
            "unit": "iter/sec",
            "range": "stddev: 0.0005320563133299733",
            "extra": "mean: 1.706085455054166 msec\nrounds: 534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0289396042344727,
            "unit": "iter/sec",
            "range": "stddev: 0.03658325391398147",
            "extra": "mean: 971.8743412000322 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1504.8651844142867,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852782058320518",
            "extra": "mean: 664.5113531476994 usec\nrounds: 841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 2603359.1995551204,
            "unit": "iter/sec",
            "range": "stddev: 0.000008380450350310774",
            "extra": "mean: 384.1191028002923 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 22.298396446818924,
            "unit": "iter/sec",
            "range": "stddev: 0.0027316012103785828",
            "extra": "mean: 44.84627414285028 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 68.13808784285322,
            "unit": "iter/sec",
            "range": "stddev: 0.001436487293476079",
            "extra": "mean: 14.676079585712744 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3407185.774889307,
            "unit": "iter/sec",
            "range": "stddev: 7.870145213511797e-7",
            "extra": "mean: 293.4973512068736 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 85.92058145856043,
            "unit": "iter/sec",
            "range": "stddev: 0.001059492393653457",
            "extra": "mean: 11.63865494185815 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 73.41227297945365,
            "unit": "iter/sec",
            "range": "stddev: 0.0015671493651717389",
            "extra": "mean: 13.62170056061166 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 61.04713140267171,
            "unit": "iter/sec",
            "range": "stddev: 0.027622960642682087",
            "extra": "mean: 16.38078607500688 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1551.2361522543717,
            "unit": "iter/sec",
            "range": "stddev: 0.00027573566320635164",
            "extra": "mean: 644.6471728670878 usec\nrounds: 1371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 72.6397549958462,
            "unit": "iter/sec",
            "range": "stddev: 0.0020193915665866918",
            "extra": "mean: 13.766566256414045 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1564.482370739833,
            "unit": "iter/sec",
            "range": "stddev: 0.00030548591415639314",
            "extra": "mean: 639.1890498114765 usec\nrounds: 1325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 74.26323569315775,
            "unit": "iter/sec",
            "range": "stddev: 0.0016941756425190406",
            "extra": "mean: 13.465613108103975 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1315.881035482376,
            "unit": "iter/sec",
            "range": "stddev: 0.00021486126411049257",
            "extra": "mean: 759.9471175853064 usec\nrounds: 995"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09599188978376742,
            "unit": "iter/sec",
            "range": "stddev: 0.11498539462066601",
            "extra": "mean: 10.417546755800027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9474634.754971148,
            "unit": "iter/sec",
            "range": "stddev: 2.402321481185684e-7",
            "extra": "mean: 105.54496567537296 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 57.87432335867561,
            "unit": "iter/sec",
            "range": "stddev: 0.026886878193479066",
            "extra": "mean: 17.27881972463866 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 96.05360604942346,
            "unit": "iter/sec",
            "range": "stddev: 0.0014453518270923717",
            "extra": "mean: 10.410853284211521 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.305335114681007,
            "unit": "iter/sec",
            "range": "stddev: 0.0024932871965000864",
            "extra": "mean: 31.943437000009567 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.32925889462392,
            "unit": "iter/sec",
            "range": "stddev: 0.0019566463560980714",
            "extra": "mean: 13.82566357353245 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 72.97648313207314,
            "unit": "iter/sec",
            "range": "stddev: 0.001964921650574069",
            "extra": "mean: 13.703044557384274 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.4847008539729,
            "unit": "iter/sec",
            "range": "stddev: 0.0018139639811666126",
            "extra": "mean: 57.19285724998713 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 185.90034528332026,
            "unit": "iter/sec",
            "range": "stddev: 0.0009976334248503567",
            "extra": "mean: 5.379226157304636 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 116.44831693301845,
            "unit": "iter/sec",
            "range": "stddev: 0.00479537412669178",
            "extra": "mean: 8.587500672725085 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 64.99102333155174,
            "unit": "iter/sec",
            "range": "stddev: 0.030431679320246954",
            "extra": "mean: 15.386740333330334 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1540.1816592103612,
            "unit": "iter/sec",
            "range": "stddev: 0.0003268121614890397",
            "extra": "mean: 649.2740606408026 usec\nrounds: 808"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 69.87571544536127,
            "unit": "iter/sec",
            "range": "stddev: 0.0018624486510990489",
            "extra": "mean: 14.311123594604789 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.920215472061706,
            "unit": "iter/sec",
            "range": "stddev: 0.0030755745939591516",
            "extra": "mean: 21.312775100008707 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8687.574134937448,
            "unit": "iter/sec",
            "range": "stddev: 0.00020543293002437193",
            "extra": "mean: 115.10693140199605 usec\nrounds: 3659"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.48584558506803,
            "unit": "iter/sec",
            "range": "stddev: 0.0020598693960709835",
            "extra": "mean: 13.608062777782001 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 193.8062512009145,
            "unit": "iter/sec",
            "range": "stddev: 0.0009500153943947347",
            "extra": "mean: 5.159792286386691 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.70994842747618,
            "unit": "iter/sec",
            "range": "stddev: 0.0012642093478786448",
            "extra": "mean: 11.401215231894245 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7323.252241787633,
            "unit": "iter/sec",
            "range": "stddev: 0.00008450681107736161",
            "extra": "mean: 136.55135273012206 usec\nrounds: 4193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 56.39319299498057,
            "unit": "iter/sec",
            "range": "stddev: 0.03085343120072866",
            "extra": "mean: 17.7326366338045 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 136.58793806372466,
            "unit": "iter/sec",
            "range": "stddev: 0.0009221899451795674",
            "extra": "mean: 7.3212906950352625 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121804.2289688909,
            "unit": "iter/sec",
            "range": "stddev: 0.00002432975256170598",
            "extra": "mean: 8.209895571486294 usec\nrounds: 34483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1605867.1936186093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016621462430388154",
            "extra": "mean: 622.7165010741842 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 182.128565038931,
            "unit": "iter/sec",
            "range": "stddev: 0.0010147708259229302",
            "extra": "mean: 5.490626908449229 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 67.8466103552793,
            "unit": "iter/sec",
            "range": "stddev: 0.002097683057662471",
            "extra": "mean: 14.73912985134397 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 167.34699138439456,
            "unit": "iter/sec",
            "range": "stddev: 0.0009637966136056737",
            "extra": "mean: 5.975607877544741 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 484.72606828097514,
            "unit": "iter/sec",
            "range": "stddev: 0.0004377063597001608",
            "extra": "mean: 2.063020880115617 msec\nrounds: 342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1506.0465014984725,
            "unit": "iter/sec",
            "range": "stddev: 0.0002282134176583266",
            "extra": "mean: 663.9901218222872 usec\nrounds: 944"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 69.36407025811528,
            "unit": "iter/sec",
            "range": "stddev: 0.0016305136898037925",
            "extra": "mean: 14.416685703114496 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 94.99012918854532,
            "unit": "iter/sec",
            "range": "stddev: 0.023833780714327044",
            "extra": "mean: 10.527409621847193 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.095930032893589,
            "unit": "iter/sec",
            "range": "stddev: 0.01424161156158731",
            "extra": "mean: 164.04387757143013 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 65.73074202738708,
            "unit": "iter/sec",
            "range": "stddev: 0.0028544507155795645",
            "extra": "mean: 15.213581486473169 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 65.69292181300575,
            "unit": "iter/sec",
            "range": "stddev: 0.0018547655847197348",
            "extra": "mean: 15.222340130440383 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.939913009513004,
            "unit": "iter/sec",
            "range": "stddev: 0.01563821185668979",
            "extra": "mean: 515.4870321999852 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1636131.5486384667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043453347148343716",
            "extra": "mean: 611.197798142922 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 25.50101207734601,
            "unit": "iter/sec",
            "range": "stddev: 0.05213853823911309",
            "extra": "mean: 39.21412989284282 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.009253511438217,
            "unit": "iter/sec",
            "range": "stddev: 0.003097142447624713",
            "extra": "mean: 37.024347954544815 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1527530.3742740308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037001650597605913",
            "extra": "mean: 654.651466734504 nsec\nrounds: 166667"
          }
        ]
      },
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
          "id": "1e99e9f4934e03e417c31601bbdb21de42035b1d",
          "message": "chore(deps): update cpcloud/compare-commits-action action to v5.0.32",
          "timestamp": "2023-05-21T04:22:31-05:00",
          "tree_id": "6174950c16384b0e9a3b12ba8f0d10178c5ed562",
          "url": "https://github.com/ibis-project/ibis/commit/1e99e9f4934e03e417c31601bbdb21de42035b1d"
        },
        "date": 1684661182155,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1631810.2564484891,
            "unit": "iter/sec",
            "range": "stddev: 8.508636678728912e-8",
            "extra": "mean: 612.8163467831266 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.686131285592985,
            "unit": "iter/sec",
            "range": "stddev: 0.00029260433748071055",
            "extra": "mean: 33.685763576923584 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.55469966500827,
            "unit": "iter/sec",
            "range": "stddev: 0.008603746666396685",
            "extra": "mean: 9.211945711110856 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 185.68473661459728,
            "unit": "iter/sec",
            "range": "stddev: 0.0015097467047870876",
            "extra": "mean: 5.385472269999099 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 269.5019110436832,
            "unit": "iter/sec",
            "range": "stddev: 0.0002781863516850289",
            "extra": "mean: 3.7105488273807126 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6139401.5081920605,
            "unit": "iter/sec",
            "range": "stddev: 1.0212839411187737e-8",
            "extra": "mean: 162.88232634146192 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 78.13615645685104,
            "unit": "iter/sec",
            "range": "stddev: 0.009644631275299334",
            "extra": "mean: 12.798172387097486 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 101.61098347967122,
            "unit": "iter/sec",
            "range": "stddev: 0.0006810976484167123",
            "extra": "mean: 9.841455773332465 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2344.375943237349,
            "unit": "iter/sec",
            "range": "stddev: 0.00008182831755686419",
            "extra": "mean: 426.55274760203343 usec\nrounds: 1668"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 87.35753069503984,
            "unit": "iter/sec",
            "range": "stddev: 0.010427851205674361",
            "extra": "mean: 11.447210012047421 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139851.92893097876,
            "unit": "iter/sec",
            "range": "stddev: 3.50813285157593e-7",
            "extra": "mean: 7.150419787871006 usec\nrounds: 36497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7856329639370989,
            "unit": "iter/sec",
            "range": "stddev: 0.0017446435675077172",
            "extra": "mean: 1.2728590142000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.4506753305617,
            "unit": "iter/sec",
            "range": "stddev: 0.00023892909092022946",
            "extra": "mean: 3.6172818127655693 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 190.2802699467909,
            "unit": "iter/sec",
            "range": "stddev: 0.01083507257256962",
            "extra": "mean: 5.25540561971893 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1857280.5673340529,
            "unit": "iter/sec",
            "range": "stddev: 9.298650839546078e-8",
            "extra": "mean: 538.4216136151166 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.700370826315854,
            "unit": "iter/sec",
            "range": "stddev: 0.00021438645713177956",
            "extra": "mean: 18.28141171428602 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12211442.820334753,
            "unit": "iter/sec",
            "range": "stddev: 3.778457377024553e-9",
            "extra": "mean: 81.89040514794017 nsec\nrounds: 125016"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.5738952900863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000471930008755389",
            "extra": "mean: 1.3217479564459187 msec\nrounds: 574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.40770040092954,
            "unit": "iter/sec",
            "range": "stddev: 0.00082592327117911",
            "extra": "mean: 10.481334271738271 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 397.30350165358806,
            "unit": "iter/sec",
            "range": "stddev: 0.00016639959483017802",
            "extra": "mean: 2.5169674967322777 msec\nrounds: 306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2343.9630561796444,
            "unit": "iter/sec",
            "range": "stddev: 0.000080646000912111",
            "extra": "mean: 426.6278844982609 usec\nrounds: 329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2270.113266156397,
            "unit": "iter/sec",
            "range": "stddev: 0.00008656371868570894",
            "extra": "mean: 440.5066544072194 usec\nrounds: 1577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.32559384698617,
            "unit": "iter/sec",
            "range": "stddev: 0.0007083080536047721",
            "extra": "mean: 9.96754628260833 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4728612.129748067,
            "unit": "iter/sec",
            "range": "stddev: 1.2706416966434265e-8",
            "extra": "mean: 211.4785422363004 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.503628106720495,
            "unit": "iter/sec",
            "range": "stddev: 0.0005070826462791693",
            "extra": "mean: 36.358839500002205 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.71851625206844,
            "unit": "iter/sec",
            "range": "stddev: 0.00009647571340401742",
            "extra": "mean: 5.789767198674764 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.52464659410399,
            "unit": "iter/sec",
            "range": "stddev: 0.00014808066756867013",
            "extra": "mean: 20.191966399999554 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.5674464629057,
            "unit": "iter/sec",
            "range": "stddev: 0.0002284005715353639",
            "extra": "mean: 3.589794904959079 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 280.7140256927686,
            "unit": "iter/sec",
            "range": "stddev: 0.00023692884663767185",
            "extra": "mean: 3.562344266668257 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 422.4460884158852,
            "unit": "iter/sec",
            "range": "stddev: 0.00008454115452991826",
            "extra": "mean: 2.367165958974464 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 282.5675142401973,
            "unit": "iter/sec",
            "range": "stddev: 0.00022881485440966244",
            "extra": "mean: 3.5389772341273007 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.94342770166285,
            "unit": "iter/sec",
            "range": "stddev: 0.0005252484437244079",
            "extra": "mean: 21.765898846154368 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 87.5163892411121,
            "unit": "iter/sec",
            "range": "stddev: 0.014236965991245458",
            "extra": "mean: 11.426431193875576 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.26267273667565,
            "unit": "iter/sec",
            "range": "stddev: 0.0002127565873857475",
            "extra": "mean: 9.50004378571683 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.40203209385317,
            "unit": "iter/sec",
            "range": "stddev: 0.0009806824193684337",
            "extra": "mean: 10.822272815215745 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.89619414905337,
            "unit": "iter/sec",
            "range": "stddev: 0.0008444201522788379",
            "extra": "mean: 10.537830404761024 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11758.352500294273,
            "unit": "iter/sec",
            "range": "stddev: 0.00002955532757399073",
            "extra": "mean: 85.04592798820865 usec\nrounds: 5513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6489267465262372,
            "unit": "iter/sec",
            "range": "stddev: 0.0018095623838186687",
            "extra": "mean: 606.455078800002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.1700400141912,
            "unit": "iter/sec",
            "range": "stddev: 0.00003770636224959629",
            "extra": "mean: 1.8616079183671181 msec\nrounds: 441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5823811.649992934,
            "unit": "iter/sec",
            "range": "stddev: 8.710798538626969e-9",
            "extra": "mean: 171.70884982213354 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 270.470495463843,
            "unit": "iter/sec",
            "range": "stddev: 0.00030249143597468994",
            "extra": "mean: 3.6972609462819643 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.132037263730865,
            "unit": "iter/sec",
            "range": "stddev: 0.00017389425012381065",
            "extra": "mean: 16.9113063962259 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17595535527956951,
            "unit": "iter/sec",
            "range": "stddev: 0.09233924884398975",
            "extra": "mean: 5.683259815600008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.15271949293664,
            "unit": "iter/sec",
            "range": "stddev: 0.00003860345187841338",
            "extra": "mean: 9.33247429213328 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 97.52575627930385,
            "unit": "iter/sec",
            "range": "stddev: 0.0011330223340404342",
            "extra": "mean: 10.253701567164489 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 225.30155483952348,
            "unit": "iter/sec",
            "range": "stddev: 0.00034135242212342173",
            "extra": "mean: 4.43849577830155 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 101.39319620439576,
            "unit": "iter/sec",
            "range": "stddev: 0.0002101542731750834",
            "extra": "mean: 9.86259470491617 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.844582378500775,
            "unit": "iter/sec",
            "range": "stddev: 0.0003203109451810648",
            "extra": "mean: 53.065649315787994 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.417517541996869,
            "unit": "iter/sec",
            "range": "stddev: 0.00022516673937048685",
            "extra": "mean: 118.7998712222193 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 84.84408173129191,
            "unit": "iter/sec",
            "range": "stddev: 0.015655913589079834",
            "extra": "mean: 11.786325923911596 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9386.47654665768,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018507510882079254",
            "extra": "mean: 106.53624872221924 usec\nrounds: 5283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 676.185997567763,
            "unit": "iter/sec",
            "range": "stddev: 0.000027750736223097172",
            "extra": "mean: 1.4788830345452197 msec\nrounds: 550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 262.89537685079324,
            "unit": "iter/sec",
            "range": "stddev: 0.0003081565624493181",
            "extra": "mean: 3.8037945435896803 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.46900443377119,
            "unit": "iter/sec",
            "range": "stddev: 0.0008397034144880502",
            "extra": "mean: 9.95331849495131 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1878288.5787985753,
            "unit": "iter/sec",
            "range": "stddev: 1.2394397549439016e-7",
            "extra": "mean: 532.3995531291778 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.10271097156129,
            "unit": "iter/sec",
            "range": "stddev: 0.002780834030252408",
            "extra": "mean: 17.824450595745798 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1076424.9272562691,
            "unit": "iter/sec",
            "range": "stddev: 1.2480716401147952e-7",
            "extra": "mean: 929.0011543572566 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2551965.9841234684,
            "unit": "iter/sec",
            "range": "stddev: 1.814322308784251e-8",
            "extra": "mean: 391.8547528537771 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 221.60216265899717,
            "unit": "iter/sec",
            "range": "stddev: 0.004271571044647968",
            "extra": "mean: 4.512591339367055 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 101.3775327987549,
            "unit": "iter/sec",
            "range": "stddev: 0.0006976105606890382",
            "extra": "mean: 9.864118531914814 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2241.3766574752003,
            "unit": "iter/sec",
            "range": "stddev: 0.00010540997661830659",
            "extra": "mean: 446.15437421680406 usec\nrounds: 1117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 95.81138592818245,
            "unit": "iter/sec",
            "range": "stddev: 0.000663557574292359",
            "extra": "mean: 10.437172892474097 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.31168771435621,
            "unit": "iter/sec",
            "range": "stddev: 0.016329255872348694",
            "extra": "mean: 10.60313969811166 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9076764384444106,
            "unit": "iter/sec",
            "range": "stddev: 0.0021081423335485273",
            "extra": "mean: 1.1017141765999952 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.00483661968826,
            "unit": "iter/sec",
            "range": "stddev: 0.0007504453611675587",
            "extra": "mean: 9.900515989796434 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4716.145671137347,
            "unit": "iter/sec",
            "range": "stddev: 0.0000540511997274232",
            "extra": "mean: 212.0375556081667 usec\nrounds: 2104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 184.67290129485454,
            "unit": "iter/sec",
            "range": "stddev: 0.00005575482565623619",
            "extra": "mean: 5.414979636906059 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.14239321715084,
            "unit": "iter/sec",
            "range": "stddev: 0.0007506486524928994",
            "extra": "mean: 9.887050999999758 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.13521649131258,
            "unit": "iter/sec",
            "range": "stddev: 0.0006507445337869644",
            "extra": "mean: 9.602899323529273 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2283.2467345930604,
            "unit": "iter/sec",
            "range": "stddev: 0.00008057615099058032",
            "extra": "mean: 437.9728151360867 usec\nrounds: 1731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.580357133043194,
            "unit": "iter/sec",
            "range": "stddev: 0.029292644969231535",
            "extra": "mean: 32.70072993750173 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.35857956823781,
            "unit": "iter/sec",
            "range": "stddev: 0.00003941841497724296",
            "extra": "mean: 6.395555669291439 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2269.188656551456,
            "unit": "iter/sec",
            "range": "stddev: 0.00008155548795704912",
            "extra": "mean: 440.68614441239345 usec\nrounds: 1378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7368234.546221797,
            "unit": "iter/sec",
            "range": "stddev: 3.955414981243154e-9",
            "extra": "mean: 135.71772094482023 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8110.907741384055,
            "unit": "iter/sec",
            "range": "stddev: 0.00002465418713388916",
            "extra": "mean: 123.29076249970497 usec\nrounds: 3680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.04767988206802,
            "unit": "iter/sec",
            "range": "stddev: 0.000667494539872713",
            "extra": "mean: 10.096147645160983 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1187.998104160219,
            "unit": "iter/sec",
            "range": "stddev: 0.00001432242911842293",
            "extra": "mean: 841.7521850397962 usec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9020156637036907,
            "unit": "iter/sec",
            "range": "stddev: 0.006385761959083616",
            "extra": "mean: 1.1086281982000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.30555870544087,
            "unit": "iter/sec",
            "range": "stddev: 0.017089277865841055",
            "extra": "mean: 11.861614054346603 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3293685282112626,
            "unit": "iter/sec",
            "range": "stddev: 0.0035051992280142395",
            "extra": "mean: 752.2368544000017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6356347.624236919,
            "unit": "iter/sec",
            "range": "stddev: 1.1365080154545052e-8",
            "extra": "mean: 157.32305076962388 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2281.002532781968,
            "unit": "iter/sec",
            "range": "stddev: 0.00010906320380426576",
            "extra": "mean: 438.40372188468143 usec\nrounds: 1316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2314.678583290857,
            "unit": "iter/sec",
            "range": "stddev: 0.00008496375164747609",
            "extra": "mean: 432.0254255682731 usec\nrounds: 1760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.1280990867899,
            "unit": "iter/sec",
            "range": "stddev: 0.00008549267777360639",
            "extra": "mean: 6.130151737181495 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.21279850498506,
            "unit": "iter/sec",
            "range": "stddev: 0.0009399271710728218",
            "extra": "mean: 10.07934475258002 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1755.7985317698974,
            "unit": "iter/sec",
            "range": "stddev: 0.000006734758715702979",
            "extra": "mean: 569.5414262546227 usec\nrounds: 1295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4939239458519573,
            "unit": "iter/sec",
            "range": "stddev: 0.0026859974788160123",
            "extra": "mean: 400.97453720000544 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 147.53146122532502,
            "unit": "iter/sec",
            "range": "stddev: 0.004661162318383434",
            "extra": "mean: 6.778215247747722 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2225.7126370141677,
            "unit": "iter/sec",
            "range": "stddev: 0.00008476460994175771",
            "extra": "mean: 449.2942994390854 usec\nrounds: 1249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13433.562577524015,
            "unit": "iter/sec",
            "range": "stddev: 0.000002664176410342265",
            "extra": "mean: 74.44041699505101 usec\nrounds: 7108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.13782658656586,
            "unit": "iter/sec",
            "range": "stddev: 0.0008493620422078885",
            "extra": "mean: 10.40173296511509 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 45.34482807796228,
            "unit": "iter/sec",
            "range": "stddev: 0.0007291310735262262",
            "extra": "mean: 22.05323170000071 msec\nrounds: 40"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "66c0afb9a3ec522b1fdfa67097c085285acd7fa6",
          "message": "feat(datafusion): add string functions",
          "timestamp": "2023-05-21T06:16:58-05:00",
          "tree_id": "203c8494a4b078b19ebefc988fc9144f2ab280d2",
          "url": "https://github.com/ibis-project/ibis/commit/66c0afb9a3ec522b1fdfa67097c085285acd7fa6"
        },
        "date": 1684668225392,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 248.6375965059453,
            "unit": "iter/sec",
            "range": "stddev: 0.00020322176514399058",
            "extra": "mean: 4.021917899999039 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 72.59872305789341,
            "unit": "iter/sec",
            "range": "stddev: 0.0010183262942182636",
            "extra": "mean: 13.774346956523686 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 76.45313201775483,
            "unit": "iter/sec",
            "range": "stddev: 0.0011777177806497287",
            "extra": "mean: 13.07990887499244 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 305.47176359713,
            "unit": "iter/sec",
            "range": "stddev: 0.0002489830410575533",
            "extra": "mean: 3.273624993106876 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 184.53300182581145,
            "unit": "iter/sec",
            "range": "stddev: 0.0006587578724144989",
            "extra": "mean: 5.419084879700502 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3223599.2513809483,
            "unit": "iter/sec",
            "range": "stddev: 2.3563627225693343e-7",
            "extra": "mean: 310.21225717553125 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1455697.5507576948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019398610943945267",
            "extra": "mean: 686.9558854993587 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1325.6310596142605,
            "unit": "iter/sec",
            "range": "stddev: 0.0005976829378377214",
            "extra": "mean: 754.3577021279101 usec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 74.55417030542574,
            "unit": "iter/sec",
            "range": "stddev: 0.0013378541437645323",
            "extra": "mean: 13.413065907692411 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 193.02017738232556,
            "unit": "iter/sec",
            "range": "stddev: 0.0006777045513291036",
            "extra": "mean: 5.180805517649305 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7370.790434578793,
            "unit": "iter/sec",
            "range": "stddev: 0.000040363362702040005",
            "extra": "mean: 135.6706595955669 usec\nrounds: 4007"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1221.596779950315,
            "unit": "iter/sec",
            "range": "stddev: 0.000278968262079848",
            "extra": "mean: 818.6007170391134 usec\nrounds: 986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 63.81108782615874,
            "unit": "iter/sec",
            "range": "stddev: 0.0010416749503523652",
            "extra": "mean: 15.67125767741668 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 73.04320536132931,
            "unit": "iter/sec",
            "range": "stddev: 0.0014330248536863043",
            "extra": "mean: 13.690527339992968 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 185.69958141304238,
            "unit": "iter/sec",
            "range": "stddev: 0.0008797794064495573",
            "extra": "mean: 5.385041756102559 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 70.9739139062006,
            "unit": "iter/sec",
            "range": "stddev: 0.0019089669931450786",
            "extra": "mean: 14.089683729737716 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 161.12137845427765,
            "unit": "iter/sec",
            "range": "stddev: 0.0007913335854551493",
            "extra": "mean: 6.206501021736082 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.51883594900349,
            "unit": "iter/sec",
            "range": "stddev: 0.0030243804577493693",
            "extra": "mean: 35.06454477273089 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5959889381373084,
            "unit": "iter/sec",
            "range": "stddev: 0.016369993395108827",
            "extra": "mean: 1.6778834907999793 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 27.196256404172072,
            "unit": "iter/sec",
            "range": "stddev: 0.030723965587639346",
            "extra": "mean: 36.76976658620537 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.52437148946534,
            "unit": "iter/sec",
            "range": "stddev: 0.0007636110663070629",
            "extra": "mean: 11.425389099998995 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8546.915916439959,
            "unit": "iter/sec",
            "range": "stddev: 0.000036344716356698864",
            "extra": "mean: 117.00126803359606 usec\nrounds: 2731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 84.8235421128924,
            "unit": "iter/sec",
            "range": "stddev: 0.0005294397394816987",
            "extra": "mean: 11.789179926830823 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5887.742260864445,
            "unit": "iter/sec",
            "range": "stddev: 0.00014418790799765473",
            "extra": "mean: 169.84439122733932 usec\nrounds: 570"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 67.67717704619542,
            "unit": "iter/sec",
            "range": "stddev: 0.0013581478428872599",
            "extra": "mean: 14.776030024382003 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.5328618410154755,
            "unit": "iter/sec",
            "range": "stddev: 0.004817736835613079",
            "extra": "mean: 153.0722712857125 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4190027.5806189557,
            "unit": "iter/sec",
            "range": "stddev: 6.339023384271231e-7",
            "extra": "mean: 238.66191349803822 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5302472.850943086,
            "unit": "iter/sec",
            "range": "stddev: 1.417247719877253e-7",
            "extra": "mean: 188.59125319655067 nsec\nrounds: 53192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.996371468689997,
            "unit": "iter/sec",
            "range": "stddev: 0.002882185889376837",
            "extra": "mean: 71.44708914285454 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 123.79502787848111,
            "unit": "iter/sec",
            "range": "stddev: 0.013286845863092967",
            "extra": "mean: 8.07786885416443 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4329498.788456296,
            "unit": "iter/sec",
            "range": "stddev: 4.0368722425016406e-7",
            "extra": "mean: 230.97361816251038 nsec\nrounds: 48544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.45620524582374,
            "unit": "iter/sec",
            "range": "stddev: 0.0015825254768351258",
            "extra": "mean: 19.819167833331463 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 197.07414207115133,
            "unit": "iter/sec",
            "range": "stddev: 0.0005396761707636875",
            "extra": "mean: 5.074232415731951 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 71.663746601324,
            "unit": "iter/sec",
            "range": "stddev: 0.0016486912591996698",
            "extra": "mean: 13.95405693150747 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 71.57551918305434,
            "unit": "iter/sec",
            "range": "stddev: 0.0017765347662784354",
            "extra": "mean: 13.971257371427523 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 787263.3193198135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028780099845158655",
            "extra": "mean: 1.2702230314299268 usec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0991270320718745,
            "unit": "iter/sec",
            "range": "stddev: 0.016517418822059128",
            "extra": "mean: 909.8129432000064 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1587.8296990384265,
            "unit": "iter/sec",
            "range": "stddev: 0.00013988876069525037",
            "extra": "mean: 629.7904621670635 usec\nrounds: 978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10260.598592122553,
            "unit": "iter/sec",
            "range": "stddev: 0.000022200064345545006",
            "extra": "mean: 97.46020088610986 usec\nrounds: 2260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.652105792089202,
            "unit": "iter/sec",
            "range": "stddev: 0.0013251921114928475",
            "extra": "mean: 37.520487416675984 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.796204267644224,
            "unit": "iter/sec",
            "range": "stddev: 0.04105382197366586",
            "extra": "mean: 35.97613510000126 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 22.049230377126914,
            "unit": "iter/sec",
            "range": "stddev: 0.002581872821657413",
            "extra": "mean: 45.35305690476001 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.3627535092977,
            "unit": "iter/sec",
            "range": "stddev: 0.0013400729409352146",
            "extra": "mean: 13.63089513636186 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1446.0257719483504,
            "unit": "iter/sec",
            "range": "stddev: 0.00019910752636942904",
            "extra": "mean: 691.5506067728081 usec\nrounds: 1063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 126.34510924824257,
            "unit": "iter/sec",
            "range": "stddev: 0.0006534018255503865",
            "extra": "mean: 7.914829516947922 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3009.9101524075572,
            "unit": "iter/sec",
            "range": "stddev: 0.00009645271547049935",
            "extra": "mean: 332.23583076063693 usec\nrounds: 1684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 876.1876678178846,
            "unit": "iter/sec",
            "range": "stddev: 0.00006836183904677325",
            "extra": "mean: 1.1413080059554659 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 75.21822632604119,
            "unit": "iter/sec",
            "range": "stddev: 0.0011133591219538326",
            "extra": "mean: 13.294650098041352 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 117.68825887672034,
            "unit": "iter/sec",
            "range": "stddev: 0.004227511306956678",
            "extra": "mean: 8.497024338235052 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 81.72187735873095,
            "unit": "iter/sec",
            "range": "stddev: 0.0009279848699820228",
            "extra": "mean: 12.236625397264723 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1481793.600146918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021768585021307127",
            "extra": "mean: 674.85782088737 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1506.0483554446057,
            "unit": "iter/sec",
            "range": "stddev: 0.0001787863945646868",
            "extra": "mean: 663.9893044501791 usec\nrounds: 854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 194.8881127854409,
            "unit": "iter/sec",
            "range": "stddev: 0.0005527394648280809",
            "extra": "mean: 5.131149282054646 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1515.8716201954478,
            "unit": "iter/sec",
            "range": "stddev: 0.0001384492143583874",
            "extra": "mean: 659.6864712534599 usec\nrounds: 974"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.032402317576035,
            "unit": "iter/sec",
            "range": "stddev: 0.014479089578247614",
            "extra": "mean: 968.6146408000013 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 143.38090736512484,
            "unit": "iter/sec",
            "range": "stddev: 0.00042200677481121524",
            "extra": "mean: 6.974429290320102 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 57.99753329811755,
            "unit": "iter/sec",
            "range": "stddev: 0.02552021486157876",
            "extra": "mean: 17.24211260606246 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1387855.4673034062,
            "unit": "iter/sec",
            "range": "stddev: 0.00000154131105599009",
            "extra": "mean: 720.536124660728 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 67.99215914042645,
            "unit": "iter/sec",
            "range": "stddev: 0.001909731455593524",
            "extra": "mean: 14.707578236112006 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1396.5345621747867,
            "unit": "iter/sec",
            "range": "stddev: 0.0003530025850671588",
            "extra": "mean: 716.0581822212306 usec\nrounds: 675"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 74.71722449169962,
            "unit": "iter/sec",
            "range": "stddev: 0.001338278263531954",
            "extra": "mean: 13.383794791669365 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5412521483795729,
            "unit": "iter/sec",
            "range": "stddev: 0.03020414752099778",
            "extra": "mean: 1.8475677241999846 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 39.85478722286328,
            "unit": "iter/sec",
            "range": "stddev: 0.0010050384957762959",
            "extra": "mean: 25.091088666666757 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 74.3595033196484,
            "unit": "iter/sec",
            "range": "stddev: 0.0012604875489221495",
            "extra": "mean: 13.448180196972412 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1551398.016714842,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011928372632277286",
            "extra": "mean: 644.5799138750654 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 162.2680881386334,
            "unit": "iter/sec",
            "range": "stddev: 0.003569170400794613",
            "extra": "mean: 6.162641166670134 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09911429106029142,
            "unit": "iter/sec",
            "range": "stddev: 0.129332605268204",
            "extra": "mean: 10.089362384599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9870346095054716,
            "unit": "iter/sec",
            "range": "stddev: 0.004598425983681659",
            "extra": "mean: 503.2624974000214 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4327408.782865925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011819116130061272",
            "extra": "mean: 231.08517132916677 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 91.31404318673921,
            "unit": "iter/sec",
            "range": "stddev: 0.0010564202500374102",
            "extra": "mean: 10.951218072284655 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 503.9155812179265,
            "unit": "iter/sec",
            "range": "stddev: 0.00015716888111355005",
            "extra": "mean: 1.984459376277023 msec\nrounds: 489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1553.9164380475831,
            "unit": "iter/sec",
            "range": "stddev: 0.00014681930390946605",
            "extra": "mean: 643.5352477874866 usec\nrounds: 678"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5781479359813936,
            "unit": "iter/sec",
            "range": "stddev: 0.03974037369268591",
            "extra": "mean: 1.729661108799985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 191.30047052908623,
            "unit": "iter/sec",
            "range": "stddev: 0.000488361254677653",
            "extra": "mean: 5.227378674157287 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 118.9192991239395,
            "unit": "iter/sec",
            "range": "stddev: 0.0007245316053035102",
            "extra": "mean: 8.409064023811515 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121830.60984652811,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061921177005785335",
            "extra": "mean: 8.208117822439823 usec\nrounds: 22780"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 124.08235311208627,
            "unit": "iter/sec",
            "range": "stddev: 0.0007179946575441835",
            "extra": "mean: 8.059163732143913 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.13553822246836,
            "unit": "iter/sec",
            "range": "stddev: 0.000713328145359911",
            "extra": "mean: 13.488807446155814 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.465095343139396,
            "unit": "iter/sec",
            "range": "stddev: 0.0021570786014197506",
            "extra": "mean: 54.1562326875038 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.65115097238696,
            "unit": "iter/sec",
            "range": "stddev: 0.0008364663761738935",
            "extra": "mean: 13.395640749998542 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.29907705731542,
            "unit": "iter/sec",
            "range": "stddev: 0.0015744850274123229",
            "extra": "mean: 13.459117388882033 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1503.8303148457658,
            "unit": "iter/sec",
            "range": "stddev: 0.00024537824130148875",
            "extra": "mean: 664.9686404962258 usec\nrounds: 1452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 38.88194815513981,
            "unit": "iter/sec",
            "range": "stddev: 0.002081280141274388",
            "extra": "mean: 25.718875916658764 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8515710.507043203,
            "unit": "iter/sec",
            "range": "stddev: 1.1766692433864314e-7",
            "extra": "mean: 117.43001352301171 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 544.2684893409358,
            "unit": "iter/sec",
            "range": "stddev: 0.00021265798221473963",
            "extra": "mean: 1.8373284869218085 msec\nrounds: 497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.73309428795886,
            "unit": "iter/sec",
            "range": "stddev: 0.001405645167373261",
            "extra": "mean: 13.748899449277966 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 184.8557363764115,
            "unit": "iter/sec",
            "range": "stddev: 0.0007496866791609219",
            "extra": "mean: 5.409623848316805 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 384.61404232842756,
            "unit": "iter/sec",
            "range": "stddev: 0.0002740858313347907",
            "extra": "mean: 2.600009073891497 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1497.973982150581,
            "unit": "iter/sec",
            "range": "stddev: 0.00015724192256988062",
            "extra": "mean: 667.5683369108589 usec\nrounds: 932"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 70.16619225159249,
            "unit": "iter/sec",
            "range": "stddev: 0.0018208102025546928",
            "extra": "mean: 14.251877833335099 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 132.14654708654314,
            "unit": "iter/sec",
            "range": "stddev: 0.019686841102749316",
            "extra": "mean: 7.567356257482061 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 71.91126002050066,
            "unit": "iter/sec",
            "range": "stddev: 0.0013522404431728055",
            "extra": "mean: 13.906028064518926 msec\nrounds: 62"
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "e499c7fcbcc2ed96e99657f16a39dfaee8ee41b7",
          "message": "fix(mysql): ensure enum string functions are coerced to the correct type",
          "timestamp": "2023-05-22T13:57:58+02:00",
          "tree_id": "7795a9110b8a7941de53eb05d325fab401e6ea0c",
          "url": "https://github.com/ibis-project/ibis/commit/e499c7fcbcc2ed96e99657f16a39dfaee8ee41b7"
        },
        "date": 1684757284690,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12033.082030997988,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025557321952396035",
            "extra": "mean: 83.10422861108535 usec\nrounds: 5061"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 75.74418741602322,
            "unit": "iter/sec",
            "range": "stddev: 0.011640902888751263",
            "extra": "mean: 13.202333196968935 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 71.20637701525365,
            "unit": "iter/sec",
            "range": "stddev: 0.00011732523571745352",
            "extra": "mean: 14.043686000002253 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1650795.4660442742,
            "unit": "iter/sec",
            "range": "stddev: 1.171218411729549e-7",
            "extra": "mean: 605.7685646522003 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5051568.456636725,
            "unit": "iter/sec",
            "range": "stddev: 1.8788517344236035e-8",
            "extra": "mean: 197.9583190020507 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1011.0789538063572,
            "unit": "iter/sec",
            "range": "stddev: 0.000014027958887698488",
            "extra": "mean: 989.0424444454623 usec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.902855496980475,
            "unit": "iter/sec",
            "range": "stddev: 0.0005175225383611526",
            "extra": "mean: 50.24404664706093 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1656374.2995337953,
            "unit": "iter/sec",
            "range": "stddev: 1.4658339083816803e-7",
            "extra": "mean: 603.7282758380524 nsec\nrounds: 117634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 206.19806671033425,
            "unit": "iter/sec",
            "range": "stddev: 0.009248707965833035",
            "extra": "mean: 4.849705993629871 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144299.43709361763,
            "unit": "iter/sec",
            "range": "stddev: 6.140382123447514e-7",
            "extra": "mean: 6.930033963689176 usec\nrounds: 32152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 88.67069715368989,
            "unit": "iter/sec",
            "range": "stddev: 0.0009111102923788957",
            "extra": "mean: 11.277682843371966 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 83.70340388724895,
            "unit": "iter/sec",
            "range": "stddev: 0.0010927876333109061",
            "extra": "mean: 11.946945447368313 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 452.00946664013435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000373302125080423",
            "extra": "mean: 2.212343045452511 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.27842363029279,
            "unit": "iter/sec",
            "range": "stddev: 0.00013920588834706504",
            "extra": "mean: 9.235450300000789 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 85.36566430130368,
            "unit": "iter/sec",
            "range": "stddev: 0.0010575447020708141",
            "extra": "mean: 11.714311698793027 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7713539147101812,
            "unit": "iter/sec",
            "range": "stddev: 0.01525420652309531",
            "extra": "mean: 1.2964217603999941 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3742642.9579129573,
            "unit": "iter/sec",
            "range": "stddev: 3.089596455293738e-8",
            "extra": "mean: 267.19086251225343 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 89.46967832337316,
            "unit": "iter/sec",
            "range": "stddev: 0.00009801203639740969",
            "extra": "mean: 11.176971000003684 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1488711025729743,
            "unit": "iter/sec",
            "range": "stddev: 0.001186003138490947",
            "extra": "mean: 870.419664800022 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5902261.4512014035,
            "unit": "iter/sec",
            "range": "stddev: 8.476900504636698e-9",
            "extra": "mean: 169.42658475365067 nsec\nrounds: 50500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1763.352321163127,
            "unit": "iter/sec",
            "range": "stddev: 0.00018730012339318616",
            "extra": "mean: 567.1016438396093 usec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3753.15975475199,
            "unit": "iter/sec",
            "range": "stddev: 0.0000368413420019929",
            "extra": "mean: 266.4421621631932 usec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 705.7379437639165,
            "unit": "iter/sec",
            "range": "stddev: 0.010963995299420723",
            "extra": "mean: 1.4169565471663517 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5179087.2905293135,
            "unit": "iter/sec",
            "range": "stddev: 9.977593661577965e-9",
            "extra": "mean: 193.084214245332 nsec\nrounds: 52351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1812.4392539143682,
            "unit": "iter/sec",
            "range": "stddev: 0.00008112498883840198",
            "extra": "mean: 551.7426296303593 usec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 89.98334103799017,
            "unit": "iter/sec",
            "range": "stddev: 0.0008215785258819619",
            "extra": "mean: 11.113168153845375 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 45.784019677322,
            "unit": "iter/sec",
            "range": "stddev: 0.0009561190667110648",
            "extra": "mean: 21.841682033334564 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.75253254193889,
            "unit": "iter/sec",
            "range": "stddev: 0.017541191530394372",
            "extra": "mean: 13.37747319047637 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8670.519962614248,
            "unit": "iter/sec",
            "range": "stddev: 0.000005085582277759507",
            "extra": "mean: 115.33333690618598 usec\nrounds: 4292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1439706.150474878,
            "unit": "iter/sec",
            "range": "stddev: 2.1657413213525154e-7",
            "extra": "mean: 694.5861832083973 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1862.6514036648312,
            "unit": "iter/sec",
            "range": "stddev: 0.00012567589093935355",
            "extra": "mean: 536.869109288225 usec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.352790073545522,
            "unit": "iter/sec",
            "range": "stddev: 0.0004881704568676291",
            "extra": "mean: 136.0027948571363 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 244.82800552335974,
            "unit": "iter/sec",
            "range": "stddev: 0.0003191795514572053",
            "extra": "mean: 4.084500046726015 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 84.18687381315108,
            "unit": "iter/sec",
            "range": "stddev: 0.0011052906076426177",
            "extra": "mean: 11.878336309523196 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 71.55044611436256,
            "unit": "iter/sec",
            "range": "stddev: 0.0008051761888137975",
            "extra": "mean: 13.97615324999723 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.613972965425116,
            "unit": "iter/sec",
            "range": "stddev: 0.0008913536782790514",
            "extra": "mean: 32.664822730763575 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10619.889208042507,
            "unit": "iter/sec",
            "range": "stddev: 0.000017344617006029973",
            "extra": "mean: 94.16294091304587 usec\nrounds: 3791"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 360.88657352670253,
            "unit": "iter/sec",
            "range": "stddev: 0.00005776680314715596",
            "extra": "mean: 2.770953738255404 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.87730968121565,
            "unit": "iter/sec",
            "range": "stddev: 0.0010854968048850662",
            "extra": "mean: 12.519199807691633 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.18314504666102,
            "unit": "iter/sec",
            "range": "stddev: 0.00010190682652399169",
            "extra": "mean: 10.50606175609953 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 169.2060485989281,
            "unit": "iter/sec",
            "range": "stddev: 0.0048016403083566694",
            "extra": "mean: 5.909954214286491 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.18918054667715,
            "unit": "iter/sec",
            "range": "stddev: 0.0007068976162213643",
            "extra": "mean: 23.70275950000078 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.156051149682433,
            "unit": "iter/sec",
            "range": "stddev: 0.040605430934978905",
            "extra": "mean: 33.16084042424536 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.11859062160075,
            "unit": "iter/sec",
            "range": "stddev: 0.0012988929239995466",
            "extra": "mean: 12.031002842102106 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 82.29765602569036,
            "unit": "iter/sec",
            "range": "stddev: 0.0010074828067220903",
            "extra": "mean: 12.151014358025412 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.37339013731709,
            "unit": "iter/sec",
            "range": "stddev: 0.002269519516974446",
            "extra": "mean: 728.125222999995 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 79.90764222111092,
            "unit": "iter/sec",
            "range": "stddev: 0.00025526782676876586",
            "extra": "mean: 12.514447582284044 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2063229131226967,
            "unit": "iter/sec",
            "range": "stddev: 0.0020426097014565898",
            "extra": "mean: 453.24281140001403 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.6334198410104,
            "unit": "iter/sec",
            "range": "stddev: 0.00007528491336120544",
            "extra": "mean: 7.161609313433857 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 67.47034679112633,
            "unit": "iter/sec",
            "range": "stddev: 0.020921245989424308",
            "extra": "mean: 14.821325924050528 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 639.6604749200765,
            "unit": "iter/sec",
            "range": "stddev: 0.00001854184088760673",
            "extra": "mean: 1.563329358633495 msec\nrounds: 527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 82.60677637956827,
            "unit": "iter/sec",
            "range": "stddev: 0.0012129832671482325",
            "extra": "mean: 12.105544409639222 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 196.63575512008353,
            "unit": "iter/sec",
            "range": "stddev: 0.00044147632679906735",
            "extra": "mean: 5.085545095241248 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 115.33657413632773,
            "unit": "iter/sec",
            "range": "stddev: 0.005178886515475377",
            "extra": "mean: 8.670276601227993 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1799.7753014449129,
            "unit": "iter/sec",
            "range": "stddev: 0.00011654535978526128",
            "extra": "mean: 555.6249156198389 usec\nrounds: 877"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 84.82706946663838,
            "unit": "iter/sec",
            "range": "stddev: 0.001033618649670902",
            "extra": "mean: 11.788689698791137 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 85.65549371930027,
            "unit": "iter/sec",
            "range": "stddev: 0.000993967151641567",
            "extra": "mean: 11.674674402987835 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.49861588153234,
            "unit": "iter/sec",
            "range": "stddev: 0.0002686458723701828",
            "extra": "mean: 6.7340694999997135 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.62121501266304,
            "unit": "iter/sec",
            "range": "stddev: 0.00012325389952351308",
            "extra": "mean: 10.56845444085844 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 181.2693967997225,
            "unit": "iter/sec",
            "range": "stddev: 0.01842315818754585",
            "extra": "mean: 5.516651004829354 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 887047.9705776521,
            "unit": "iter/sec",
            "range": "stddev: 3.102583193125452e-7",
            "extra": "mean: 1.127334747577172 usec\nrounds: 98991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.445645244019744,
            "unit": "iter/sec",
            "range": "stddev: 0.0006541849426803525",
            "extra": "mean: 39.29945538461128 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 572.9212300982263,
            "unit": "iter/sec",
            "range": "stddev: 0.000032558981722811",
            "extra": "mean: 1.745440642561896 msec\nrounds: 484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.16042528405416,
            "unit": "iter/sec",
            "range": "stddev: 0.0009690381000835943",
            "extra": "mean: 33.15603114285994 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 127.7673356600514,
            "unit": "iter/sec",
            "range": "stddev: 0.0003689678148889499",
            "extra": "mean: 7.826726563827586 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 263.5573412788874,
            "unit": "iter/sec",
            "range": "stddev: 0.00004280974273451949",
            "extra": "mean: 3.794240733904786 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.738593165672174,
            "unit": "iter/sec",
            "range": "stddev: 0.05380912764885915",
            "extra": "mean: 1.3539253359999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.08786722426125,
            "unit": "iter/sec",
            "range": "stddev: 0.0006732844448118797",
            "extra": "mean: 26.25507997368303 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14195057861782467,
            "unit": "iter/sec",
            "range": "stddev: 0.11159559062534415",
            "extra": "mean: 7.044705345599982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1810.69625400677,
            "unit": "iter/sec",
            "range": "stddev: 0.00010506700984406248",
            "extra": "mean: 552.2737443053554 usec\nrounds: 966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6632801898997882,
            "unit": "iter/sec",
            "range": "stddev: 0.004168845330117343",
            "extra": "mean: 1.5076584756000102 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.09858868133386,
            "unit": "iter/sec",
            "range": "stddev: 0.00021040023603670322",
            "extra": "mean: 62.11724641176087 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7196.582837513777,
            "unit": "iter/sec",
            "range": "stddev: 0.00001567915004576905",
            "extra": "mean: 138.954837674803 usec\nrounds: 3148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 85.93090839738093,
            "unit": "iter/sec",
            "range": "stddev: 0.0010305986525760672",
            "extra": "mean: 11.63725624050867 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 230.9016856365551,
            "unit": "iter/sec",
            "range": "stddev: 0.0003879601674696555",
            "extra": "mean: 4.3308475520357375 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9719870.336159118,
            "unit": "iter/sec",
            "range": "stddev: 5.511013643407771e-9",
            "extra": "mean: 102.88203087239728 nsec\nrounds: 96136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.24972929082577,
            "unit": "iter/sec",
            "range": "stddev: 0.0010514648571714794",
            "extra": "mean: 12.461101225351062 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 223.76494816289457,
            "unit": "iter/sec",
            "range": "stddev: 0.00025164020723934604",
            "extra": "mean: 4.46897518226147 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 243.89041076445977,
            "unit": "iter/sec",
            "range": "stddev: 0.00034857591815168435",
            "extra": "mean: 4.100202205021347 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.56302736058043,
            "unit": "iter/sec",
            "range": "stddev: 0.0010212523295509328",
            "extra": "mean: 11.825499053338717 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.41905562934681,
            "unit": "iter/sec",
            "range": "stddev: 0.00015655842839904494",
            "extra": "mean: 5.867888401957535 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 161.36056913234955,
            "unit": "iter/sec",
            "range": "stddev: 0.00008844634821739298",
            "extra": "mean: 6.197300898088615 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 240.92522166131326,
            "unit": "iter/sec",
            "range": "stddev: 0.00036976463604521055",
            "extra": "mean: 4.1506654766339715 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 232.27877059245284,
            "unit": "iter/sec",
            "range": "stddev: 0.0005058805901492012",
            "extra": "mean: 4.3051717444921405 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1853.5725190474775,
            "unit": "iter/sec",
            "range": "stddev: 0.00011430685561576834",
            "extra": "mean: 539.498719215952 usec\nrounds: 1478"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4599462.288051576,
            "unit": "iter/sec",
            "range": "stddev: 3.750577093760252e-8",
            "extra": "mean: 217.41671903637888 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1774.212157957096,
            "unit": "iter/sec",
            "range": "stddev: 0.00015858431793328256",
            "extra": "mean: 563.6304516994421 usec\nrounds: 1118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.43474988189843,
            "unit": "iter/sec",
            "range": "stddev: 0.0009337301577354193",
            "extra": "mean: 11.569420879523188 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.07969917835441,
            "unit": "iter/sec",
            "range": "stddev: 0.0004407706993641922",
            "extra": "mean: 22.182934186041834 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1672927.9382261867,
            "unit": "iter/sec",
            "range": "stddev: 2.449739875805051e-7",
            "extra": "mean: 597.7543785061685 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1508.073074098681,
            "unit": "iter/sec",
            "range": "stddev: 0.00006559682207629504",
            "extra": "mean: 663.0978413281881 usec\nrounds: 1084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1914.5915737841908,
            "unit": "iter/sec",
            "range": "stddev: 0.0001027763332996035",
            "extra": "mean: 522.3046072554783 usec\nrounds: 1268"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "31ce741cc9a7c7c890c3552e3e4f466845cf556f",
          "message": "feat(common): add support for start parameter in StringFind",
          "timestamp": "2023-05-22T07:29:34-05:00",
          "tree_id": "a12b35ed57f7c26c6f74788b3ebb09b8c0c72af3",
          "url": "https://github.com/ibis-project/ibis/commit/31ce741cc9a7c7c890c3552e3e4f466845cf556f"
        },
        "date": 1684759111682,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1174.4663428183278,
            "unit": "iter/sec",
            "range": "stddev: 0.00002735467796715203",
            "extra": "mean: 851.4505384635657 usec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1307.2618883808052,
            "unit": "iter/sec",
            "range": "stddev: 0.004481552932855913",
            "extra": "mean: 764.9576637154285 usec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2117.3472427814663,
            "unit": "iter/sec",
            "range": "stddev: 0.0000813653406988068",
            "extra": "mean: 472.28908881584476 usec\nrounds: 1520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148404.26630043433,
            "unit": "iter/sec",
            "range": "stddev: 3.369243207990058e-7",
            "extra": "mean: 6.738350755870913 usec\nrounds: 35586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 155.60199663527834,
            "unit": "iter/sec",
            "range": "stddev: 0.0037175542573217634",
            "extra": "mean: 6.426652752688897 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6142849.665791782,
            "unit": "iter/sec",
            "range": "stddev: 8.351768069701477e-9",
            "extra": "mean: 162.79089582295762 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9233612132094717,
            "unit": "iter/sec",
            "range": "stddev: 0.006320777666396427",
            "extra": "mean: 1.0829997899999966 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.78843360201935,
            "unit": "iter/sec",
            "range": "stddev: 0.00002599785772104725",
            "extra": "mean: 5.0559073743015395 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 290.31281844299605,
            "unit": "iter/sec",
            "range": "stddev: 0.00023473973247077392",
            "extra": "mean: 3.444560269033913 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 179.4336423799687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000909606534332338",
            "extra": "mean: 5.573090902777306 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 105.19359234034305,
            "unit": "iter/sec",
            "range": "stddev: 0.0001629784180517866",
            "extra": "mean: 9.506282443179646 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5386183.613357338,
            "unit": "iter/sec",
            "range": "stddev: 9.955453700104878e-9",
            "extra": "mean: 185.66021357293954 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11654798.043866148,
            "unit": "iter/sec",
            "range": "stddev: 3.602867786605755e-9",
            "extra": "mean: 85.80157255716934 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6258910935143809,
            "unit": "iter/sec",
            "range": "stddev: 0.0018469408885520846",
            "extra": "mean: 615.0473448000071 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.49937187421011,
            "unit": "iter/sec",
            "range": "stddev: 0.0009009946992791859",
            "extra": "mean: 10.050314702129254 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13872.79097577891,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015278484725119074",
            "extra": "mean: 72.08354841833501 usec\nrounds: 2086"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.93909112152109,
            "unit": "iter/sec",
            "range": "stddev: 0.0008806946529747612",
            "extra": "mean: 10.0060946000004 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6055435.7997438265,
            "unit": "iter/sec",
            "range": "stddev: 9.654600500553473e-9",
            "extra": "mean: 165.14088053609655 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1633303.4960967808,
            "unit": "iter/sec",
            "range": "stddev: 2.3829584832316788e-7",
            "extra": "mean: 612.2560824670795 nsec\nrounds: 106372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.741272800327195,
            "unit": "iter/sec",
            "range": "stddev: 0.0004319033420079397",
            "extra": "mean: 18.960482879999745 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7850217899008468,
            "unit": "iter/sec",
            "range": "stddev: 0.004503570371336976",
            "extra": "mean: 1.273849991000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.226407208857832,
            "unit": "iter/sec",
            "range": "stddev: 0.00008430134810340938",
            "extra": "mean: 33.08365407407568 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.95229456788228,
            "unit": "iter/sec",
            "range": "stddev: 0.00007104357610724575",
            "extra": "mean: 8.853295135133516 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.68182171037861,
            "unit": "iter/sec",
            "range": "stddev: 0.01849120065962849",
            "extra": "mean: 24.58100345454499 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.404846664606744,
            "unit": "iter/sec",
            "range": "stddev: 0.0003304314701791404",
            "extra": "mean: 19.082204483872317 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.602903967013408,
            "unit": "iter/sec",
            "range": "stddev: 0.0001639794589682634",
            "extra": "mean: 116.23981899999762 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1998258.5348866854,
            "unit": "iter/sec",
            "range": "stddev: 1.77431805798805e-7",
            "extra": "mean: 500.4357456962928 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 212.57930655956324,
            "unit": "iter/sec",
            "range": "stddev: 0.004223327411940904",
            "extra": "mean: 4.70412673831828 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 128.07685484441947,
            "unit": "iter/sec",
            "range": "stddev: 0.0001782531154793909",
            "extra": "mean: 7.807811967390545 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.79499182466092,
            "unit": "iter/sec",
            "range": "stddev: 0.00046549867981632965",
            "extra": "mean: 21.836448924999985 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 421.22491811290456,
            "unit": "iter/sec",
            "range": "stddev: 0.000035192942473775575",
            "extra": "mean: 2.3740285937499106 msec\nrounds: 384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7108745.767716851,
            "unit": "iter/sec",
            "range": "stddev: 6.230781105350657e-9",
            "extra": "mean: 140.67179115357217 nsec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.8474116252734,
            "unit": "iter/sec",
            "range": "stddev: 0.00035648217789010237",
            "extra": "mean: 3.67853419689147 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8990703348949952,
            "unit": "iter/sec",
            "range": "stddev: 0.010004299047541503",
            "extra": "mean: 1.1122600325999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1775.1411570236394,
            "unit": "iter/sec",
            "range": "stddev: 0.000007571441210680151",
            "extra": "mean: 563.3354823887298 usec\nrounds: 1306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10035.516343676674,
            "unit": "iter/sec",
            "range": "stddev: 0.000002843191042493307",
            "extra": "mean: 99.64609350968719 usec\nrounds: 4684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.44975779135413,
            "unit": "iter/sec",
            "range": "stddev: 0.0009050023502019022",
            "extra": "mean: 10.587639644445328 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.765885090312,
            "unit": "iter/sec",
            "range": "stddev: 0.000023508478237184414",
            "extra": "mean: 1.835650923394769 msec\nrounds: 483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 74.44100523886254,
            "unit": "iter/sec",
            "range": "stddev: 0.015395246333252424",
            "extra": "mean: 13.43345642352962 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.455151014514,
            "unit": "iter/sec",
            "range": "stddev: 0.00008297143634452798",
            "extra": "mean: 1.456759408858827 msec\nrounds: 587"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2077.8244473815107,
            "unit": "iter/sec",
            "range": "stddev: 0.00008734694231191915",
            "extra": "mean: 481.2726124481821 usec\nrounds: 1205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.06080725224821,
            "unit": "iter/sec",
            "range": "stddev: 0.0007423726623594654",
            "extra": "mean: 27.73093771875157 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.17658095825355,
            "unit": "iter/sec",
            "range": "stddev: 0.0008243811087038657",
            "extra": "mean: 9.692121901234659 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 283.6777437577505,
            "unit": "iter/sec",
            "range": "stddev: 0.0003089439883830638",
            "extra": "mean: 3.5251267397768093 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2127.520338276653,
            "unit": "iter/sec",
            "range": "stddev: 0.00009306417110660607",
            "extra": "mean: 470.0307592876062 usec\nrounds: 1292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.86979583678794,
            "unit": "iter/sec",
            "range": "stddev: 0.0007487656431735308",
            "extra": "mean: 9.445564640000157 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.78472858192323,
            "unit": "iter/sec",
            "range": "stddev: 0.0008084858781473375",
            "extra": "mean: 9.63532895122082 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.47277811520297,
            "unit": "iter/sec",
            "range": "stddev: 0.0008550709375397319",
            "extra": "mean: 9.48111937383262 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 78.22612658067986,
            "unit": "iter/sec",
            "range": "stddev: 0.01919866870095037",
            "extra": "mean: 12.783452840000109 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 285.8236496263481,
            "unit": "iter/sec",
            "range": "stddev: 0.00025971093627932785",
            "extra": "mean: 3.4986608046859713 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.217250689470877,
            "unit": "iter/sec",
            "range": "stddev: 0.0000820676737434488",
            "extra": "mean: 52.036579849993814 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1979450.0727566078,
            "unit": "iter/sec",
            "range": "stddev: 9.28400370060121e-8",
            "extra": "mean: 505.19081726945865 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.81685307909086,
            "unit": "iter/sec",
            "range": "stddev: 0.023990389845438567",
            "extra": "mean: 13.733084549998864 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.30561525722128,
            "unit": "iter/sec",
            "range": "stddev: 0.000033382707491772856",
            "extra": "mean: 9.0657216105282 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 314.6763974918112,
            "unit": "iter/sec",
            "range": "stddev: 0.00002559864042745401",
            "extra": "mean: 3.177867828571486 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 191.38315570422608,
            "unit": "iter/sec",
            "range": "stddev: 0.0000645755677439781",
            "extra": "mean: 5.225120237569153 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3550284231331224,
            "unit": "iter/sec",
            "range": "stddev: 0.0006155701387851804",
            "extra": "mean: 737.9918995999958 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.19870762962915,
            "unit": "iter/sec",
            "range": "stddev: 0.00009282912053842866",
            "extra": "mean: 9.505820200003585 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4606.948381799159,
            "unit": "iter/sec",
            "range": "stddev: 0.000022890251706543144",
            "extra": "mean: 217.0634261826629 usec\nrounds: 2093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 260.4072112325349,
            "unit": "iter/sec",
            "range": "stddev: 0.00039821487734616434",
            "extra": "mean: 3.8401394311121195 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1055732.4546035712,
            "unit": "iter/sec",
            "range": "stddev: 1.2784913546983913e-7",
            "extra": "mean: 947.209679535239 nsec\nrounds: 119034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.95985021569355,
            "unit": "iter/sec",
            "range": "stddev: 0.00010237108374916606",
            "extra": "mean: 10.530766399995173 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.553984795089047,
            "unit": "iter/sec",
            "range": "stddev: 0.000844363595834596",
            "extra": "mean: 40.72658708333184 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.80198365911657,
            "unit": "iter/sec",
            "range": "stddev: 0.0008155834973821557",
            "extra": "mean: 9.920439694735705 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2153.6900671509493,
            "unit": "iter/sec",
            "range": "stddev: 0.00009674589189693063",
            "extra": "mean: 464.31936296333924 usec\nrounds: 1755"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4527529.902440402,
            "unit": "iter/sec",
            "range": "stddev: 1.2279311602769371e-8",
            "extra": "mean: 220.8709873926831 nsec\nrounds: 188644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.43237906226527,
            "unit": "iter/sec",
            "range": "stddev: 0.0008386729290670443",
            "extra": "mean: 10.057086126580485 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 98.46531937589427,
            "unit": "iter/sec",
            "range": "stddev: 0.0007005714360577472",
            "extra": "mean: 10.155860015874934 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16996848420842153,
            "unit": "iter/sec",
            "range": "stddev: 0.0077897172321792114",
            "extra": "mean: 5.883443655200006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.15327325425645,
            "unit": "iter/sec",
            "range": "stddev: 0.0008502948716304475",
            "extra": "mean: 9.984696131311921 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 103.73236531714842,
            "unit": "iter/sec",
            "range": "stddev: 0.0006791562578869503",
            "extra": "mean: 9.640192787878963 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2116.8576096458014,
            "unit": "iter/sec",
            "range": "stddev: 0.00009929980089924842",
            "extra": "mean: 472.3983301679525 usec\nrounds: 1896"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 260.72627537847256,
            "unit": "iter/sec",
            "range": "stddev: 0.00017511348752720707",
            "extra": "mean: 3.835440055086091 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.65969731964641,
            "unit": "iter/sec",
            "range": "stddev: 0.000844224599609977",
            "extra": "mean: 10.034146469385925 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2068.4825337022357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000917922302160716",
            "extra": "mean: 483.44619000005196 usec\nrounds: 1600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.94986456993666,
            "unit": "iter/sec",
            "range": "stddev: 0.0004853352536004269",
            "extra": "mean: 15.396490918363975 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.64980900036112,
            "unit": "iter/sec",
            "range": "stddev: 0.02005225211739167",
            "extra": "mean: 12.55495791578692 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2114.597829795171,
            "unit": "iter/sec",
            "range": "stddev: 0.0000855463378849012",
            "extra": "mean: 472.90316196761836 usec\nrounds: 1667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12460.234196216374,
            "unit": "iter/sec",
            "range": "stddev: 0.00001585922347240497",
            "extra": "mean: 80.25531336350453 usec\nrounds: 5575"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8527.782734781538,
            "unit": "iter/sec",
            "range": "stddev: 0.000014357584692827737",
            "extra": "mean: 117.26377548543603 usec\nrounds: 4895"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.79188688295683,
            "unit": "iter/sec",
            "range": "stddev: 0.0012020859788096636",
            "extra": "mean: 25.13075097296549 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.42141043730726,
            "unit": "iter/sec",
            "range": "stddev: 0.0007248375184611098",
            "extra": "mean: 9.763583568419083 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.560968778840346,
            "unit": "iter/sec",
            "range": "stddev: 0.0021589843969554603",
            "extra": "mean: 390.47723200000064 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.8854334706149,
            "unit": "iter/sec",
            "range": "stddev: 0.00012048160689215056",
            "extra": "mean: 6.21560310606147 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2137.6527510284204,
            "unit": "iter/sec",
            "range": "stddev: 0.00008490174262342873",
            "extra": "mean: 467.8028269647172 usec\nrounds: 1387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.86427815457294,
            "unit": "iter/sec",
            "range": "stddev: 0.0008110039730677003",
            "extra": "mean: 10.013590629996543 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.3886301619702,
            "unit": "iter/sec",
            "range": "stddev: 0.00018185837024451695",
            "extra": "mean: 6.046364849994035 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.5525359051354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000414427462035256",
            "extra": "mean: 1.359522197512987 msec\nrounds: 643"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 266.07198995210683,
            "unit": "iter/sec",
            "range": "stddev: 0.0006456104715659186",
            "extra": "mean: 3.758381331984629 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2003571.7791775481,
            "unit": "iter/sec",
            "range": "stddev: 1.0354626657000015e-7",
            "extra": "mean: 499.10864706354215 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 278.83921195456674,
            "unit": "iter/sec",
            "range": "stddev: 0.0002796273504969209",
            "extra": "mean: 3.586296177608396 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 236.156341904781,
            "unit": "iter/sec",
            "range": "stddev: 0.00029583041771350194",
            "extra": "mean: 4.2344829358984715 msec\nrounds: 234"
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "4f3a4cda10ac02b4cd9093f82a63be1f0b70b55e",
          "message": "refactor(trino): always clean up prepared statements created when accessing query metadata",
          "timestamp": "2023-05-22T14:42:02+02:00",
          "tree_id": "fed53f563e11fca009613e0831ece31ae6a71941",
          "url": "https://github.com/ibis-project/ibis/commit/4f3a4cda10ac02b4cd9093f82a63be1f0b70b55e"
        },
        "date": 1684760272290,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10037.52408690167,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037287550005283804",
            "extra": "mean: 99.62616192422753 usec\nrounds: 2495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1048218.7520194376,
            "unit": "iter/sec",
            "range": "stddev: 2.058691774036152e-7",
            "extra": "mean: 953.9993422875309 nsec\nrounds: 72993"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.76058025446851,
            "unit": "iter/sec",
            "range": "stddev: 0.0009959177622467863",
            "extra": "mean: 10.125497414285942 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5573585.046024,
            "unit": "iter/sec",
            "range": "stddev: 1.3563409666707475e-8",
            "extra": "mean: 179.41773414111285 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 178.08684608573265,
            "unit": "iter/sec",
            "range": "stddev: 0.00006874465748937446",
            "extra": "mean: 5.615237857144097 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2031.5274780997086,
            "unit": "iter/sec",
            "range": "stddev: 0.00008306087140748412",
            "extra": "mean: 492.2404499964727 usec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.3255757726912,
            "unit": "iter/sec",
            "range": "stddev: 0.00043624771093642205",
            "extra": "mean: 3.9789026521695496 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 76.12435107010353,
            "unit": "iter/sec",
            "range": "stddev: 0.02236486412976062",
            "extra": "mean: 13.136400980010876 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2157.36085819801,
            "unit": "iter/sec",
            "range": "stddev: 0.00011279742790305267",
            "extra": "mean: 463.5293146253126 usec\nrounds: 1764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2092.6097041803846,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054202628364749",
            "extra": "mean: 477.8721985290953 usec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.39490339510825,
            "unit": "iter/sec",
            "range": "stddev: 0.0007142000677764772",
            "extra": "mean: 24.157563322594267 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1934312.8061339941,
            "unit": "iter/sec",
            "range": "stddev: 1.6066116093254099e-7",
            "extra": "mean: 516.9794651769098 nsec\nrounds: 90091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 92.35618491145978,
            "unit": "iter/sec",
            "range": "stddev: 0.0012023252965699836",
            "extra": "mean: 10.827645175671583 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 46.53051144936213,
            "unit": "iter/sec",
            "range": "stddev: 0.00015721453566893754",
            "extra": "mean: 21.49127462500111 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 122.04214984353403,
            "unit": "iter/sec",
            "range": "stddev: 0.00017614080193975156",
            "extra": "mean: 8.19389040001397 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2143.4929398517315,
            "unit": "iter/sec",
            "range": "stddev: 0.00014252584442834085",
            "extra": "mean: 466.52824528042134 usec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 97.29635084043949,
            "unit": "iter/sec",
            "range": "stddev: 0.0011215961433815422",
            "extra": "mean: 10.277877755558821 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.35173130371708,
            "unit": "iter/sec",
            "range": "stddev: 0.0007494267538332234",
            "extra": "mean: 22.54703414286312 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 527.782633031583,
            "unit": "iter/sec",
            "range": "stddev: 0.00010001692349631777",
            "extra": "mean: 1.8947194117699568 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 292.3018695932796,
            "unit": "iter/sec",
            "range": "stddev: 0.00012024335365134612",
            "extra": "mean: 3.4211207796632968 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 272.87826990688836,
            "unit": "iter/sec",
            "range": "stddev: 0.00044939369394906436",
            "extra": "mean: 3.6646377168149753 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.02592303781068,
            "unit": "iter/sec",
            "range": "stddev: 0.03654359309307519",
            "extra": "mean: 10.749691777780551 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.96999334809318,
            "unit": "iter/sec",
            "range": "stddev: 0.0002856501440618208",
            "extra": "mean: 9.261832560978485 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.19051192242115,
            "unit": "iter/sec",
            "range": "stddev: 0.0012036507116187987",
            "extra": "mean: 10.505248682925302 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3189787104055064,
            "unit": "iter/sec",
            "range": "stddev: 0.002539841919205116",
            "extra": "mean: 758.16235100001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.641179879237804,
            "unit": "iter/sec",
            "range": "stddev: 0.000521081576653669",
            "extra": "mean: 25.226292533329797 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 272.46726165513905,
            "unit": "iter/sec",
            "range": "stddev: 0.00038785331644164997",
            "extra": "mean: 3.6701657069747218 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 72.77799760955604,
            "unit": "iter/sec",
            "range": "stddev: 0.03017898217749399",
            "extra": "mean: 13.740416511111814 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 24.899949848700064,
            "unit": "iter/sec",
            "range": "stddev: 0.0013550695002278177",
            "extra": "mean: 40.160723458332846 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 272.45605998784754,
            "unit": "iter/sec",
            "range": "stddev: 0.00041090922579449914",
            "extra": "mean: 3.6703166009396284 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4502136.482099175,
            "unit": "iter/sec",
            "range": "stddev: 1.6722369248411858e-8",
            "extra": "mean: 222.11676700053533 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7177935.329284803,
            "unit": "iter/sec",
            "range": "stddev: 6.323325020492113e-9",
            "extra": "mean: 139.31582748045506 nsec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6010125.305353203,
            "unit": "iter/sec",
            "range": "stddev: 1.7567790311224378e-8",
            "extra": "mean: 166.38588202269906 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 419.6499615502078,
            "unit": "iter/sec",
            "range": "stddev: 0.0003321434733101178",
            "extra": "mean: 2.382938381087777 msec\nrounds: 349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 96.17776295373103,
            "unit": "iter/sec",
            "range": "stddev: 0.0012293308779555995",
            "extra": "mean: 10.397413802201635 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2221.4254279543907,
            "unit": "iter/sec",
            "range": "stddev: 0.00008497315624539505",
            "extra": "mean: 450.16140871352786 usec\nrounds: 964"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.84576556190778,
            "unit": "iter/sec",
            "range": "stddev: 0.0011220655561850852",
            "extra": "mean: 10.015447268817482 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 93.4391535565256,
            "unit": "iter/sec",
            "range": "stddev: 0.0014195848342339048",
            "extra": "mean: 10.702151741936046 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1922480.5728763372,
            "unit": "iter/sec",
            "range": "stddev: 1.477939914529267e-7",
            "extra": "mean: 520.1613031146737 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148331.59185399703,
            "unit": "iter/sec",
            "range": "stddev: 4.728441684611157e-7",
            "extra": "mean: 6.7416521827952955 usec\nrounds: 29941"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6174794.46157117,
            "unit": "iter/sec",
            "range": "stddev: 8.458407510609636e-9",
            "extra": "mean: 161.94871039408784 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8787950234713088,
            "unit": "iter/sec",
            "range": "stddev: 0.008883805069090528",
            "extra": "mean: 1.1379217830000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.48010558434065,
            "unit": "iter/sec",
            "range": "stddev: 0.00012503141749051504",
            "extra": "mean: 9.663693270828352 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 63.78043314537304,
            "unit": "iter/sec",
            "range": "stddev: 0.0003989797226391548",
            "extra": "mean: 15.67878972726207 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.577021046354172,
            "unit": "iter/sec",
            "range": "stddev: 0.0012192191708707133",
            "extra": "mean: 56.89246188889444 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2086.3185370747574,
            "unit": "iter/sec",
            "range": "stddev: 0.0001609472215581407",
            "extra": "mean: 479.31319318195165 usec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.22825529187233,
            "unit": "iter/sec",
            "range": "stddev: 0.00011758650727253083",
            "extra": "mean: 6.164154315787061 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.46031871089022,
            "unit": "iter/sec",
            "range": "stddev: 0.0012750403082475198",
            "extra": "mean: 10.586455917649907 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1175.3978079001029,
            "unit": "iter/sec",
            "range": "stddev: 0.000014454972904417893",
            "extra": "mean: 850.7757912076947 usec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14135.986123387913,
            "unit": "iter/sec",
            "range": "stddev: 0.000002747729898508444",
            "extra": "mean: 70.7414389962866 usec\nrounds: 6057"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 95.87798204290947,
            "unit": "iter/sec",
            "range": "stddev: 0.0012137392055923658",
            "extra": "mean: 10.429923311824163 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 124.28536239067341,
            "unit": "iter/sec",
            "range": "stddev: 0.0002345859882913628",
            "extra": "mean: 8.045999792450553 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.07205783305923,
            "unit": "iter/sec",
            "range": "stddev: 0.0005503195472150946",
            "extra": "mean: 11.754740927536343 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.6110175257097,
            "unit": "iter/sec",
            "range": "stddev: 0.000022344144079050155",
            "extra": "mean: 1.3340252165726776 msec\nrounds: 531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 259.3445008534835,
            "unit": "iter/sec",
            "range": "stddev: 0.0004999657356685606",
            "extra": "mean: 3.8558750878043457 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1751.8247265336454,
            "unit": "iter/sec",
            "range": "stddev: 0.000012138100087616263",
            "extra": "mean: 570.8333629807308 usec\nrounds: 1248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5639590472080869,
            "unit": "iter/sec",
            "range": "stddev: 0.003122245028390697",
            "extra": "mean: 639.4029318000094 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2105.719327324195,
            "unit": "iter/sec",
            "range": "stddev: 0.00010610385744988846",
            "extra": "mean: 474.8970990691015 usec\nrounds: 969"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7639080509069702,
            "unit": "iter/sec",
            "range": "stddev: 0.0038931619991793773",
            "extra": "mean: 1.309058071600009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1900458.576511343,
            "unit": "iter/sec",
            "range": "stddev: 1.348253921450623e-7",
            "extra": "mean: 526.1887906210995 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 180.05577102683586,
            "unit": "iter/sec",
            "range": "stddev: 0.004596652740776193",
            "extra": "mean: 5.553834760736206 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 116.66359308125755,
            "unit": "iter/sec",
            "range": "stddev: 0.005040455767509706",
            "extra": "mean: 8.571654391816034 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.5917496853696,
            "unit": "iter/sec",
            "range": "stddev: 0.0003744362382133133",
            "extra": "mean: 3.7794073367333496 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4517.034892625219,
            "unit": "iter/sec",
            "range": "stddev: 0.00007300979056894677",
            "extra": "mean: 221.3841654472627 usec\nrounds: 683"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 89.85838675490474,
            "unit": "iter/sec",
            "range": "stddev: 0.0012492381202974397",
            "extra": "mean: 11.12862178048636 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 90.11939535940077,
            "unit": "iter/sec",
            "range": "stddev: 0.0014765364244331716",
            "extra": "mean: 11.096390471906172 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 184.17116217394246,
            "unit": "iter/sec",
            "range": "stddev: 0.025876320603537135",
            "extra": "mean: 5.429731713673713 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12373.749902482572,
            "unit": "iter/sec",
            "range": "stddev: 0.00002156873768536662",
            "extra": "mean: 80.81624470196928 usec\nrounds: 4152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 89.67517870022388,
            "unit": "iter/sec",
            "range": "stddev: 0.0013542086285403241",
            "extra": "mean: 11.151357761359034 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.91186206666075,
            "unit": "iter/sec",
            "range": "stddev: 0.0003282922948219755",
            "extra": "mean: 5.13052407071046 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 88.55541646323165,
            "unit": "iter/sec",
            "range": "stddev: 0.0013996268750697321",
            "extra": "mean: 11.292364035295362 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.961458692565007,
            "unit": "iter/sec",
            "range": "stddev: 0.00020269505181653993",
            "extra": "mean: 52.73855857894049 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2126.1152164818236,
            "unit": "iter/sec",
            "range": "stddev: 0.0001019113888461527",
            "extra": "mean: 470.34139648120487 usec\nrounds: 966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 28.690317743126794,
            "unit": "iter/sec",
            "range": "stddev: 0.0011661374054574621",
            "extra": "mean: 34.85496427586848 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1729444.0529360003,
            "unit": "iter/sec",
            "range": "stddev: 1.2728841546109783e-7",
            "extra": "mean: 578.2204971027219 nsec\nrounds: 66663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 67.46020200050918,
            "unit": "iter/sec",
            "range": "stddev: 0.04099494622259219",
            "extra": "mean: 14.823554782602814 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8631949178610591,
            "unit": "iter/sec",
            "range": "stddev: 0.018694129663923326",
            "extra": "mean: 1.1584868948000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 80.66345574555402,
            "unit": "iter/sec",
            "range": "stddev: 0.0010382990839167214",
            "extra": "mean: 12.397187682541329 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2113.0510187318314,
            "unit": "iter/sec",
            "range": "stddev: 0.00011374292919813498",
            "extra": "mean: 473.24933999944784 usec\nrounds: 950"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.57483428110443,
            "unit": "iter/sec",
            "range": "stddev: 0.0010739301533838274",
            "extra": "mean: 29.784212533337495 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 38.708158164541096,
            "unit": "iter/sec",
            "range": "stddev: 0.0020343536161223853",
            "extra": "mean: 25.83434726470808 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.405139532661995,
            "unit": "iter/sec",
            "range": "stddev: 0.0017466683388228529",
            "extra": "mean: 415.77629339999476 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 221.60383133611631,
            "unit": "iter/sec",
            "range": "stddev: 0.0005958702720226596",
            "extra": "mean: 4.512557359548788 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.394644615201319,
            "unit": "iter/sec",
            "range": "stddev: 0.00041875284239395775",
            "extra": "mean: 119.12356577777751 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 265.2840680040174,
            "unit": "iter/sec",
            "range": "stddev: 0.0004137833787934108",
            "extra": "mean: 3.769544124997571 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8354.85320462841,
            "unit": "iter/sec",
            "range": "stddev: 0.00001492302328948203",
            "extra": "mean: 119.69091203733194 usec\nrounds: 432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15808121210898524,
            "unit": "iter/sec",
            "range": "stddev: 0.1508981871132304",
            "extra": "mean: 6.32586242640001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10939710.89184567,
            "unit": "iter/sec",
            "range": "stddev: 6.050393370133377e-9",
            "extra": "mean: 91.41009391272988 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 660.3674081454615,
            "unit": "iter/sec",
            "range": "stddev: 0.0005848892052128066",
            "extra": "mean: 1.5143085313800442 msec\nrounds: 478"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.07224259346148,
            "unit": "iter/sec",
            "range": "stddev: 0.0012810836035447586",
            "extra": "mean: 10.980294011907805 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.7330634439147,
            "unit": "iter/sec",
            "range": "stddev: 0.0002321945588201015",
            "extra": "mean: 9.113023628572137 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 92.55512150091494,
            "unit": "iter/sec",
            "range": "stddev: 0.0011862467257699322",
            "extra": "mean: 10.804372397589201 msec\nrounds: 83"
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "2d14ccca308f03f8a246a6d7e61bb463519514ac",
          "message": "feat(duckdb): support array zip operation",
          "timestamp": "2023-05-22T15:23:03+02:00",
          "tree_id": "ecc71aaffb62cf996ee76afa8bff95b9aee05579",
          "url": "https://github.com/ibis-project/ibis/commit/2d14ccca308f03f8a246a6d7e61bb463519514ac"
        },
        "date": 1684762191537,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4692.7744292944835,
            "unit": "iter/sec",
            "range": "stddev: 0.00003845258276223384",
            "extra": "mean: 213.09355799365386 usec\nrounds: 319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5780649372654807,
            "unit": "iter/sec",
            "range": "stddev: 0.0032605536039698913",
            "extra": "mean: 633.6874842000043 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.55529338701878,
            "unit": "iter/sec",
            "range": "stddev: 0.000690935802021416",
            "extra": "mean: 27.355819290322312 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17818581962379318,
            "unit": "iter/sec",
            "range": "stddev: 0.04561144582963978",
            "extra": "mean: 5.612118866200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.71774237371352,
            "unit": "iter/sec",
            "range": "stddev: 0.0005878436031522106",
            "extra": "mean: 9.928737245613556 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1183.1440369662453,
            "unit": "iter/sec",
            "range": "stddev: 0.000028604605063614052",
            "extra": "mean: 845.2056290324099 usec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2416.2161998989914,
            "unit": "iter/sec",
            "range": "stddev: 0.00008166952182005065",
            "extra": "mean: 413.8702488799655 usec\nrounds: 1563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.17948965127748,
            "unit": "iter/sec",
            "range": "stddev: 0.0006794960717244643",
            "extra": "mean: 9.883426012985174 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 403.1695168391662,
            "unit": "iter/sec",
            "range": "stddev: 0.00003284513817016608",
            "extra": "mean: 2.4803462519685575 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2331.376151313887,
            "unit": "iter/sec",
            "range": "stddev: 0.00008201785540462918",
            "extra": "mean: 428.93121276737463 usec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.3226354541916,
            "unit": "iter/sec",
            "range": "stddev: 0.00026107153238301184",
            "extra": "mean: 3.6189579560005996 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 46.53984420694636,
            "unit": "iter/sec",
            "range": "stddev: 0.0005117361642796101",
            "extra": "mean: 21.486964923074314 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9393.460801146657,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017123629984992503",
            "extra": "mean: 106.45703656717558 usec\nrounds: 4731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7837.61965553332,
            "unit": "iter/sec",
            "range": "stddev: 0.0000167553000587277",
            "extra": "mean: 127.58975861937942 usec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.64224207274945,
            "unit": "iter/sec",
            "range": "stddev: 0.0006022116646110913",
            "extra": "mean: 9.556370163636013 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.5148490797561,
            "unit": "iter/sec",
            "range": "stddev: 0.00008119358616588975",
            "extra": "mean: 9.38836236111287 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.07917111805517,
            "unit": "iter/sec",
            "range": "stddev: 0.00037428390106082247",
            "extra": "mean: 36.928752199997916 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.74211511371178,
            "unit": "iter/sec",
            "range": "stddev: 0.00012143506096825587",
            "extra": "mean: 14.761865618181568 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2410.3168032600142,
            "unit": "iter/sec",
            "range": "stddev: 0.00007561355013865732",
            "extra": "mean: 414.88322142860005 usec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.61464766438065,
            "unit": "iter/sec",
            "range": "stddev: 0.000573960909122737",
            "extra": "mean: 17.356697307692368 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 431.3716789952518,
            "unit": "iter/sec",
            "range": "stddev: 0.000048404824036401675",
            "extra": "mean: 2.3181864936733763 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.8495496793381,
            "unit": "iter/sec",
            "range": "stddev: 0.00006024592963584936",
            "extra": "mean: 7.883354750000229 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8890703362112138,
            "unit": "iter/sec",
            "range": "stddev: 0.010108385668258637",
            "extra": "mean: 1.1247704025999952 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.33737573055822,
            "unit": "iter/sec",
            "range": "stddev: 0.0008324665671857178",
            "extra": "mean: 10.066704426664046 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1625354.7411118916,
            "unit": "iter/sec",
            "range": "stddev: 1.6431818617380003e-7",
            "extra": "mean: 615.2503048755427 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.34676820499887,
            "unit": "iter/sec",
            "range": "stddev: 0.000622585502004682",
            "extra": "mean: 10.379175333336358 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2496232.847366367,
            "unit": "iter/sec",
            "range": "stddev: 1.496132029192954e-8",
            "extra": "mean: 400.6036540442496 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1779.7252573946816,
            "unit": "iter/sec",
            "range": "stddev: 0.000006869655731004787",
            "extra": "mean: 561.8844795538205 usec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6433360.352878625,
            "unit": "iter/sec",
            "range": "stddev: 9.08168883132003e-9",
            "extra": "mean: 155.43976167175953 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 90.93264598006417,
            "unit": "iter/sec",
            "range": "stddev: 0.013659176889596622",
            "extra": "mean: 10.9971505747148 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2556621.599304575,
            "unit": "iter/sec",
            "range": "stddev: 3.497003881318541e-8",
            "extra": "mean: 391.14118423769924 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.4793993406647,
            "unit": "iter/sec",
            "range": "stddev: 0.0006934523403604346",
            "extra": "mean: 9.75805875555314 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.68448738288588,
            "unit": "iter/sec",
            "range": "stddev: 0.0007404724786599447",
            "extra": "mean: 10.03165112500426 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.76537040737684,
            "unit": "iter/sec",
            "range": "stddev: 0.00016569870434471717",
            "extra": "mean: 9.028092411212677 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2251.49556619944,
            "unit": "iter/sec",
            "range": "stddev: 0.00008674914773494275",
            "extra": "mean: 444.14922019500835 usec\nrounds: 1426"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.5314206536502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000285685478785963",
            "extra": "mean: 1.846614918102 msec\nrounds: 464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.39947449660306,
            "unit": "iter/sec",
            "range": "stddev: 0.00004902403539466673",
            "extra": "mean: 6.04596842307705 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.63954008364783,
            "unit": "iter/sec",
            "range": "stddev: 0.00022562963391828435",
            "extra": "mean: 3.6949515938836037 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8823889997434099,
            "unit": "iter/sec",
            "range": "stddev: 0.005531915682926437",
            "extra": "mean: 1.1332870200000116 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 174.29129274896647,
            "unit": "iter/sec",
            "range": "stddev: 0.00008031763972696825",
            "extra": "mean: 5.737521273884349 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13247.213522015032,
            "unit": "iter/sec",
            "range": "stddev: 0.000002491710673882958",
            "extra": "mean: 75.48757316685042 usec\nrounds: 6902"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3504065098737312,
            "unit": "iter/sec",
            "range": "stddev: 0.0010370222453575165",
            "extra": "mean: 740.5177572000184 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1789869.84909388,
            "unit": "iter/sec",
            "range": "stddev: 9.582638796733054e-8",
            "extra": "mean: 558.6998409444402 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.016182142696294,
            "unit": "iter/sec",
            "range": "stddev: 0.0003621469363080199",
            "extra": "mean: 20.401425739132275 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 276.7839455599698,
            "unit": "iter/sec",
            "range": "stddev: 0.00022902319507539672",
            "extra": "mean: 3.6129263132544427 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.17125117466553,
            "unit": "iter/sec",
            "range": "stddev: 0.0007395323329334207",
            "extra": "mean: 10.507374734043623 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 255.86963408602247,
            "unit": "iter/sec",
            "range": "stddev: 0.00017619227151875278",
            "extra": "mean: 3.908240239495569 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.61343342049378,
            "unit": "iter/sec",
            "range": "stddev: 0.004292457613135056",
            "extra": "mean: 6.187604451160634 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.07187671592087,
            "unit": "iter/sec",
            "range": "stddev: 0.0005929788220352442",
            "extra": "mean: 22.186784151518747 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 84.12770303492374,
            "unit": "iter/sec",
            "range": "stddev: 0.0005813207604081365",
            "extra": "mean: 11.886690875000738 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7255191.369384886,
            "unit": "iter/sec",
            "range": "stddev: 4.234032387267245e-9",
            "extra": "mean: 137.83233950519764 nsec\nrounds: 65360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2316.888589111287,
            "unit": "iter/sec",
            "range": "stddev: 0.00008933812677306376",
            "extra": "mean: 431.61333035162494 usec\nrounds: 1229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.11107156839947,
            "unit": "iter/sec",
            "range": "stddev: 0.00005865568995470387",
            "extra": "mean: 6.488826466670616 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.70477999457431,
            "unit": "iter/sec",
            "range": "stddev: 0.00013661326465271088",
            "extra": "mean: 33.66461560000289 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1044571.4012151662,
            "unit": "iter/sec",
            "range": "stddev: 9.72411662671471e-7",
            "extra": "mean: 957.3304408264331 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.11003602667066,
            "unit": "iter/sec",
            "range": "stddev: 0.00005811546768495289",
            "extra": "mean: 10.19263717045375 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5548178.692890531,
            "unit": "iter/sec",
            "range": "stddev: 8.952060774828504e-9",
            "extra": "mean: 180.2393281388889 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.59597657252596,
            "unit": "iter/sec",
            "range": "stddev: 0.0002870033270207232",
            "extra": "mean: 3.5894272857155682 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.03217899948714,
            "unit": "iter/sec",
            "range": "stddev: 0.00007823975225542125",
            "extra": "mean: 9.61241040625449 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4050293878356834,
            "unit": "iter/sec",
            "range": "stddev: 0.0023195273359233604",
            "extra": "mean: 415.79533500000707 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.98923349670447,
            "unit": "iter/sec",
            "range": "stddev: 0.0007190469355148518",
            "extra": "mean: 10.102108731181273 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 229.5959216846419,
            "unit": "iter/sec",
            "range": "stddev: 0.00028267477889915645",
            "extra": "mean: 4.355478061903622 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 98.81370354446771,
            "unit": "iter/sec",
            "range": "stddev: 0.0008633124823509724",
            "extra": "mean: 10.120053840001901 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.06217752533506,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547778263293224",
            "extra": "mean: 9.993786111108832 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 111.27060829187364,
            "unit": "iter/sec",
            "range": "stddev: 0.00012804402878708384",
            "extra": "mean: 8.987099247061744 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.82636005929268,
            "unit": "iter/sec",
            "range": "stddev: 0.0006984550165586868",
            "extra": "mean: 9.82063975789479 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2298.375670501103,
            "unit": "iter/sec",
            "range": "stddev: 0.00009853635184924954",
            "extra": "mean: 435.0898823176175 usec\nrounds: 1708"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.23073371852904,
            "unit": "iter/sec",
            "range": "stddev: 0.0006180651404518332",
            "extra": "mean: 10.284813882973223 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 220.8845550629785,
            "unit": "iter/sec",
            "range": "stddev: 0.013161980558867402",
            "extra": "mean: 4.527251802258788 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141702.2633455144,
            "unit": "iter/sec",
            "range": "stddev: 2.9442571206976124e-7",
            "extra": "mean: 7.057050299624979 usec\nrounds: 37038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2422.4970040572116,
            "unit": "iter/sec",
            "range": "stddev: 0.00008022379675229006",
            "extra": "mean: 412.79720813903765 usec\nrounds: 1499"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.242455028774536,
            "unit": "iter/sec",
            "range": "stddev: 0.0001823207301188407",
            "extra": "mean: 18.10201953333035 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12815602.109322213,
            "unit": "iter/sec",
            "range": "stddev: 3.0040047253936245e-9",
            "extra": "mean: 78.02988821508775 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2360.3485988630237,
            "unit": "iter/sec",
            "range": "stddev: 0.00009196790097934764",
            "extra": "mean: 423.6662332342343 usec\nrounds: 1342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.03912633361418,
            "unit": "iter/sec",
            "range": "stddev: 0.0006997983469702876",
            "extra": "mean: 9.996088896909827 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4396131.370154603,
            "unit": "iter/sec",
            "range": "stddev: 1.6957512264394633e-8",
            "extra": "mean: 227.47272904255027 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.6003752526581,
            "unit": "iter/sec",
            "range": "stddev: 0.00009881178637830834",
            "extra": "mean: 1.4543331213752626 msec\nrounds: 552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2355.9293627438096,
            "unit": "iter/sec",
            "range": "stddev: 0.00008246529649304495",
            "extra": "mean: 424.4609434449936 usec\nrounds: 1167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.17082853077862,
            "unit": "iter/sec",
            "range": "stddev: 0.00006304388234210339",
            "extra": "mean: 52.16258642105674 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.48517662099563,
            "unit": "iter/sec",
            "range": "stddev: 0.0007955734041881974",
            "extra": "mean: 10.051748752577046 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 224.6893651929599,
            "unit": "iter/sec",
            "range": "stddev: 0.011103810157744282",
            "extra": "mean: 4.450588923695675 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6364283.315432147,
            "unit": "iter/sec",
            "range": "stddev: 4.511924357648707e-9",
            "extra": "mean: 157.126883018452 nsec\nrounds: 63292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 221.79819796782883,
            "unit": "iter/sec",
            "range": "stddev: 0.00399897699114077",
            "extra": "mean: 4.508602906435908 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.24108756449826,
            "unit": "iter/sec",
            "range": "stddev: 0.0008312480806508726",
            "extra": "mean: 10.499670106379135 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 183.075962077156,
            "unit": "iter/sec",
            "range": "stddev: 0.0005298493194245341",
            "extra": "mean: 5.462213545973651 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 274.55802002564496,
            "unit": "iter/sec",
            "range": "stddev: 0.0003025195048808002",
            "extra": "mean: 3.6422174078418665 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 98.77431198158254,
            "unit": "iter/sec",
            "range": "stddev: 0.0009007597061556521",
            "extra": "mean: 10.124089755102116 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.469494096225967,
            "unit": "iter/sec",
            "range": "stddev: 0.0004416142713654392",
            "extra": "mean: 118.0708066666701 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 739.1117254755687,
            "unit": "iter/sec",
            "range": "stddev: 0.000012073317563416633",
            "extra": "mean: 1.3529754237853109 msec\nrounds: 597"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11872.174719130027,
            "unit": "iter/sec",
            "range": "stddev: 0.000012492376498763193",
            "extra": "mean: 84.23056631643628 usec\nrounds: 4667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7602710577432953,
            "unit": "iter/sec",
            "range": "stddev: 0.002604018176634391",
            "extra": "mean: 1.3153203581999946 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.9899748693792,
            "unit": "iter/sec",
            "range": "stddev: 0.00002910818522036657",
            "extra": "mean: 5.05076078048767 msec\nrounds: 123"
          }
        ]
      }
    ]
  }
}
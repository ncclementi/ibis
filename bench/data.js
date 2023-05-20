window.BENCHMARK_DATA = {
  "lastUpdate": 1684576235294,
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
      }
    ]
  }
}
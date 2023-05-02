window.BENCHMARK_DATA = {
  "lastUpdate": 1683025189394,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "90b48fc43eeda6df541c239f11927c237f21748a",
          "message": "feat(common): add Topmost and Innermost pattern matchers",
          "timestamp": "2023-05-02T03:52:53-07:00",
          "tree_id": "c3697f8c18bd3a58a85099071e1057271845fbb2",
          "url": "https://github.com/ibis-project/ibis/commit/90b48fc43eeda6df541c239f11927c237f21748a"
        },
        "date": 1683025084360,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1616.9348565911453,
            "unit": "iter/sec",
            "range": "stddev: 0.00008596518387765963",
            "extra": "mean: 618.4541052619894 usec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1382.254400036526,
            "unit": "iter/sec",
            "range": "stddev: 0.00006767555192228193",
            "extra": "mean: 723.4558269256188 usec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 96.88171165865259,
            "unit": "iter/sec",
            "range": "stddev: 0.0009373161392777474",
            "extra": "mean: 10.32186552941325 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 110380.93617545694,
            "unit": "iter/sec",
            "range": "stddev: 0.000045607686801545423",
            "extra": "mean: 9.059535411173192 usec\nrounds: 32052"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.67600848708242,
            "unit": "iter/sec",
            "range": "stddev: 0.0008800730764645403",
            "extra": "mean: 29.69473060869385 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 820010.3467681927,
            "unit": "iter/sec",
            "range": "stddev: 0.000005489075894042679",
            "extra": "mean: 1.2194968074990502 usec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.9665538278541,
            "unit": "iter/sec",
            "range": "stddev: 0.001092624839807441",
            "extra": "mean: 11.36795698461653 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.63041666050916,
            "unit": "iter/sec",
            "range": "stddev: 0.0005114885907243009",
            "extra": "mean: 12.717724800029373 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 311.6095999121964,
            "unit": "iter/sec",
            "range": "stddev: 0.000148772795517897",
            "extra": "mean: 3.209143750005694 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 247.3636202782504,
            "unit": "iter/sec",
            "range": "stddev: 0.0005364020132523252",
            "extra": "mean: 4.042631648401395 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 41.225493922232715,
            "unit": "iter/sec",
            "range": "stddev: 0.001026688822926861",
            "extra": "mean: 24.256834906244862 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 172.7745754874718,
            "unit": "iter/sec",
            "range": "stddev: 0.0047806626569776136",
            "extra": "mean: 5.787888624113632 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.0026857394756408,
            "unit": "iter/sec",
            "range": "stddev: 0.07081206260124367",
            "extra": "mean: 997.3214544000143 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1613.248733983621,
            "unit": "iter/sec",
            "range": "stddev: 0.00017326360383021716",
            "extra": "mean: 619.8672151012225 usec\nrounds: 437"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.909155201809455,
            "unit": "iter/sec",
            "range": "stddev: 0.0016033774971293108",
            "extra": "mean: 30.386680966669626 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 52.78295603778477,
            "unit": "iter/sec",
            "range": "stddev: 0.03067380117682732",
            "extra": "mean: 18.945509593743637 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 75.2810701619975,
            "unit": "iter/sec",
            "range": "stddev: 0.0016954141916416892",
            "extra": "mean: 13.283551865669521 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 75.50101959855535,
            "unit": "iter/sec",
            "range": "stddev: 0.0016592787808588636",
            "extra": "mean: 13.244854245903909 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.9528383050532,
            "unit": "iter/sec",
            "range": "stddev: 0.0017513737389771259",
            "extra": "mean: 13.707485866670291 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8877729.332260715,
            "unit": "iter/sec",
            "range": "stddev: 2.135433376094241e-7",
            "extra": "mean: 112.6414156788384 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.0311643547384,
            "unit": "iter/sec",
            "range": "stddev: 0.0013708326463867544",
            "extra": "mean: 18.171521750000846 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 71.55661254399172,
            "unit": "iter/sec",
            "range": "stddev: 0.0015021971868604451",
            "extra": "mean: 13.97494884746281 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 556.6241805088126,
            "unit": "iter/sec",
            "range": "stddev: 0.0002003709848386868",
            "extra": "mean: 1.7965443022721286 msec\nrounds: 440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 186.10313229034807,
            "unit": "iter/sec",
            "range": "stddev: 0.0006358470895646269",
            "extra": "mean: 5.373364691357553 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 199.20096174942506,
            "unit": "iter/sec",
            "range": "stddev: 0.0005985370426349403",
            "extra": "mean: 5.020056084156362 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1547.0345069521547,
            "unit": "iter/sec",
            "range": "stddev: 0.0002513539768400446",
            "extra": "mean: 646.3979927442738 usec\nrounds: 1516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10479741361309546,
            "unit": "iter/sec",
            "range": "stddev: 0.10871043779232632",
            "extra": "mean: 9.542220227799977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1601.4647368397734,
            "unit": "iter/sec",
            "range": "stddev: 0.00016753304400223147",
            "extra": "mean: 624.4283604853736 usec\nrounds: 1068"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 77.66546238932618,
            "unit": "iter/sec",
            "range": "stddev: 0.0013571296547303026",
            "extra": "mean: 12.87573612820508 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5901811538766513,
            "unit": "iter/sec",
            "range": "stddev: 0.024415955766540418",
            "extra": "mean: 1.6943950064000206 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 198.43124314535476,
            "unit": "iter/sec",
            "range": "stddev: 0.0006053894218609888",
            "extra": "mean: 5.0395289781432275 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.64948355182598,
            "unit": "iter/sec",
            "range": "stddev: 0.002452906514317156",
            "extra": "mean: 30.628355833336705 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8761.08924086022,
            "unit": "iter/sec",
            "range": "stddev: 0.000059231753050109706",
            "extra": "mean: 114.14105854968025 usec\nrounds: 3433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 83.3966041129494,
            "unit": "iter/sec",
            "range": "stddev: 0.0008604962481030641",
            "extra": "mean: 11.990895920002156 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 83.3107443027481,
            "unit": "iter/sec",
            "range": "stddev: 0.0004076438497457045",
            "extra": "mean: 12.003253702380064 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 75.4970142673112,
            "unit": "iter/sec",
            "range": "stddev: 0.0013032198430931266",
            "extra": "mean: 13.245556923076643 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 186.19602346178812,
            "unit": "iter/sec",
            "range": "stddev: 0.0005800640371881536",
            "extra": "mean: 5.370683978142122 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1573.8985100869982,
            "unit": "iter/sec",
            "range": "stddev: 0.0002623044247777719",
            "extra": "mean: 635.3649829331908 usec\nrounds: 1582"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 201.9460964989016,
            "unit": "iter/sec",
            "range": "stddev: 0.0005519438233411294",
            "extra": "mean: 4.95181643684526 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1634.9710340542265,
            "unit": "iter/sec",
            "range": "stddev: 0.00019643995850212383",
            "extra": "mean: 611.6316308799103 usec\nrounds: 978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 131.01560690063647,
            "unit": "iter/sec",
            "range": "stddev: 0.0007833234027544137",
            "extra": "mean: 7.632678454547862 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 200.71342322526428,
            "unit": "iter/sec",
            "range": "stddev: 0.0004442444464516688",
            "extra": "mean: 4.982227814816761 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0072154006286302,
            "unit": "iter/sec",
            "range": "stddev: 0.007700983374220036",
            "extra": "mean: 498.202634200004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1350880.180929848,
            "unit": "iter/sec",
            "range": "stddev: 0.000001374837485434802",
            "extra": "mean: 740.258102914555 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 134.11867485892685,
            "unit": "iter/sec",
            "range": "stddev: 0.004539639411448357",
            "extra": "mean: 7.456083211766394 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 3983808.4421099178,
            "unit": "iter/sec",
            "range": "stddev: 7.686507882969311e-7",
            "extra": "mean: 251.01608536949718 nsec\nrounds: 89286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 188.87241519890196,
            "unit": "iter/sec",
            "range": "stddev: 0.000919854658895321",
            "extra": "mean: 5.2945794066693 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 72.22702467734587,
            "unit": "iter/sec",
            "range": "stddev: 0.0015088823921656001",
            "extra": "mean: 13.845233199999887 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0326389377854834,
            "unit": "iter/sec",
            "range": "stddev: 0.004317967990352919",
            "extra": "mean: 968.3926912000061 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4162607.367388494,
            "unit": "iter/sec",
            "range": "stddev: 6.900608736293435e-7",
            "extra": "mean: 240.23404365110318 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5060775.543562387,
            "unit": "iter/sec",
            "range": "stddev: 5.849151143911208e-7",
            "extra": "mean: 197.5981727291809 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1576.0472341336313,
            "unit": "iter/sec",
            "range": "stddev: 0.00027324946053628753",
            "extra": "mean: 634.4987500007953 usec\nrounds: 956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.68638676627874,
            "unit": "iter/sec",
            "range": "stddev: 0.0014535609592992696",
            "extra": "mean: 13.040124097224115 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5847256844330259,
            "unit": "iter/sec",
            "range": "stddev: 0.01977085344833289",
            "extra": "mean: 1.710203650400001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 76.29174968832174,
            "unit": "iter/sec",
            "range": "stddev: 0.0013135495168032068",
            "extra": "mean: 13.107577216217308 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1395133.4785654985,
            "unit": "iter/sec",
            "range": "stddev: 0.00002228395724231022",
            "extra": "mean: 716.7772943333122 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 99.65876537132492,
            "unit": "iter/sec",
            "range": "stddev: 0.0006543432955610345",
            "extra": "mean: 10.034240302637068 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 127.8514063259939,
            "unit": "iter/sec",
            "range": "stddev: 0.0004431573799433621",
            "extra": "mean: 7.821579978950036 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.92989958463609,
            "unit": "iter/sec",
            "range": "stddev: 0.0012754236839834072",
            "extra": "mean: 13.34580728845717 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 137.50480683659163,
            "unit": "iter/sec",
            "range": "stddev: 0.0006093626182403325",
            "extra": "mean: 7.272473035712729 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7679.21154244543,
            "unit": "iter/sec",
            "range": "stddev: 0.000047129851373326367",
            "extra": "mean: 130.22170238086082 usec\nrounds: 4536"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 76.36805797153855,
            "unit": "iter/sec",
            "range": "stddev: 0.0014041307258746084",
            "extra": "mean: 13.094479898555072 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.151406669549813,
            "unit": "iter/sec",
            "range": "stddev: 0.06696367855454444",
            "extra": "mean: 89.67478539999927 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5097199805943806,
            "unit": "iter/sec",
            "range": "stddev: 0.03771212014149855",
            "extra": "mean: 1.9618614888000026 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 872.8901311946231,
            "unit": "iter/sec",
            "range": "stddev: 0.00016989026562048984",
            "extra": "mean: 1.1456195508035087 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1523359.8543125447,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012636474902603506",
            "extra": "mean: 656.4437136564005 nsec\nrounds: 129854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10232.501978236176,
            "unit": "iter/sec",
            "range": "stddev: 0.000052048244993747566",
            "extra": "mean: 97.72780910543001 usec\nrounds: 5118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.269529270199437,
            "unit": "iter/sec",
            "range": "stddev: 0.0042604885504276225",
            "extra": "mean: 159.50160800001964 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1522.0034910205495,
            "unit": "iter/sec",
            "range": "stddev: 0.00025955315408157854",
            "extra": "mean: 657.0287163595594 usec\nrounds: 1033"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 71.93476298228606,
            "unit": "iter/sec",
            "range": "stddev: 0.0016684631525026676",
            "extra": "mean: 13.901484602739988 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 76.26062957095374,
            "unit": "iter/sec",
            "range": "stddev: 0.0014592905680664396",
            "extra": "mean: 13.112926101266826 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 73.57146925577112,
            "unit": "iter/sec",
            "range": "stddev: 0.0017398466563127283",
            "extra": "mean: 13.592225493329503 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 25.693308709364477,
            "unit": "iter/sec",
            "range": "stddev: 0.04514567199925938",
            "extra": "mean: 38.9206392727274 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4454076.484889623,
            "unit": "iter/sec",
            "range": "stddev: 4.016080720638268e-7",
            "extra": "mean: 224.51343244645776 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 38.909814408185525,
            "unit": "iter/sec",
            "range": "stddev: 0.002157856158249145",
            "extra": "mean: 25.700456689652786 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5988.832943898228,
            "unit": "iter/sec",
            "range": "stddev: 0.00007878897370977186",
            "extra": "mean: 166.97744107536982 usec\nrounds: 2639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 72.26809295443893,
            "unit": "iter/sec",
            "range": "stddev: 0.001647370978522044",
            "extra": "mean: 13.837365275854797 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.1681786208875,
            "unit": "iter/sec",
            "range": "stddev: 0.0038851932873224925",
            "extra": "mean: 55.04129064706162 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3048.83519122517,
            "unit": "iter/sec",
            "range": "stddev: 0.00015087857704953184",
            "extra": "mean: 327.99411489282613 usec\nrounds: 1793"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1456092.6205229477,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035217630121535484",
            "extra": "mean: 686.769499347408 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 501.89751338422633,
            "unit": "iter/sec",
            "range": "stddev: 0.00013923232630422042",
            "extra": "mean: 1.9924386420190383 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 117.35088167265384,
            "unit": "iter/sec",
            "range": "stddev: 0.000898635951938957",
            "extra": "mean: 8.521452806715716 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 21.87196288533156,
            "unit": "iter/sec",
            "range": "stddev: 0.0024401084649628463",
            "extra": "mean: 45.72063354545331 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 179.22343104650483,
            "unit": "iter/sec",
            "range": "stddev: 0.0008233449865826518",
            "extra": "mean: 5.5796275864204405 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 139.28335094563693,
            "unit": "iter/sec",
            "range": "stddev: 0.000677494171405246",
            "extra": "mean: 7.179609000003925 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3253957.841672016,
            "unit": "iter/sec",
            "range": "stddev: 9.039970567661137e-7",
            "extra": "mean: 307.3180565506482 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 372.91482644629264,
            "unit": "iter/sec",
            "range": "stddev: 0.0005438332223668163",
            "extra": "mean: 2.6815774785077378 msec\nrounds: 349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 57.20608976575782,
            "unit": "iter/sec",
            "range": "stddev: 0.02738862583378054",
            "extra": "mean: 17.48065641428574 msec\nrounds: 70"
          }
        ]
      }
    ]
  }
}
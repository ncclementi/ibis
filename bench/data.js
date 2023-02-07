window.BENCHMARK_DATA = {
  "lastUpdate": 1675791456400,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "fecca421ad405465c4c001afa4e2976c07164530",
          "message": "feat(io): add to_parquet, to_csv to backends",
          "timestamp": "2023-02-07T12:32:20-05:00",
          "tree_id": "241b2cb179f380b01500b17bf0ddcc22c238f90f",
          "url": "https://github.com/ibis-project/ibis/commit/fecca421ad405465c4c001afa4e2976c07164530"
        },
        "date": 1675791383177,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 265.28300527920703,
            "unit": "iter/sec",
            "range": "stddev: 0.00005797221006056268",
            "extra": "mean: 3.7695592258068418 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1505610.8978432757,
            "unit": "iter/sec",
            "range": "stddev: 8.877587765274526e-8",
            "extra": "mean: 664.1822275811486 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.079625304321436,
            "unit": "iter/sec",
            "range": "stddev: 0.015193946162157402",
            "extra": "mean: 32.17542007692596 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10734.860488279268,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024943875962341874",
            "extra": "mean: 93.15444770724672 usec\nrounds: 3882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4183.868021556917,
            "unit": "iter/sec",
            "range": "stddev: 0.00004463487337172807",
            "extra": "mean: 239.01327547800523 usec\nrounds: 1884"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 154.75583669548942,
            "unit": "iter/sec",
            "range": "stddev: 0.0007244753630984656",
            "extra": "mean: 6.461791822221762 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 145.63246451610163,
            "unit": "iter/sec",
            "range": "stddev: 0.0004449117772500787",
            "extra": "mean: 6.866600818181145 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.91320674188425,
            "unit": "iter/sec",
            "range": "stddev: 0.0003119743856315855",
            "extra": "mean: 10.535941565218552 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.39214210603714,
            "unit": "iter/sec",
            "range": "stddev: 0.00038429572659466117",
            "extra": "mean: 8.446506518180545 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.32884663295054,
            "unit": "iter/sec",
            "range": "stddev: 0.0014085242366924143",
            "extra": "mean: 44.785116599990715 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.85495619678186,
            "unit": "iter/sec",
            "range": "stddev: 0.0008102880510131334",
            "extra": "mean: 11.513447749997852 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.22891234512133,
            "unit": "iter/sec",
            "range": "stddev: 0.00012502181419343317",
            "extra": "mean: 6.981830578943597 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.28814433047582,
            "unit": "iter/sec",
            "range": "stddev: 0.00012603306916260105",
            "extra": "mean: 9.971268355556933 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13241693685116881,
            "unit": "iter/sec",
            "range": "stddev: 0.07402489297492633",
            "extra": "mean: 7.551904037200006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5451.915144589614,
            "unit": "iter/sec",
            "range": "stddev: 0.00004864849573096842",
            "extra": "mean: 183.4217836263249 usec\nrounds: 1710"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.66545324972921,
            "unit": "iter/sec",
            "range": "stddev: 0.0007838564163865692",
            "extra": "mean: 10.90923531764628 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5389.3247652800355,
            "unit": "iter/sec",
            "range": "stddev: 0.00006309641525862228",
            "extra": "mean: 185.55200206941674 usec\nrounds: 3382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 139.41250838255004,
            "unit": "iter/sec",
            "range": "stddev: 0.0006815257634900626",
            "extra": "mean: 7.172957517240739 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 617.4985645999728,
            "unit": "iter/sec",
            "range": "stddev: 0.000044424329095632344",
            "extra": "mean: 1.6194369628175878 msec\nrounds: 511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.37491790651125,
            "unit": "iter/sec",
            "range": "stddev: 0.0017879914717075578",
            "extra": "mean: 28.26861683871034 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.27448645144629,
            "unit": "iter/sec",
            "range": "stddev: 0.00022863882528853052",
            "extra": "mean: 25.4618224285699 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.13966003423755,
            "unit": "iter/sec",
            "range": "stddev: 0.00021244311918707494",
            "extra": "mean: 16.09278196000787 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 231.74926709523646,
            "unit": "iter/sec",
            "range": "stddev: 0.00021846294189400634",
            "extra": "mean: 4.315008252384478 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10640.160072089839,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022941214914752116",
            "extra": "mean: 93.98354848279924 usec\nrounds: 5043"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5337115860166173,
            "unit": "iter/sec",
            "range": "stddev: 0.0025041432059093056",
            "extra": "mean: 652.013070199996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 150.7754921131585,
            "unit": "iter/sec",
            "range": "stddev: 0.000764497070149074",
            "extra": "mean: 6.6323776230787574 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5663.954902266761,
            "unit": "iter/sec",
            "range": "stddev: 0.00004688189225940056",
            "extra": "mean: 176.55507807800373 usec\nrounds: 1998"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.10196572432936,
            "unit": "iter/sec",
            "range": "stddev: 0.0011653163295105345",
            "extra": "mean: 18.831694577774112 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.846738875721632,
            "unit": "iter/sec",
            "range": "stddev: 0.0002785457152214807",
            "extra": "mean: 206.324298800007 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4513.3381892325215,
            "unit": "iter/sec",
            "range": "stddev: 0.00005508122666765117",
            "extra": "mean: 221.5654927844099 usec\nrounds: 1871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 259.6674717457133,
            "unit": "iter/sec",
            "range": "stddev: 0.00013508802102148051",
            "extra": "mean: 3.851079202478153 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 242.31774222197095,
            "unit": "iter/sec",
            "range": "stddev: 0.00021803938130032956",
            "extra": "mean: 4.126812963963519 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11069538.231934367,
            "unit": "iter/sec",
            "range": "stddev: 3.5100700432243213e-9",
            "extra": "mean: 90.33800498704375 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 154.61908049691164,
            "unit": "iter/sec",
            "range": "stddev: 0.0007066204578361871",
            "extra": "mean: 6.467507094119435 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.8355264972759,
            "unit": "iter/sec",
            "range": "stddev: 0.0004645163148657927",
            "extra": "mean: 12.370798377044027 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1523974.0345500808,
            "unit": "iter/sec",
            "range": "stddev: 1.0051659006452969e-7",
            "extra": "mean: 656.1791587841768 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 238.34252769780858,
            "unit": "iter/sec",
            "range": "stddev: 0.0002633321167122486",
            "extra": "mean: 4.1956423373502485 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.844355082150598,
            "unit": "iter/sec",
            "range": "stddev: 0.0059702908425686",
            "extra": "mean: 1.1843358571999942 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 272.76135899580567,
            "unit": "iter/sec",
            "range": "stddev: 0.00007197037800046103",
            "extra": "mean: 3.66620845299197 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1510355.4683761117,
            "unit": "iter/sec",
            "range": "stddev: 1.262647034388707e-7",
            "extra": "mean: 662.0957919761562 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.702880571977,
            "unit": "iter/sec",
            "range": "stddev: 0.00008480416392842145",
            "extra": "mean: 3.7778206184956264 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8487405897236715,
            "unit": "iter/sec",
            "range": "stddev: 0.005367971623756648",
            "extra": "mean: 1.1782163031999857 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 970.8430178363303,
            "unit": "iter/sec",
            "range": "stddev: 0.000012319641634938135",
            "extra": "mean: 1.0300326434119602 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9726.94355493442,
            "unit": "iter/sec",
            "range": "stddev: 0.000015972832109931326",
            "extra": "mean: 102.80721732909677 usec\nrounds: 3543"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4490065.871704112,
            "unit": "iter/sec",
            "range": "stddev: 1.6655572886054626e-8",
            "extra": "mean: 222.71388183856652 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 125831.55066979285,
            "unit": "iter/sec",
            "range": "stddev: 4.0418850907287195e-7",
            "extra": "mean: 7.94713245348299 usec\nrounds: 31747"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.994795188747927,
            "unit": "iter/sec",
            "range": "stddev: 0.00024446038064285496",
            "extra": "mean: 111.17540522222826 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.3244641850852,
            "unit": "iter/sec",
            "range": "stddev: 0.000038610479022917915",
            "extra": "mean: 5.871147194177212 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 240.5244307965815,
            "unit": "iter/sec",
            "range": "stddev: 0.000291041160636351",
            "extra": "mean: 4.1575818168996275 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 238.80859991125462,
            "unit": "iter/sec",
            "range": "stddev: 0.000247676762282682",
            "extra": "mean: 4.187453887220213 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 153.01935027617577,
            "unit": "iter/sec",
            "range": "stddev: 0.0008326016360026459",
            "extra": "mean: 6.535121199999594 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 206.6067321079744,
            "unit": "iter/sec",
            "range": "stddev: 0.0005215339988427529",
            "extra": "mean: 4.840113338985448 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4301140.620478579,
            "unit": "iter/sec",
            "range": "stddev: 1.5257500577787964e-8",
            "extra": "mean: 232.49646738783017 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7273843298240054,
            "unit": "iter/sec",
            "range": "stddev: 0.004498656058633386",
            "extra": "mean: 1.3747890337999933 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4827.145406654009,
            "unit": "iter/sec",
            "range": "stddev: 0.000049136648994965216",
            "extra": "mean: 207.161772798794 usec\nrounds: 1897"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1704950.9909257223,
            "unit": "iter/sec",
            "range": "stddev: 1.178975462135557e-7",
            "extra": "mean: 586.5271232559236 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.00599974050667,
            "unit": "iter/sec",
            "range": "stddev: 0.00017391638663302606",
            "extra": "mean: 6.756482857135942 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.48045277045907,
            "unit": "iter/sec",
            "range": "stddev: 0.0001907282847883988",
            "extra": "mean: 6.969590496064341 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5739486012550667,
            "unit": "iter/sec",
            "range": "stddev: 0.007377707445305005",
            "extra": "mean: 1.7423162941999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5473.745600163659,
            "unit": "iter/sec",
            "range": "stddev: 0.00004906818702160514",
            "extra": "mean: 182.69025874532807 usec\nrounds: 1944"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 397.40750410261234,
            "unit": "iter/sec",
            "range": "stddev: 0.0001099233772033176",
            "extra": "mean: 2.5163088006053242 msec\nrounds: 331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5019537.895845575,
            "unit": "iter/sec",
            "range": "stddev: 7.766623340060804e-8",
            "extra": "mean: 199.22152611453276 nsec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.17008316025262,
            "unit": "iter/sec",
            "range": "stddev: 0.0007913222714201821",
            "extra": "mean: 12.631033846154283 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.41186280463532,
            "unit": "iter/sec",
            "range": "stddev: 0.0008552436442850226",
            "extra": "mean: 11.846676127908966 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 75.15474124226388,
            "unit": "iter/sec",
            "range": "stddev: 0.021021536035441282",
            "extra": "mean: 13.305880420457651 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.4792305186754,
            "unit": "iter/sec",
            "range": "stddev: 0.0002031816406731046",
            "extra": "mean: 14.819374677416372 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.10095996964671,
            "unit": "iter/sec",
            "range": "stddev: 0.0008684201528919279",
            "extra": "mean: 11.750748761902027 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.85661806723347,
            "unit": "iter/sec",
            "range": "stddev: 0.0007404695600906346",
            "extra": "mean: 19.28394170833651 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4524.939660870321,
            "unit": "iter/sec",
            "range": "stddev: 0.00008175742874751968",
            "extra": "mean: 220.99742205350455 usec\nrounds: 1841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57239.12817531655,
            "unit": "iter/sec",
            "range": "stddev: 5.606181536692493e-7",
            "extra": "mean: 17.47056658405279 usec\nrounds: 12563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1421.5655726757846,
            "unit": "iter/sec",
            "range": "stddev: 0.000036312692769897675",
            "extra": "mean: 703.449787488677 usec\nrounds: 1087"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 588089.1542550374,
            "unit": "iter/sec",
            "range": "stddev: 1.8100240170546046e-7",
            "extra": "mean: 1.7004224491552664 usec\nrounds: 22727"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.31779390811549,
            "unit": "iter/sec",
            "range": "stddev: 0.0001256878448210863",
            "extra": "mean: 11.452419435290588 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.991177857423224,
            "unit": "iter/sec",
            "range": "stddev: 0.0005634889743535272",
            "extra": "mean: 27.033472787872434 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.370204971525675,
            "unit": "iter/sec",
            "range": "stddev: 0.00017086634700248172",
            "extra": "mean: 74.79316900000299 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 513.4669321873398,
            "unit": "iter/sec",
            "range": "stddev: 0.00002628175983082793",
            "extra": "mean: 1.947545084821835 msec\nrounds: 448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2060104777053056,
            "unit": "iter/sec",
            "range": "stddev: 0.0038086756690238676",
            "extra": "mean: 453.30700380000053 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 378887.6117272921,
            "unit": "iter/sec",
            "range": "stddev: 4.3212905872211186e-7",
            "extra": "mean: 2.639305084273273 usec\nrounds: 1475"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.39009073540456,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235348982457075",
            "extra": "mean: 11.313485388237655 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 148.926402398172,
            "unit": "iter/sec",
            "range": "stddev: 0.000850449270760967",
            "extra": "mean: 6.714726092196762 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18920.305572908444,
            "unit": "iter/sec",
            "range": "stddev: 0.00003750093235353428",
            "extra": "mean: 52.8532689996232 usec\nrounds: 6658"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 235.34199311722065,
            "unit": "iter/sec",
            "range": "stddev: 0.000257595858281403",
            "extra": "mean: 4.249135425235877 msec\nrounds: 214"
          }
        ]
      }
    ]
  }
}
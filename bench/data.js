window.BENCHMARK_DATA = {
  "lastUpdate": 1682950308313,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "d4ac345de11c8b58e6a3650ed1eed9091796cbad",
          "message": "fix(pandas): grouped aggregation using a case statement",
          "timestamp": "2023-05-01T10:03:46-04:00",
          "tree_id": "3a6dcad937cd6e23df7d8d02eaf6b4084ed8637a",
          "url": "https://github.com/ibis-project/ibis/commit/d4ac345de11c8b58e6a3650ed1eed9091796cbad"
        },
        "date": 1682950214955,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3700073.47449559,
            "unit": "iter/sec",
            "range": "stddev: 5.388911141563807e-7",
            "extra": "mean: 270.26490335741744 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.80225832902866,
            "unit": "iter/sec",
            "range": "stddev: 0.0014548321874907446",
            "extra": "mean: 12.224601379313464 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 146.0225351299447,
            "unit": "iter/sec",
            "range": "stddev: 0.0008459635561201161",
            "extra": "mean: 6.848258038460331 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 626.9242129262387,
            "unit": "iter/sec",
            "range": "stddev: 0.0002649062580738038",
            "extra": "mean: 1.5950891341911781 msec\nrounds: 544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1652.7041580515008,
            "unit": "iter/sec",
            "range": "stddev: 0.00021575869163468475",
            "extra": "mean: 605.0689684105209 usec\nrounds: 1013"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 538.6437578707876,
            "unit": "iter/sec",
            "range": "stddev: 0.00023415302122114568",
            "extra": "mean: 1.8565145987264644 msec\nrounds: 471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 168.73409830983604,
            "unit": "iter/sec",
            "range": "stddev: 0.0067323080755698475",
            "extra": "mean: 5.926484391813689 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1703.3609142366481,
            "unit": "iter/sec",
            "range": "stddev: 0.00012624191042898318",
            "extra": "mean: 587.0746426327062 usec\nrounds: 319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 93.66002403047885,
            "unit": "iter/sec",
            "range": "stddev: 0.0008184789531988368",
            "extra": "mean: 10.67691376712203 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 153.70437827881702,
            "unit": "iter/sec",
            "range": "stddev: 0.0002993942397938556",
            "extra": "mean: 6.50599554285967 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 280.65339913378443,
            "unit": "iter/sec",
            "range": "stddev: 0.00023835888551068684",
            "extra": "mean: 3.563113801886685 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1724.4085373574364,
            "unit": "iter/sec",
            "range": "stddev: 0.00015561152553206713",
            "extra": "mean: 579.9089823183352 usec\nrounds: 1527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5662.520034812614,
            "unit": "iter/sec",
            "range": "stddev: 0.000109839797642555",
            "extra": "mean: 176.59981666326985 usec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1697005.5869010985,
            "unit": "iter/sec",
            "range": "stddev: 0.000005023156287858512",
            "extra": "mean: 589.273251495948 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 77.50047508597747,
            "unit": "iter/sec",
            "range": "stddev: 0.0019564351150641664",
            "extra": "mean: 12.903146708334626 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.128421921031304,
            "unit": "iter/sec",
            "range": "stddev: 0.0021604498298538996",
            "extra": "mean: 23.18656596874824 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1541.9339334530432,
            "unit": "iter/sec",
            "range": "stddev: 0.0002780118914910129",
            "extra": "mean: 648.5362169574778 usec\nrounds: 1203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5639281910799956,
            "unit": "iter/sec",
            "range": "stddev: 0.019994966075608318",
            "extra": "mean: 1.773275420199991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1441.7309161744433,
            "unit": "iter/sec",
            "range": "stddev: 0.00012836838258295584",
            "extra": "mean: 693.6107069503977 usec\nrounds: 1266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.821273964118273,
            "unit": "iter/sec",
            "range": "stddev: 0.0016459032475258008",
            "extra": "mean: 45.82683859999861 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.185810949260244,
            "unit": "iter/sec",
            "range": "stddev: 0.03879524082440869",
            "extra": "mean: 75.83909733334244 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 960.9275187381712,
            "unit": "iter/sec",
            "range": "stddev: 0.00020887803957247135",
            "extra": "mean: 1.0406612158564637 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 216.90899363148952,
            "unit": "iter/sec",
            "range": "stddev: 0.0004994834000018741",
            "extra": "mean: 4.610228387758404 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1663.0289038111732,
            "unit": "iter/sec",
            "range": "stddev: 0.0002719648663667513",
            "extra": "mean: 601.3124592773427 usec\nrounds: 1633"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 83.73292639575,
            "unit": "iter/sec",
            "range": "stddev: 0.0010585203202307738",
            "extra": "mean: 11.942733200003826 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1691.0845750580515,
            "unit": "iter/sec",
            "range": "stddev: 0.00007276106012981372",
            "extra": "mean: 591.3364800017007 usec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 218.7426574630544,
            "unit": "iter/sec",
            "range": "stddev: 0.0005691593850528579",
            "extra": "mean: 4.571582020616622 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.09834957622754,
            "unit": "iter/sec",
            "range": "stddev: 0.00384833390359034",
            "extra": "mean: 29.326932606062947 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 83.60361718227625,
            "unit": "iter/sec",
            "range": "stddev: 0.0012533515545464617",
            "extra": "mean: 11.961204953844955 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.407168522995875,
            "unit": "iter/sec",
            "range": "stddev: 0.0022299174724397888",
            "extra": "mean: 28.24286837142966 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 68.44226261478312,
            "unit": "iter/sec",
            "range": "stddev: 0.01912233516950914",
            "extra": "mean: 14.610855366198924 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 215.223007073989,
            "unit": "iter/sec",
            "range": "stddev: 0.0005515196661284543",
            "extra": "mean: 4.646343407218643 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2259380.7695557633,
            "unit": "iter/sec",
            "range": "stddev: 7.871228253869155e-7",
            "extra": "mean: 442.59914640081723 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 82.25291041993945,
            "unit": "iter/sec",
            "range": "stddev: 0.0013791442263711411",
            "extra": "mean: 12.157624513157453 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11675.544622917303,
            "unit": "iter/sec",
            "range": "stddev: 0.000026195299447945846",
            "extra": "mean: 85.64910951024532 usec\nrounds: 6940"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137112.33525307442,
            "unit": "iter/sec",
            "range": "stddev: 0.000006104389412705459",
            "extra": "mean: 7.293289828039577 usec\nrounds: 21599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1636.109621828202,
            "unit": "iter/sec",
            "range": "stddev: 0.00018788185821986829",
            "extra": "mean: 611.205989292204 usec\nrounds: 1214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1442198.7126399819,
            "unit": "iter/sec",
            "range": "stddev: 0.000003037210928153095",
            "extra": "mean: 693.3857250291635 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 24.298742567100433,
            "unit": "iter/sec",
            "range": "stddev: 0.0039021589440595265",
            "extra": "mean: 41.154392958340225 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 76.07387975692336,
            "unit": "iter/sec",
            "range": "stddev: 0.0018641363604511459",
            "extra": "mean: 13.145116342104158 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8897.787045664263,
            "unit": "iter/sec",
            "range": "stddev: 0.000075623627078121",
            "extra": "mean: 112.38749532528794 usec\nrounds: 5134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.93117727716675,
            "unit": "iter/sec",
            "range": "stddev: 0.001594045971200543",
            "extra": "mean: 27.07739297058003 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 198.16395644839088,
            "unit": "iter/sec",
            "range": "stddev: 0.0005964161417739291",
            "extra": "mean: 5.0463263750006755 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1413891731524262,
            "unit": "iter/sec",
            "range": "stddev: 0.007494072675064365",
            "extra": "mean: 876.1253598000053 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.67206077176057,
            "unit": "iter/sec",
            "range": "stddev: 0.0015291992267434033",
            "extra": "mean: 11.95142071052589 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1651647.701027014,
            "unit": "iter/sec",
            "range": "stddev: 0.000001883927462317909",
            "extra": "mean: 605.4559936590522 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.0963337123240633,
            "unit": "iter/sec",
            "range": "stddev: 0.028569351599350677",
            "extra": "mean: 912.1310315999949 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 67.49276532613682,
            "unit": "iter/sec",
            "range": "stddev: 0.02090258620485558",
            "extra": "mean: 14.816402842109454 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.459164851050936,
            "unit": "iter/sec",
            "range": "stddev: 0.0017007280708538177",
            "extra": "mean: 17.10595768085152 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 133.1927630409111,
            "unit": "iter/sec",
            "range": "stddev: 0.0008749850237514506",
            "extra": "mean: 7.507915423999748 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 91.57360975521713,
            "unit": "iter/sec",
            "range": "stddev: 0.0009323116525702048",
            "extra": "mean: 10.920176704544815 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10917852042606438,
            "unit": "iter/sec",
            "range": "stddev: 0.1252276669309194",
            "extra": "mean: 9.159310788399988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4558672.1900633145,
            "unit": "iter/sec",
            "range": "stddev: 4.3176425478633364e-7",
            "extra": "mean: 219.36212087801715 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.79657573309889,
            "unit": "iter/sec",
            "range": "stddev: 0.000690122403372406",
            "extra": "mean: 10.020383892473943 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.39877140776744,
            "unit": "iter/sec",
            "range": "stddev: 0.0019495161538655426",
            "extra": "mean: 28.24956799999486 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.55305234049799,
            "unit": "iter/sec",
            "range": "stddev: 0.0012280191801255739",
            "extra": "mean: 20.5960274749998 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 197.21570108817224,
            "unit": "iter/sec",
            "range": "stddev: 0.0009976786961171584",
            "extra": "mean: 5.0705901937945335 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 85.58855281145601,
            "unit": "iter/sec",
            "range": "stddev: 0.0014285029684176444",
            "extra": "mean: 11.683805452382298 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 80.53769775888927,
            "unit": "iter/sec",
            "range": "stddev: 0.0015131051291976427",
            "extra": "mean: 12.4165456404498 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9860913.715420129,
            "unit": "iter/sec",
            "range": "stddev: 2.480718095098918e-7",
            "extra": "mean: 101.41048069779595 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 83.9913825139207,
            "unit": "iter/sec",
            "range": "stddev: 0.0011685284264681998",
            "extra": "mean: 11.905983329114274 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3412.2959166925434,
            "unit": "iter/sec",
            "range": "stddev: 0.00014230391826685514",
            "extra": "mean: 293.05781925539327 usec\nrounds: 2202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 203.92040521904875,
            "unit": "iter/sec",
            "range": "stddev: 0.0007086420561539372",
            "extra": "mean: 4.903874131310266 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 107.3124069131877,
            "unit": "iter/sec",
            "range": "stddev: 0.0007676317762561418",
            "extra": "mean: 9.31858700000055 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.609520524047961,
            "unit": "iter/sec",
            "range": "stddev: 0.038477485731394145",
            "extra": "mean: 1.640633843400019 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 141.3782140498571,
            "unit": "iter/sec",
            "range": "stddev: 0.004161597960560672",
            "extra": "mean: 7.073225579489563 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 86.13367705931917,
            "unit": "iter/sec",
            "range": "stddev: 0.0011106622404521034",
            "extra": "mean: 11.609860790121763 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.61913203381368,
            "unit": "iter/sec",
            "range": "stddev: 0.0018190237905603697",
            "extra": "mean: 12.8834215714286 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 423.50826004392314,
            "unit": "iter/sec",
            "range": "stddev: 0.0002641691780846521",
            "extra": "mean: 2.361229034579603 msec\nrounds: 347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5200253.136825175,
            "unit": "iter/sec",
            "range": "stddev: 3.7073025436544734e-7",
            "extra": "mean: 192.29833119442407 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4826721.7581944475,
            "unit": "iter/sec",
            "range": "stddev: 1.8589254933657377e-7",
            "extra": "mean: 207.17995569216984 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 61.86965010927484,
            "unit": "iter/sec",
            "range": "stddev: 0.03204144841718772",
            "extra": "mean: 16.163013662333455 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 77.21881101739788,
            "unit": "iter/sec",
            "range": "stddev: 0.0017374589952945012",
            "extra": "mean: 12.950212348836786 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 130.44761349452702,
            "unit": "iter/sec",
            "range": "stddev: 0.0006353051589923507",
            "extra": "mean: 7.665912569891173 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5553618.748761029,
            "unit": "iter/sec",
            "range": "stddev: 5.103677933447171e-7",
            "extra": "mean: 180.06277442489557 nsec\nrounds: 64936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8303.529350449653,
            "unit": "iter/sec",
            "range": "stddev: 0.00008638192559686627",
            "extra": "mean: 120.43071780626005 usec\nrounds: 1623"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 326.60395973138657,
            "unit": "iter/sec",
            "range": "stddev: 0.00028120037091087",
            "extra": "mean: 3.061812235290852 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9511737629763164,
            "unit": "iter/sec",
            "range": "stddev: 0.01789391058787698",
            "extra": "mean: 512.5120165999988 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1550.2475022315925,
            "unit": "iter/sec",
            "range": "stddev: 0.0003108170233619137",
            "extra": "mean: 645.0582881510809 usec\nrounds: 1114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5850005896548579,
            "unit": "iter/sec",
            "range": "stddev: 0.040312669505499846",
            "extra": "mean: 1.7093999863999898 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 201.0186138228732,
            "unit": "iter/sec",
            "range": "stddev: 0.0005740535438075304",
            "extra": "mean: 4.9746636939858035 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 97.90737898106094,
            "unit": "iter/sec",
            "range": "stddev: 0.0009888988346689444",
            "extra": "mean: 10.21373476041513 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 78.50601241519813,
            "unit": "iter/sec",
            "range": "stddev: 0.0013217390308067009",
            "extra": "mean: 12.737877892858153 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 195.38479789153274,
            "unit": "iter/sec",
            "range": "stddev: 0.0006753882093626877",
            "extra": "mean: 5.118105455446677 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.58375718049431,
            "unit": "iter/sec",
            "range": "stddev: 0.005008168492995825",
            "extra": "mean: 151.888955285699 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.90548140852138,
            "unit": "iter/sec",
            "range": "stddev: 0.0013036743406179988",
            "extra": "mean: 12.360101968253968 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 816550.9740019615,
            "unit": "iter/sec",
            "range": "stddev: 0.000008888621580519918",
            "extra": "mean: 1.224663287215181 usec\nrounds: 86207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 144.82411548497618,
            "unit": "iter/sec",
            "range": "stddev: 0.0007902341641920139",
            "extra": "mean: 6.90492737795273 msec\nrounds: 127"
          }
        ]
      }
    ]
  }
}
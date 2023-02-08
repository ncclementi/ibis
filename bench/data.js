window.BENCHMARK_DATA = {
  "lastUpdate": 1675879810469,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
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
          "id": "1205636836d8251565d19ce038af67d911a5ea0e",
          "message": "docs: point to `ibis-examples` repo in the README",
          "timestamp": "2023-02-08T13:05:13-05:00",
          "tree_id": "d59aa5512d138498ac4cfb1a38f8956a430723f2",
          "url": "https://github.com/ibis-project/ibis/commit/1205636836d8251565d19ce038af67d911a5ea0e"
        },
        "date": 1675879729251,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3643.301810883477,
            "unit": "iter/sec",
            "range": "stddev: 0.002050431027225763",
            "extra": "mean: 274.47629977092305 usec\nrounds: 437"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10280.974180000869,
            "unit": "iter/sec",
            "range": "stddev: 0.000002600783256158795",
            "extra": "mean: 97.26704711945065 usec\nrounds: 5051"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 84.50414398620286,
            "unit": "iter/sec",
            "range": "stddev: 0.008840917745280504",
            "extra": "mean: 11.833739185184477 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 247.4723365368747,
            "unit": "iter/sec",
            "range": "stddev: 0.00026681065414665186",
            "extra": "mean: 4.040855693181669 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.52830092979326,
            "unit": "iter/sec",
            "range": "stddev: 0.0001332585600284455",
            "extra": "mean: 10.047393461538089 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5876798940282822,
            "unit": "iter/sec",
            "range": "stddev: 0.0016122544722365403",
            "extra": "mean: 1.7016066232000013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 134.50098180844952,
            "unit": "iter/sec",
            "range": "stddev: 0.0090273684865594",
            "extra": "mean: 7.434889965518294 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5258.778057416841,
            "unit": "iter/sec",
            "range": "stddev: 0.00005564247520851696",
            "extra": "mean: 190.1582438128619 usec\nrounds: 2990"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 238.92470502956863,
            "unit": "iter/sec",
            "range": "stddev: 0.00015531449949204805",
            "extra": "mean: 4.185418999999364 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5138.883038788736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000473798434039221",
            "extra": "mean: 194.59481612091832 usec\nrounds: 3176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.57746832447901,
            "unit": "iter/sec",
            "range": "stddev: 0.0001357198576873807",
            "extra": "mean: 17.36790499999895 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 224.25107607133418,
            "unit": "iter/sec",
            "range": "stddev: 0.00034404467932267103",
            "extra": "mean: 4.459287409090962 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4671493.483403319,
            "unit": "iter/sec",
            "range": "stddev: 1.0032435284588484e-8",
            "extra": "mean: 214.06430375062217 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.97560659330387,
            "unit": "iter/sec",
            "range": "stddev: 0.0005511185375583258",
            "extra": "mean: 12.051734733334266 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.35342514237539,
            "unit": "iter/sec",
            "range": "stddev: 0.0006580073302253195",
            "extra": "mean: 11.191512786517182 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.03801107645349,
            "unit": "iter/sec",
            "range": "stddev: 0.00021620051234033335",
            "extra": "mean: 11.358730027778405 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4480.820798400013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000330793635549003",
            "extra": "mean: 223.1733972394242 usec\nrounds: 1304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6051837573112187,
            "unit": "iter/sec",
            "range": "stddev: 0.0005702461345314626",
            "extra": "mean: 622.9816339999985 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1478719.5012936767,
            "unit": "iter/sec",
            "range": "stddev: 9.68420323100081e-8",
            "extra": "mean: 676.2607777371823 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1591235.005502678,
            "unit": "iter/sec",
            "range": "stddev: 1.5749423752082262e-7",
            "extra": "mean: 628.4426854247689 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5263.0458922200205,
            "unit": "iter/sec",
            "range": "stddev: 0.00005442893594320805",
            "extra": "mean: 190.00404337690225 usec\nrounds: 2144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.63259269745564,
            "unit": "iter/sec",
            "range": "stddev: 0.00009964557487451214",
            "extra": "mean: 73.35361821428421 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1454.5378658031182,
            "unit": "iter/sec",
            "range": "stddev: 0.000005484718365631234",
            "extra": "mean: 687.5035868852086 usec\nrounds: 1220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.11254278266759,
            "unit": "iter/sec",
            "range": "stddev: 0.0008656636484452271",
            "extra": "mean: 28.47985137930895 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 252.4777461878243,
            "unit": "iter/sec",
            "range": "stddev: 0.0002179279437235746",
            "extra": "mean: 3.9607451155559503 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.14733430872602,
            "unit": "iter/sec",
            "range": "stddev: 0.00017602257239182165",
            "extra": "mean: 15.117767185186207 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.40754187565395,
            "unit": "iter/sec",
            "range": "stddev: 0.0003903522559450685",
            "extra": "mean: 21.548221680851707 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4309004.021581652,
            "unit": "iter/sec",
            "range": "stddev: 1.1946956782174659e-8",
            "extra": "mean: 232.07218999861885 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.73765438592031,
            "unit": "iter/sec",
            "range": "stddev: 0.00015253898012231002",
            "extra": "mean: 9.733529600000727 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 250.28815001670827,
            "unit": "iter/sec",
            "range": "stddev: 0.0001970292292058065",
            "extra": "mean: 3.9953949075625195 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.873381498403859,
            "unit": "iter/sec",
            "range": "stddev: 0.003475154154450512",
            "extra": "mean: 1.1449750216000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.16506645647343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000954330067197631",
            "extra": "mean: 14.670271034482841 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 413.95265379975564,
            "unit": "iter/sec",
            "range": "stddev: 0.00002773532530711063",
            "extra": "mean: 2.4157352074465437 msec\nrounds: 376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2762730470500254,
            "unit": "iter/sec",
            "range": "stddev: 0.003170060090546644",
            "extra": "mean: 439.31460740000716 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 275.2573118584474,
            "unit": "iter/sec",
            "range": "stddev: 0.00005078896791795416",
            "extra": "mean: 3.632964346154247 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 161.28337233888905,
            "unit": "iter/sec",
            "range": "stddev: 0.000635496693452645",
            "extra": "mean: 6.200267178806239 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1496331.4018443653,
            "unit": "iter/sec",
            "range": "stddev: 8.976694991218791e-8",
            "extra": "mean: 668.3011522497012 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.891260533296386,
            "unit": "iter/sec",
            "range": "stddev: 0.0022165581696921423",
            "extra": "mean: 204.44627580000656 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6108.801591740481,
            "unit": "iter/sec",
            "range": "stddev: 0.00004710222666292272",
            "extra": "mean: 163.69822869219857 usec\nrounds: 2370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6003.823522352789,
            "unit": "iter/sec",
            "range": "stddev: 0.000047794266850646476",
            "extra": "mean: 166.5605253513711 usec\nrounds: 3274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7574647784271152,
            "unit": "iter/sec",
            "range": "stddev: 0.0018279989682073667",
            "extra": "mean: 1.320193398400005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1525819374801555,
            "unit": "iter/sec",
            "range": "stddev: 0.12851260665431746",
            "extra": "mean: 6.553855695599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8696008206637256,
            "unit": "iter/sec",
            "range": "stddev: 0.0035870117855248303",
            "extra": "mean: 1.1499529165999944 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 514.3890160563648,
            "unit": "iter/sec",
            "range": "stddev: 0.00004491113119804343",
            "extra": "mean: 1.9440539529141578 msec\nrounds: 446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1506760.2793370374,
            "unit": "iter/sec",
            "range": "stddev: 1.4325012064845063e-7",
            "extra": "mean: 663.6755784669292 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 623.3987917168334,
            "unit": "iter/sec",
            "range": "stddev: 0.00006692022537597998",
            "extra": "mean: 1.6041096217816062 msec\nrounds: 505"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 145.46739692902298,
            "unit": "iter/sec",
            "range": "stddev: 0.0006035716731950377",
            "extra": "mean: 6.874392620690971 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.86998716577574,
            "unit": "iter/sec",
            "range": "stddev: 0.00008737906150381871",
            "extra": "mean: 7.048707200004856 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.07386586947555,
            "unit": "iter/sec",
            "range": "stddev: 0.010962847008741955",
            "extra": "mean: 11.617928274726541 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5978.412177817347,
            "unit": "iter/sec",
            "range": "stddev: 0.00004940455053040866",
            "extra": "mean: 167.26849374997244 usec\nrounds: 2080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.84386321259806,
            "unit": "iter/sec",
            "range": "stddev: 0.0005465429430167494",
            "extra": "mean: 26.424363558821458 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55416.81845102355,
            "unit": "iter/sec",
            "range": "stddev: 8.531357231771129e-7",
            "extra": "mean: 18.045063357142798 usec\nrounds: 12469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.84045777330321,
            "unit": "iter/sec",
            "range": "stddev: 0.000047433823478177525",
            "extra": "mean: 13.728634203703624 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.59114193261778,
            "unit": "iter/sec",
            "range": "stddev: 0.0009195899015828048",
            "extra": "mean: 37.60650830769171 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 246.83200351380572,
            "unit": "iter/sec",
            "range": "stddev: 0.0002168863170570423",
            "extra": "mean: 4.051338504587669 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119719.42390392843,
            "unit": "iter/sec",
            "range": "stddev: 3.2945304024789996e-7",
            "extra": "mean: 8.352863448478274 usec\nrounds: 34844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.84929707454123,
            "unit": "iter/sec",
            "range": "stddev: 0.0006172924563585828",
            "extra": "mean: 6.216999503184507 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 142.81262316554316,
            "unit": "iter/sec",
            "range": "stddev: 0.00010578547177103064",
            "extra": "mean: 7.002182144927319 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 552821.2030583193,
            "unit": "iter/sec",
            "range": "stddev: 2.0303056690906466e-7",
            "extra": "mean: 1.8089031217829503 usec\nrounds: 22936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.31203880522884,
            "unit": "iter/sec",
            "range": "stddev: 0.00012089872260010278",
            "extra": "mean: 7.026812407407221 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 935.3433237809246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000698916671915318",
            "extra": "mean: 1.0691261428559886 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.185030933544507,
            "unit": "iter/sec",
            "range": "stddev: 0.0002462299275315433",
            "extra": "mean: 108.87279610000178 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9723.097077947115,
            "unit": "iter/sec",
            "range": "stddev: 0.000012774150463548965",
            "extra": "mean: 102.84788807345066 usec\nrounds: 4360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.285986093212465,
            "unit": "iter/sec",
            "range": "stddev: 0.00025297196004949954",
            "extra": "mean: 22.580506571429062 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5338172.109233306,
            "unit": "iter/sec",
            "range": "stddev: 4.783144990152456e-9",
            "extra": "mean: 187.33004098350943 nsec\nrounds: 53192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 330.6205440553288,
            "unit": "iter/sec",
            "range": "stddev: 0.00004420647006828256",
            "extra": "mean: 3.0246154329497794 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 392763.99317871046,
            "unit": "iter/sec",
            "range": "stddev: 2.762855406516577e-7",
            "extra": "mean: 2.546058236924465 usec\nrounds: 1906"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 123.69364433004023,
            "unit": "iter/sec",
            "range": "stddev: 0.0003031588883587538",
            "extra": "mean: 8.084489752212274 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 162.93030441224866,
            "unit": "iter/sec",
            "range": "stddev: 0.0006440612317053947",
            "extra": "mean: 6.137593639239667 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 265.9357420908746,
            "unit": "iter/sec",
            "range": "stddev: 0.000013991121840186275",
            "extra": "mean: 3.7603068776602573 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.1071826193158,
            "unit": "iter/sec",
            "range": "stddev: 0.000035711898678152474",
            "extra": "mean: 5.913409380435019 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 250.26258941851378,
            "unit": "iter/sec",
            "range": "stddev: 0.00019943729837463938",
            "extra": "mean: 3.9958029776783834 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.21971540293694,
            "unit": "iter/sec",
            "range": "stddev: 0.0006400290822258008",
            "extra": "mean: 11.3353346860458 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.45949658017878,
            "unit": "iter/sec",
            "range": "stddev: 0.0006636322393431894",
            "extra": "mean: 10.933801708861814 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 249.63774686447135,
            "unit": "iter/sec",
            "range": "stddev: 0.00012145278177384922",
            "extra": "mean: 4.00580446090511 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19102.70064947439,
            "unit": "iter/sec",
            "range": "stddev: 0.000013568997350210326",
            "extra": "mean: 52.34861909577769 usec\nrounds: 8913"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.72823091021947,
            "unit": "iter/sec",
            "range": "stddev: 0.0005679706500382109",
            "extra": "mean: 10.556515099999805 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11900795.368117733,
            "unit": "iter/sec",
            "range": "stddev: 3.0088647744717825e-9",
            "extra": "mean: 84.027997210835 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 162.02866327309442,
            "unit": "iter/sec",
            "range": "stddev: 0.0006216437197477523",
            "extra": "mean: 6.1717475155277315 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11011.99540897922,
            "unit": "iter/sec",
            "range": "stddev: 0.000001727847952898475",
            "extra": "mean: 90.8100632864954 usec\nrounds: 5483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 149.7897837523466,
            "unit": "iter/sec",
            "range": "stddev: 0.0006127524769721159",
            "extra": "mean: 6.676022722973815 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.04853632248724,
            "unit": "iter/sec",
            "range": "stddev: 0.0006274447091545409",
            "extra": "mean: 10.983152946666525 msec\nrounds: 75"
          }
        ]
      }
    ]
  }
}
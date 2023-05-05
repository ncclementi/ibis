window.BENCHMARK_DATA = {
  "lastUpdate": 1683321140103,
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
          "id": "41d3857902a750fb6b92d3ace071a92a2c392a0a",
          "message": "fix(oracle): disable statement cache\n\nOracle really doesn't like to \"re\" prepare a statement, which means\nattempting to execute two bound expressions in succession with the same\nname will usual fail, or \"work\" in unexpected ways.\n\nhttps://python-oracledb.readthedocs.io/en/latest/user_guide/appendix_b.html#statement-caching-in-thin-and-thick-modes\nhttps://python-oracledb.readthedocs.io/en/latest/user_guide/tuning.html#setting-the-statement-cache\n\nWe set the cache to size 0 to disable it to avoid these shenanigans.",
          "timestamp": "2023-05-05T14:04:28-07:00",
          "tree_id": "b23198f4d723b783e74f8daf956eb996e615c47c",
          "url": "https://github.com/ibis-project/ibis/commit/41d3857902a750fb6b92d3ace071a92a2c392a0a"
        },
        "date": 1683321035723,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.686003549310746,
            "unit": "iter/sec",
            "range": "stddev: 0.01774785805960125",
            "extra": "mean: 1.4577184053999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 133.09124657689762,
            "unit": "iter/sec",
            "range": "stddev: 0.0009529990901572796",
            "extra": "mean: 7.513642149427302 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1743.2984041398556,
            "unit": "iter/sec",
            "range": "stddev: 0.00022489264988814696",
            "extra": "mean: 573.6252598093787 usec\nrounds: 943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9277503883623608,
            "unit": "iter/sec",
            "range": "stddev: 0.010578980468880728",
            "extra": "mean: 518.7393586000042 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 75.91837369648907,
            "unit": "iter/sec",
            "range": "stddev: 0.0015760922692972068",
            "extra": "mean: 13.172041909088552 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 221.57192194991575,
            "unit": "iter/sec",
            "range": "stddev: 0.0006186989855797529",
            "extra": "mean: 4.513207229506456 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 423.2281820748647,
            "unit": "iter/sec",
            "range": "stddev: 0.0005863061906727418",
            "extra": "mean: 2.3627916153823385 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 74.68649647164013,
            "unit": "iter/sec",
            "range": "stddev: 0.001975490067157619",
            "extra": "mean: 13.38930124242364 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 73.15893453172453,
            "unit": "iter/sec",
            "range": "stddev: 0.002110137045586101",
            "extra": "mean: 13.668870472223205 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6256.34634045622,
            "unit": "iter/sec",
            "range": "stddev: 0.00021014613238447315",
            "extra": "mean: 159.83769848762543 usec\nrounds: 1058"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 217.99279103013492,
            "unit": "iter/sec",
            "range": "stddev: 0.000676523555488616",
            "extra": "mean: 4.587307659461829 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 110.28352637398561,
            "unit": "iter/sec",
            "range": "stddev: 0.0008847012843188255",
            "extra": "mean: 9.067537399999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 64.5947203867091,
            "unit": "iter/sec",
            "range": "stddev: 0.0012358337465820674",
            "extra": "mean: 15.481141399998354 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.280214074516092,
            "unit": "iter/sec",
            "range": "stddev: 0.002023443061075319",
            "extra": "mean: 36.65660384000262 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 73.07385862228263,
            "unit": "iter/sec",
            "range": "stddev: 0.002038997679550047",
            "extra": "mean: 13.684784392856285 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9114931.359295342,
            "unit": "iter/sec",
            "range": "stddev: 2.8894155946396757e-7",
            "extra": "mean: 109.71009660753438 nsec\nrounds: 95230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 892.3979687223907,
            "unit": "iter/sec",
            "range": "stddev: 0.00020528568912957072",
            "extra": "mean: 1.1205762844033125 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.560727898321069,
            "unit": "iter/sec",
            "range": "stddev: 0.004199237285307378",
            "extra": "mean: 68.67788526666345 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 40.09570358122807,
            "unit": "iter/sec",
            "range": "stddev: 0.001156239559863895",
            "extra": "mean: 24.94032803225775 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 530.9769150348225,
            "unit": "iter/sec",
            "range": "stddev: 0.000262549329665118",
            "extra": "mean: 1.8833210478357956 msec\nrounds: 439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4364817.987929448,
            "unit": "iter/sec",
            "range": "stddev: 5.125442451835069e-7",
            "extra": "mean: 229.10462767670595 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1651.757235554477,
            "unit": "iter/sec",
            "range": "stddev: 0.00032953555349641515",
            "extra": "mean: 605.4158434876241 usec\nrounds: 952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 172.81789756997557,
            "unit": "iter/sec",
            "range": "stddev: 0.0008842925226561772",
            "extra": "mean: 5.786437713114122 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1610.1551497391426,
            "unit": "iter/sec",
            "range": "stddev: 0.00033763564074220433",
            "extra": "mean: 621.0581633465617 usec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 72.63491541415961,
            "unit": "iter/sec",
            "range": "stddev: 0.002029755181567825",
            "extra": "mean: 13.767483507044297 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 207.9633903496409,
            "unit": "iter/sec",
            "range": "stddev: 0.0007213190206948266",
            "extra": "mean: 4.808538648647429 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1540349.417141266,
            "unit": "iter/sec",
            "range": "stddev: 0.000001970007574447513",
            "extra": "mean: 649.2033488452897 nsec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 148.53271168590015,
            "unit": "iter/sec",
            "range": "stddev: 0.0009872200437378818",
            "extra": "mean: 6.732523688887366 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5967196104410518,
            "unit": "iter/sec",
            "range": "stddev: 0.01046715647436296",
            "extra": "mean: 1.675828953000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 70.80459147315635,
            "unit": "iter/sec",
            "range": "stddev: 0.002006563707722612",
            "extra": "mean: 14.123377865673062 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 826570.8956608458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047860938208349626",
            "extra": "mean: 1.2098175791690524 usec\nrounds: 81301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 71.04060402057115,
            "unit": "iter/sec",
            "range": "stddev: 0.002657159174612183",
            "extra": "mean: 14.076456890913132 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 207.02719852211325,
            "unit": "iter/sec",
            "range": "stddev: 0.0009230586396359676",
            "extra": "mean: 4.830283205002104 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 127.4353190638875,
            "unit": "iter/sec",
            "range": "stddev: 0.0007320343597330386",
            "extra": "mean: 7.84711810937333 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 73.130577575283,
            "unit": "iter/sec",
            "range": "stddev: 0.002302217075850642",
            "extra": "mean: 13.674170684219845 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 25.871990075108123,
            "unit": "iter/sec",
            "range": "stddev: 0.04164325267016127",
            "extra": "mean: 38.65183919354224 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 74.2382248087217,
            "unit": "iter/sec",
            "range": "stddev: 0.001692348437981279",
            "extra": "mean: 13.470149677966404 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9583.668094660023,
            "unit": "iter/sec",
            "range": "stddev: 0.00008881759218398336",
            "extra": "mean: 104.344181176015 usec\nrounds: 4250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1533583.0038039112,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019037085088768399",
            "extra": "mean: 652.0677377876465 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 44.82704785606435,
            "unit": "iter/sec",
            "range": "stddev: 0.048140982948522225",
            "extra": "mean: 22.307960212122616 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 72.76246040509,
            "unit": "iter/sec",
            "range": "stddev: 0.0022007119001567887",
            "extra": "mean: 13.743350546871369 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 85.22686475206929,
            "unit": "iter/sec",
            "range": "stddev: 0.0013176525541036437",
            "extra": "mean: 11.733389500001762 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 96.59583171752563,
            "unit": "iter/sec",
            "range": "stddev: 0.000911831179834172",
            "extra": "mean: 10.352413579545455 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 77.23282266898113,
            "unit": "iter/sec",
            "range": "stddev: 0.002478511287109381",
            "extra": "mean: 12.947862909089663 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 60.38895869863228,
            "unit": "iter/sec",
            "range": "stddev: 0.002152424626165924",
            "extra": "mean: 16.559318483871266 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5328752.979562357,
            "unit": "iter/sec",
            "range": "stddev: 6.138643376331015e-7",
            "extra": "mean: 187.6611664746554 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 322.817303791966,
            "unit": "iter/sec",
            "range": "stddev: 0.0005658019398006395",
            "extra": "mean: 3.0977273778497096 msec\nrounds: 307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1713.46673046694,
            "unit": "iter/sec",
            "range": "stddev: 0.00020404264480959963",
            "extra": "mean: 583.6121485285497 usec\nrounds: 680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 75.21773972684026,
            "unit": "iter/sec",
            "range": "stddev: 0.0016020996288315225",
            "extra": "mean: 13.294736103897652 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 183.9249771023352,
            "unit": "iter/sec",
            "range": "stddev: 0.0012076451853958946",
            "extra": "mean: 5.436999453552215 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 210.08371756968785,
            "unit": "iter/sec",
            "range": "stddev: 0.0007927336094203952",
            "extra": "mean: 4.760007160803813 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1656.3211311434325,
            "unit": "iter/sec",
            "range": "stddev: 0.0001878814566081134",
            "extra": "mean: 603.7476556914149 usec\nrounds: 1063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1679.9605387052134,
            "unit": "iter/sec",
            "range": "stddev: 0.00022470940727579942",
            "extra": "mean: 595.2520770343358 usec\nrounds: 1376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 70.61328193202307,
            "unit": "iter/sec",
            "range": "stddev: 0.0016920652903062473",
            "extra": "mean: 14.161641728572606 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3244.4896937480926,
            "unit": "iter/sec",
            "range": "stddev: 0.00018943679921342802",
            "extra": "mean: 308.214879500752 usec\nrounds: 1444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3490310.779469792,
            "unit": "iter/sec",
            "range": "stddev: 9.810229174685162e-7",
            "extra": "mean: 286.5074382150157 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1551.8786863593218,
            "unit": "iter/sec",
            "range": "stddev: 0.00027537011442054513",
            "extra": "mean: 644.3802655386556 usec\nrounds: 354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 72.11405986623292,
            "unit": "iter/sec",
            "range": "stddev: 0.002013617195551442",
            "extra": "mean: 13.866921400000743 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11149.049092660554,
            "unit": "iter/sec",
            "range": "stddev: 0.000048966355298876236",
            "extra": "mean: 89.6937480218203 usec\nrounds: 3917"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 200.307601927947,
            "unit": "iter/sec",
            "range": "stddev: 0.0010549312747130943",
            "extra": "mean: 4.992321761006913 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4885289.551832619,
            "unit": "iter/sec",
            "range": "stddev: 3.983081998841873e-7",
            "extra": "mean: 204.69615759515196 nsec\nrounds: 51283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 206.71717587837452,
            "unit": "iter/sec",
            "range": "stddev: 0.0010537537555172956",
            "extra": "mean: 4.837527388572522 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 68.11785227482656,
            "unit": "iter/sec",
            "range": "stddev: 0.0017318359147216944",
            "extra": "mean: 14.680439365079001 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 36.808342384376154,
            "unit": "iter/sec",
            "range": "stddev: 0.0023739242387266464",
            "extra": "mean: 27.16775424324636 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.766246326336606,
            "unit": "iter/sec",
            "range": "stddev: 0.0028590475179092714",
            "extra": "mean: 30.519211448283215 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 582.1653911560815,
            "unit": "iter/sec",
            "range": "stddev: 0.00039362340120357753",
            "extra": "mean: 1.717724920085287 msec\nrounds: 463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1314.2903804853565,
            "unit": "iter/sec",
            "range": "stddev: 0.0004249487946072381",
            "extra": "mean: 760.8668638590418 usec\nrounds: 404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1645.650884209176,
            "unit": "iter/sec",
            "range": "stddev: 0.00024128016314056466",
            "extra": "mean: 607.662299212724 usec\nrounds: 762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 36.36397884620356,
            "unit": "iter/sec",
            "range": "stddev: 0.0019204393002864206",
            "extra": "mean: 27.499740999997893 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.06455537876314,
            "unit": "iter/sec",
            "range": "stddev: 0.0026604479516177584",
            "extra": "mean: 58.60099942858759 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6802539617039706,
            "unit": "iter/sec",
            "range": "stddev: 0.020334036721422043",
            "extra": "mean: 1.4700392152000064 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4555086.577600902,
            "unit": "iter/sec",
            "range": "stddev: 0.000001738660967294619",
            "extra": "mean: 219.53479543437305 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12496439536316117,
            "unit": "iter/sec",
            "range": "stddev: 0.0661796405034863",
            "extra": "mean: 8.002279345999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 154.15977367875186,
            "unit": "iter/sec",
            "range": "stddev: 0.005367360501155637",
            "extra": "mean: 6.486776518522043 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 87.92300968901957,
            "unit": "iter/sec",
            "range": "stddev: 0.0007207283990364459",
            "extra": "mean: 11.37358700000106 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 144.09507329417877,
            "unit": "iter/sec",
            "range": "stddev: 0.000983639394115743",
            "extra": "mean: 6.939862530611576 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139201.0947608687,
            "unit": "iter/sec",
            "range": "stddev: 0.000005976640121491312",
            "extra": "mean: 7.18385154741695 usec\nrounds: 4008"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 23.006673200598975,
            "unit": "iter/sec",
            "range": "stddev: 0.0025554272676888644",
            "extra": "mean: 43.46564978260156 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 24.497831125165966,
            "unit": "iter/sec",
            "range": "stddev: 0.002680854967083016",
            "extra": "mean: 40.8199401363628 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.42959930570177,
            "unit": "iter/sec",
            "range": "stddev: 0.0018149991882746167",
            "extra": "mean: 13.61848640677998 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.48340696330208,
            "unit": "iter/sec",
            "range": "stddev: 0.005344414503343602",
            "extra": "mean: 154.23989357143293 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1414031.465668836,
            "unit": "iter/sec",
            "range": "stddev: 0.000015527557264752293",
            "extra": "mean: 707.1978412637379 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1644.8738280033992,
            "unit": "iter/sec",
            "range": "stddev: 0.00022232604358417816",
            "extra": "mean: 607.9493654621718 usec\nrounds: 996"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.24416100664786,
            "unit": "iter/sec",
            "range": "stddev: 0.0020348232025299714",
            "extra": "mean: 13.469072671054354 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2447274961409012,
            "unit": "iter/sec",
            "range": "stddev: 0.0042730845760381424",
            "extra": "mean: 803.3886960000132 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 207.64656836241423,
            "unit": "iter/sec",
            "range": "stddev: 0.0007456346859395141",
            "extra": "mean: 4.8158753977318725 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.9663332006048942,
            "unit": "iter/sec",
            "range": "stddev: 0.12659497724300553",
            "extra": "mean: 1.0348397419999968 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8199.36592250153,
            "unit": "iter/sec",
            "range": "stddev: 0.00019002064598144021",
            "extra": "mean: 121.96065030537282 usec\nrounds: 4258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 118.77271200216103,
            "unit": "iter/sec",
            "range": "stddev: 0.00442705766914418",
            "extra": "mean: 8.419442337746784 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.92737732160329,
            "unit": "iter/sec",
            "range": "stddev: 0.0015155678139683493",
            "extra": "mean: 13.170479941172342 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1259570.8586984824,
            "unit": "iter/sec",
            "range": "stddev: 0.000013821429275667896",
            "extra": "mean: 793.9211939479945 nsec\nrounds: 90082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 72.01380293199142,
            "unit": "iter/sec",
            "range": "stddev: 0.0016756807874840913",
            "extra": "mean: 13.886226796609847 msec\nrounds: 59"
          }
        ]
      }
    ]
  }
}
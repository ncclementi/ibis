window.BENCHMARK_DATA = {
  "lastUpdate": 1681834481118,
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
          "id": "da34d6f03396f85c477a1415ae70e6140d07d48b",
          "message": "fix(snowflake): always use pyarrow for memtables",
          "timestamp": "2023-04-18T12:09:38-04:00",
          "tree_id": "6a8106812221db84a2cc6bad9587837efad18582",
          "url": "https://github.com/ibis-project/ibis/commit/da34d6f03396f85c477a1415ae70e6140d07d48b"
        },
        "date": 1681834401917,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.683864920895225,
            "unit": "iter/sec",
            "range": "stddev: 0.00014336932801331374",
            "extra": "mean: 18.627570900000023 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 93.21698064383123,
            "unit": "iter/sec",
            "range": "stddev: 0.009092283581740948",
            "extra": "mean: 10.727659199999806 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 93.33952691609485,
            "unit": "iter/sec",
            "range": "stddev: 0.008994474597259258",
            "extra": "mean: 10.713574763443187 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 76512.72636516845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011381116474559572",
            "extra": "mean: 13.069721175891058 usec\nrounds: 14493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4550.9695321057725,
            "unit": "iter/sec",
            "range": "stddev: 0.000025417677214202875",
            "extra": "mean: 219.73339811336675 usec\nrounds: 1060"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1724355732266447,
            "unit": "iter/sec",
            "range": "stddev: 0.10524282982072958",
            "extra": "mean: 5.799267409199996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.10305063073116,
            "unit": "iter/sec",
            "range": "stddev: 0.000021599881931092654",
            "extra": "mean: 5.073488192090345 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 98.41659694769552,
            "unit": "iter/sec",
            "range": "stddev: 0.0005882662997994259",
            "extra": "mean: 10.160887807688166 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.20055192418887,
            "unit": "iter/sec",
            "range": "stddev: 0.0006691164977137092",
            "extra": "mean: 10.288007425924347 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11553295.260602541,
            "unit": "iter/sec",
            "range": "stddev: 3.342642295949794e-9",
            "extra": "mean: 86.55539198503314 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9104505925594787,
            "unit": "iter/sec",
            "range": "stddev: 0.009343001239385156",
            "extra": "mean: 1.098357240000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.92683471396403,
            "unit": "iter/sec",
            "range": "stddev: 0.0007851806959816767",
            "extra": "mean: 10.211705534248248 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.430504749995812,
            "unit": "iter/sec",
            "range": "stddev: 0.0012208794895044522",
            "extra": "mean: 39.32285300000444 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7973961630489216,
            "unit": "iter/sec",
            "range": "stddev: 0.004114387239318926",
            "extra": "mean: 1.2540817806000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.58817518917825,
            "unit": "iter/sec",
            "range": "stddev: 0.00021316791889367963",
            "extra": "mean: 20.581139260869463 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.510271767966,
            "unit": "iter/sec",
            "range": "stddev: 0.00005111240988317373",
            "extra": "mean: 1.4651794139443686 msec\nrounds: 459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.91455154041684,
            "unit": "iter/sec",
            "range": "stddev: 0.00025863549551802397",
            "extra": "mean: 9.015949540539808 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.75534887252525,
            "unit": "iter/sec",
            "range": "stddev: 0.0006455473365925768",
            "extra": "mean: 10.229619264149097 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 791791.3139155722,
            "unit": "iter/sec",
            "range": "stddev: 1.1771058177514843e-7",
            "extra": "mean: 1.262959042900828 usec\nrounds: 27248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2222.550783771785,
            "unit": "iter/sec",
            "range": "stddev: 0.00009466887661243479",
            "extra": "mean: 449.93347612194833 usec\nrounds: 1382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.843081919846741,
            "unit": "iter/sec",
            "range": "stddev: 0.00012356056285559396",
            "extra": "mean: 171.14256033333675 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5583623.787856996,
            "unit": "iter/sec",
            "range": "stddev: 9.249198616096157e-9",
            "extra": "mean: 179.0951607760576 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 168.4891713337071,
            "unit": "iter/sec",
            "range": "stddev: 0.00006357283884384118",
            "extra": "mean: 5.935099520546726 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2128.63352284169,
            "unit": "iter/sec",
            "range": "stddev: 0.00008720002131199537",
            "extra": "mean: 469.78495324315696 usec\nrounds: 1326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1948693.7567271048,
            "unit": "iter/sec",
            "range": "stddev: 9.234101359789153e-8",
            "extra": "mean: 513.1642653176725 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.747481343896474,
            "unit": "iter/sec",
            "range": "stddev: 0.0005335619091164759",
            "extra": "mean: 63.50221842857349 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6618920778711708,
            "unit": "iter/sec",
            "range": "stddev: 0.0015497813418778946",
            "extra": "mean: 601.7237902000034 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 288.0482189908517,
            "unit": "iter/sec",
            "range": "stddev: 0.00023394231579905968",
            "extra": "mean: 3.471640975609572 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.58525849018866,
            "unit": "iter/sec",
            "range": "stddev: 0.0010602816950935551",
            "extra": "mean: 22.943537210525136 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2015526.0620008516,
            "unit": "iter/sec",
            "range": "stddev: 6.850207189090104e-8",
            "extra": "mean: 496.1483847086952 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.312013154950286,
            "unit": "iter/sec",
            "range": "stddev: 0.0003738038604354597",
            "extra": "mean: 16.85999086538404 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 84.50215273690831,
            "unit": "iter/sec",
            "range": "stddev: 0.016414809585777953",
            "extra": "mean: 11.834018041095733 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 102.14573818606009,
            "unit": "iter/sec",
            "range": "stddev: 0.0007672552783682871",
            "extra": "mean: 9.789933655171046 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 270.2726926480955,
            "unit": "iter/sec",
            "range": "stddev: 0.0003311214830556557",
            "extra": "mean: 3.6999668379447974 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 629.7763457640644,
            "unit": "iter/sec",
            "range": "stddev: 0.00995414791943547",
            "extra": "mean: 1.587865290155934 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149647.56614795452,
            "unit": "iter/sec",
            "range": "stddev: 3.1797097930477213e-7",
            "extra": "mean: 6.682367282948748 usec\nrounds: 39215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 285.3068963217582,
            "unit": "iter/sec",
            "range": "stddev: 0.0002601231090219013",
            "extra": "mean: 3.504997646016373 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2182.5237738687233,
            "unit": "iter/sec",
            "range": "stddev: 0.00008566547817532505",
            "extra": "mean: 458.18515792265964 usec\nrounds: 1887"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.210524652796336,
            "unit": "iter/sec",
            "range": "stddev: 0.0005399212837840937",
            "extra": "mean: 89.20189116666914 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7100058.907875992,
            "unit": "iter/sec",
            "range": "stddev: 3.5322174291457044e-9",
            "extra": "mean: 140.8439018570614 nsec\nrounds: 60238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2055.6351125310534,
            "unit": "iter/sec",
            "range": "stddev: 0.00015773954458321712",
            "extra": "mean: 486.46765853728016 usec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.24475546577844,
            "unit": "iter/sec",
            "range": "stddev: 0.00005907749044996087",
            "extra": "mean: 6.201752094890513 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2225.108837598772,
            "unit": "iter/sec",
            "range": "stddev: 0.00008271583500496767",
            "extra": "mean: 449.4162187046773 usec\nrounds: 1358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 286.81168129799295,
            "unit": "iter/sec",
            "range": "stddev: 0.0002350829156986079",
            "extra": "mean: 3.486608339919793 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.29965863197079,
            "unit": "iter/sec",
            "range": "stddev: 0.0007068836178911682",
            "extra": "mean: 10.38425280220056 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 130.4639107430612,
            "unit": "iter/sec",
            "range": "stddev: 0.0003611585108441618",
            "extra": "mean: 7.664954961908387 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 516505.6511466587,
            "unit": "iter/sec",
            "range": "stddev: 1.6967726370456997e-7",
            "extra": "mean: 1.9360872388907433 usec\nrounds: 2006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2167.7319263998816,
            "unit": "iter/sec",
            "range": "stddev: 0.000082671606806074",
            "extra": "mean: 461.311653817258 usec\nrounds: 1323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10256.422169676605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027051124614730056",
            "extra": "mean: 97.49988674964331 usec\nrounds: 4883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 260.3241287192381,
            "unit": "iter/sec",
            "range": "stddev: 0.00014921426583536067",
            "extra": "mean: 3.8413650126089878 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6127445.86571768,
            "unit": "iter/sec",
            "range": "stddev: 9.899860396758454e-9",
            "extra": "mean: 163.20013622533878 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9147279726110761,
            "unit": "iter/sec",
            "range": "stddev: 0.002280697293455202",
            "extra": "mean: 1.0932211870000175 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1763.964778925599,
            "unit": "iter/sec",
            "range": "stddev: 0.000011936367808481196",
            "extra": "mean: 566.9047431939559 usec\nrounds: 1359"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 279.3610118380123,
            "unit": "iter/sec",
            "range": "stddev: 0.0002659204426435408",
            "extra": "mean: 3.5795975731210867 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2192.784583147824,
            "unit": "iter/sec",
            "range": "stddev: 0.0000838095160407098",
            "extra": "mean: 456.04114863141854 usec\nrounds: 1608"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 88.47624795675571,
            "unit": "iter/sec",
            "range": "stddev: 0.014496837880077917",
            "extra": "mean: 11.302468437503896 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.3409950748418,
            "unit": "iter/sec",
            "range": "stddev: 0.00008419303755802052",
            "extra": "mean: 6.084909000000849 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2745992.94891706,
            "unit": "iter/sec",
            "range": "stddev: 1.3293042461978268e-8",
            "extra": "mean: 364.1669948182734 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 297.9683076466296,
            "unit": "iter/sec",
            "range": "stddev: 0.00009248110754889035",
            "extra": "mean: 3.3560616157404657 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13825.723003269737,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013741080441154526",
            "extra": "mean: 72.32894798800058 usec\nrounds: 7133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 269.22164886478373,
            "unit": "iter/sec",
            "range": "stddev: 0.00023563001364049674",
            "extra": "mean: 3.714411542372838 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.68364270481014,
            "unit": "iter/sec",
            "range": "stddev: 0.00006356155671861997",
            "extra": "mean: 13.21289467924149 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 237.88037838958772,
            "unit": "iter/sec",
            "range": "stddev: 0.0034629737147606754",
            "extra": "mean: 4.203793548546714 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 743.1297532539943,
            "unit": "iter/sec",
            "range": "stddev: 0.00001792302754906784",
            "extra": "mean: 1.3456600218484456 msec\nrounds: 595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 82.85987021384335,
            "unit": "iter/sec",
            "range": "stddev: 0.019811413344433954",
            "extra": "mean: 12.06856826373511 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.53442266750142,
            "unit": "iter/sec",
            "range": "stddev: 0.0005560447390760083",
            "extra": "mean: 15.49560620000069 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 532.9588834624627,
            "unit": "iter/sec",
            "range": "stddev: 0.00002687020719598311",
            "extra": "mean: 1.8763173502303239 msec\nrounds: 434"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 103.56710550013088,
            "unit": "iter/sec",
            "range": "stddev: 0.0000901787817916857",
            "extra": "mean: 9.655575437499664 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.49198386842374,
            "unit": "iter/sec",
            "range": "stddev: 0.00008779237923767486",
            "extra": "mean: 9.662584121214321 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.63857671924222,
            "unit": "iter/sec",
            "range": "stddev: 0.0008168764100698399",
            "extra": "mean: 9.936547520835504 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12091.49121958308,
            "unit": "iter/sec",
            "range": "stddev: 0.00002113423679063027",
            "extra": "mean: 82.70278511060941 usec\nrounds: 5682"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.49486048341439,
            "unit": "iter/sec",
            "range": "stddev: 0.0007475529414323243",
            "extra": "mean: 10.363246239128776 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.59948230516238,
            "unit": "iter/sec",
            "range": "stddev: 0.0002575165291913159",
            "extra": "mean: 8.431740009007376 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1635716.9980277908,
            "unit": "iter/sec",
            "range": "stddev: 9.663299367589211e-8",
            "extra": "mean: 611.3526980557856 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.6524695494176,
            "unit": "iter/sec",
            "range": "stddev: 0.00018188075296808143",
            "extra": "mean: 3.4053859704786644 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8403.934329443178,
            "unit": "iter/sec",
            "range": "stddev: 0.000013844994413397158",
            "extra": "mean: 118.99188651397486 usec\nrounds: 4538"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 158.06991295868676,
            "unit": "iter/sec",
            "range": "stddev: 0.003916396108447696",
            "extra": "mean: 6.326314611569126 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.2751830025229,
            "unit": "iter/sec",
            "range": "stddev: 0.0006560667495258625",
            "extra": "mean: 11.201321199999558 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2144.7911633076546,
            "unit": "iter/sec",
            "range": "stddev: 0.00008514150832678875",
            "extra": "mean: 466.24585978702925 usec\nrounds: 1783"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.48521787429165,
            "unit": "iter/sec",
            "range": "stddev: 0.0003041573729563333",
            "extra": "mean: 9.217845708331987 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 228.20726365041966,
            "unit": "iter/sec",
            "range": "stddev: 0.011959883755431876",
            "extra": "mean: 4.38198146721506 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.584133594931458,
            "unit": "iter/sec",
            "range": "stddev: 0.0014712809663882307",
            "extra": "mean: 386.9768969999882 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.4607641532267,
            "unit": "iter/sec",
            "range": "stddev: 0.0008058796849174535",
            "extra": "mean: 23.551154105266086 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.4873034590767,
            "unit": "iter/sec",
            "range": "stddev: 0.0009226061688292611",
            "extra": "mean: 10.472596500000371 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7020476405757567,
            "unit": "iter/sec",
            "range": "stddev: 0.07334222244777099",
            "extra": "mean: 1.424404758599985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.98631028431802,
            "unit": "iter/sec",
            "range": "stddev: 0.0007028947570801462",
            "extra": "mean: 9.902332278351277 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 101.1635100572827,
            "unit": "iter/sec",
            "range": "stddev: 0.00048512159275406375",
            "extra": "mean: 9.884987179999598 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.0913463237001,
            "unit": "iter/sec",
            "range": "stddev: 0.026598140513606504",
            "extra": "mean: 26.960466499999605 msec\nrounds: 42"
          }
        ]
      }
    ]
  }
}
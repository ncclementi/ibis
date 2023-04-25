window.BENCHMARK_DATA = {
  "lastUpdate": 1682427458130,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
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
          "id": "ae2f1d98b204f691fce234555a8c21bbe228e0af",
          "message": "chore(deps): update dependency mkdocs-material to >=8.2.1,<9.1.9",
          "timestamp": "2023-04-25T08:44:40-04:00",
          "tree_id": "589aac9440faa40edcf9e1440159c080a29f02d8",
          "url": "https://github.com/ibis-project/ibis/commit/ae2f1d98b204f691fce234555a8c21bbe228e0af"
        },
        "date": 1682427376361,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 127.7215582449339,
            "unit": "iter/sec",
            "range": "stddev: 0.0003243733644438106",
            "extra": "mean: 7.829531785716881 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10478.144568570904,
            "unit": "iter/sec",
            "range": "stddev: 0.000003954210451944944",
            "extra": "mean: 95.43674392501613 usec\nrounds: 5432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 83.30491287438137,
            "unit": "iter/sec",
            "range": "stddev: 0.015218733948600079",
            "extra": "mean: 12.004093942309716 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.6253061000857,
            "unit": "iter/sec",
            "range": "stddev: 0.00027672730024784167",
            "extra": "mean: 3.9428242211973106 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.9106743162111,
            "unit": "iter/sec",
            "range": "stddev: 0.013293965559154932",
            "extra": "mean: 11.24724345744468 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 239.04786936064187,
            "unit": "iter/sec",
            "range": "stddev: 0.009039627197405557",
            "extra": "mean: 4.183262551867134 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.23496930000171,
            "unit": "iter/sec",
            "range": "stddev: 0.0008170379980942917",
            "extra": "mean: 9.502544702124826 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1668642.0263982934,
            "unit": "iter/sec",
            "range": "stddev: 2.3292894321807452e-7",
            "extra": "mean: 599.2897123407982 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2146.5139529947637,
            "unit": "iter/sec",
            "range": "stddev: 0.00011985192314547803",
            "extra": "mean: 465.87165138378185 usec\nrounds: 1156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.82087545617532,
            "unit": "iter/sec",
            "range": "stddev: 0.0008473655252853113",
            "extra": "mean: 10.01794459756099 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.49800942860835,
            "unit": "iter/sec",
            "range": "stddev: 0.0008751898789974113",
            "extra": "mean: 19.04834127777535 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.902837074373839,
            "unit": "iter/sec",
            "range": "stddev: 0.021875638421987396",
            "extra": "mean: 1.107619556600008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1948281.7699111835,
            "unit": "iter/sec",
            "range": "stddev: 1.3957960921781346e-7",
            "extra": "mean: 513.2727798636575 nsec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.32468369854027,
            "unit": "iter/sec",
            "range": "stddev: 0.00008513261675844822",
            "extra": "mean: 6.122773222973262 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 99.89960480627965,
            "unit": "iter/sec",
            "range": "stddev: 0.0009068388679351452",
            "extra": "mean: 10.010049608696152 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2114.756274255796,
            "unit": "iter/sec",
            "range": "stddev: 0.00011800292680134937",
            "extra": "mean: 472.86773051514405 usec\nrounds: 1514"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 146.30392697878952,
            "unit": "iter/sec",
            "range": "stddev: 0.003884558085888031",
            "extra": "mean: 6.8350865260436615 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 281.44308118779577,
            "unit": "iter/sec",
            "range": "stddev: 0.0003374353519538166",
            "extra": "mean: 3.55311630252065 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.974430385757522,
            "unit": "iter/sec",
            "range": "stddev: 0.0001248868750011765",
            "extra": "mean: 52.702504352943016 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.72801230966577,
            "unit": "iter/sec",
            "range": "stddev: 0.00004070933951312719",
            "extra": "mean: 9.113443130436726 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.6272846155544,
            "unit": "iter/sec",
            "range": "stddev: 0.0016118601495084604",
            "extra": "mean: 20.564586484850324 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5318321470613303,
            "unit": "iter/sec",
            "range": "stddev: 0.0015354413407975482",
            "extra": "mean: 394.9708914000041 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9192055961095517,
            "unit": "iter/sec",
            "range": "stddev: 0.003947779119829793",
            "extra": "mean: 1.0878959007999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.74902201058082,
            "unit": "iter/sec",
            "range": "stddev: 0.00007839074066293016",
            "extra": "mean: 8.948624175926268 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.46837044828597,
            "unit": "iter/sec",
            "range": "stddev: 0.00032600925964943145",
            "extra": "mean: 9.953381303369795 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 78.37953792738777,
            "unit": "iter/sec",
            "range": "stddev: 0.025078652735951563",
            "extra": "mean: 12.758431938274734 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2145.561831120161,
            "unit": "iter/sec",
            "range": "stddev: 0.00010985747781719299",
            "extra": "mean: 466.0783881851204 usec\nrounds: 1422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.15284817563797,
            "unit": "iter/sec",
            "range": "stddev: 0.0008470642843196785",
            "extra": "mean: 9.509965895832787 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1030735.4418156812,
            "unit": "iter/sec",
            "range": "stddev: 2.3569107732949312e-7",
            "extra": "mean: 970.181056584666 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 219.7849757119883,
            "unit": "iter/sec",
            "range": "stddev: 0.004299189991159638",
            "extra": "mean: 4.549901542453134 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12370.23018501789,
            "unit": "iter/sec",
            "range": "stddev: 0.00001486014611664917",
            "extra": "mean: 80.8392394517559 usec\nrounds: 3650"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.47273688223362,
            "unit": "iter/sec",
            "range": "stddev: 0.00006192009929634203",
            "extra": "mean: 5.277804165680828 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16638089778580512,
            "unit": "iter/sec",
            "range": "stddev: 0.009830817867257634",
            "extra": "mean: 6.010305349400005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.6797789467965,
            "unit": "iter/sec",
            "range": "stddev: 0.00002665045047013752",
            "extra": "mean: 1.859843050000491 msec\nrounds: 440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.2815088437075,
            "unit": "iter/sec",
            "range": "stddev: 0.001002599256803701",
            "extra": "mean: 10.072369081076676 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.78248016957642,
            "unit": "iter/sec",
            "range": "stddev: 0.0006211403515800623",
            "extra": "mean: 21.375523409088515 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.92508283447958,
            "unit": "iter/sec",
            "range": "stddev: 0.00013866162953299913",
            "extra": "mean: 6.175695466663456 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.6996738468168,
            "unit": "iter/sec",
            "range": "stddev: 0.00011932267093822352",
            "extra": "mean: 7.535813548075181 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.46402297524943,
            "unit": "iter/sec",
            "range": "stddev: 0.030296625288755822",
            "extra": "mean: 27.424291627908605 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4543.110306903962,
            "unit": "iter/sec",
            "range": "stddev: 0.00004345666369418676",
            "extra": "mean: 220.11351969164048 usec\nrounds: 2590"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14068.315086359642,
            "unit": "iter/sec",
            "range": "stddev: 0.000001877063474182357",
            "extra": "mean: 71.08171759456683 usec\nrounds: 6519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1982745.4637111865,
            "unit": "iter/sec",
            "range": "stddev: 1.1257328909310116e-7",
            "extra": "mean: 504.35117280674984 nsec\nrounds: 89278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.97225541057806,
            "unit": "iter/sec",
            "range": "stddev: 0.0008775536701983898",
            "extra": "mean: 10.002775228918063 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2186.0061703506826,
            "unit": "iter/sec",
            "range": "stddev: 0.00008742790623069331",
            "extra": "mean: 457.4552503845762 usec\nrounds: 1953"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.11229175438018,
            "unit": "iter/sec",
            "range": "stddev: 0.0007739509470347218",
            "extra": "mean: 10.51388817948388 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.52626200700453,
            "unit": "iter/sec",
            "range": "stddev: 0.00022501713062827796",
            "extra": "mean: 5.69715316993473 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.4989510628639,
            "unit": "iter/sec",
            "range": "stddev: 0.00035509945888489536",
            "extra": "mean: 3.603617225109664 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2191.1101498929556,
            "unit": "iter/sec",
            "range": "stddev: 0.00009357836988439002",
            "extra": "mean: 456.38965254615516 usec\nrounds: 1865"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3623807.6513759596,
            "unit": "iter/sec",
            "range": "stddev: 1.8646341341148806e-8",
            "extra": "mean: 275.95283640925214 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 93.9150478387589,
            "unit": "iter/sec",
            "range": "stddev: 0.0010969956981474174",
            "extra": "mean: 10.64792089247383 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 269.0071572582517,
            "unit": "iter/sec",
            "range": "stddev: 0.0003560924937423475",
            "extra": "mean: 3.7173732111520814 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.82179277965794,
            "unit": "iter/sec",
            "range": "stddev: 0.00012115588960907471",
            "extra": "mean: 33.53252460000059 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 680.7581036723517,
            "unit": "iter/sec",
            "range": "stddev: 0.000033252811941838226",
            "extra": "mean: 1.4689505635048585 msec\nrounds: 559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11654323.95610282,
            "unit": "iter/sec",
            "range": "stddev: 3.773004282238042e-9",
            "extra": "mean: 85.80506289052099 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6259578.362496264,
            "unit": "iter/sec",
            "range": "stddev: 6.2760797286314706e-9",
            "extra": "mean: 159.7551691327162 nsec\nrounds: 51814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.6447739179659,
            "unit": "iter/sec",
            "range": "stddev: 0.00045801808996195757",
            "extra": "mean: 3.778650094598045 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149155.70929941998,
            "unit": "iter/sec",
            "range": "stddev: 3.381684139079844e-7",
            "extra": "mean: 6.704403101275647 usec\nrounds: 35212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.77601224715556,
            "unit": "iter/sec",
            "range": "stddev: 0.0006148762991700564",
            "extra": "mean: 10.227457400003459 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.34962992394505,
            "unit": "iter/sec",
            "range": "stddev: 0.0009361994406991013",
            "extra": "mean: 9.770431028847781 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1190.6331504566153,
            "unit": "iter/sec",
            "range": "stddev: 0.000014373989427496161",
            "extra": "mean: 839.8892636380011 usec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.346869279441263,
            "unit": "iter/sec",
            "range": "stddev: 0.0012491497636787341",
            "extra": "mean: 742.4625502000026 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.72383281212333,
            "unit": "iter/sec",
            "range": "stddev: 0.0008258474024196051",
            "extra": "mean: 10.902291905401361 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.52794941682978,
            "unit": "iter/sec",
            "range": "stddev: 0.0003104677202125371",
            "extra": "mean: 10.691991070426013 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 742.2934940259058,
            "unit": "iter/sec",
            "range": "stddev: 0.00003969574225893312",
            "extra": "mean: 1.3471760267982362 msec\nrounds: 597"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.27846045067696,
            "unit": "iter/sec",
            "range": "stddev: 0.0002983968371855078",
            "extra": "mean: 3.6998878798278847 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.6600865015345,
            "unit": "iter/sec",
            "range": "stddev: 0.0010349485248805715",
            "extra": "mean: 10.13581110112291 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.511719394895364,
            "unit": "iter/sec",
            "range": "stddev: 0.00018622234240136675",
            "extra": "mean: 117.48507600000518 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.45189982515742,
            "unit": "iter/sec",
            "range": "stddev: 0.03931790013342199",
            "extra": "mean: 29.893668378378692 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2111.947677246208,
            "unit": "iter/sec",
            "range": "stddev: 0.00009994778987890863",
            "extra": "mean: 473.49657890384435 usec\nrounds: 1204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2131.4212597050746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000914981576974222",
            "extra": "mean: 469.17051026242007 usec\nrounds: 1754"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 418.8167795716301,
            "unit": "iter/sec",
            "range": "stddev: 0.00004779588436844501",
            "extra": "mean: 2.3876789297286747 msec\nrounds: 370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.83609626878673,
            "unit": "iter/sec",
            "range": "stddev: 0.000057993776736832004",
            "extra": "mean: 9.538699318182587 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8605.399669274308,
            "unit": "iter/sec",
            "range": "stddev: 0.000012307327814616824",
            "extra": "mean: 116.20610761061023 usec\nrounds: 3206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1923227.516447462,
            "unit": "iter/sec",
            "range": "stddev: 9.359429123766718e-8",
            "extra": "mean: 519.9592827411159 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.216265043053376,
            "unit": "iter/sec",
            "range": "stddev: 0.0021280500025415232",
            "extra": "mean: 30.10573279999562 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 315.57510818699853,
            "unit": "iter/sec",
            "range": "stddev: 0.00013642866884154578",
            "extra": "mean: 3.168817736433876 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7096627.948542304,
            "unit": "iter/sec",
            "range": "stddev: 5.280682229061778e-9",
            "extra": "mean: 140.91199471791535 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2111.54669916717,
            "unit": "iter/sec",
            "range": "stddev: 0.00012679068030620468",
            "extra": "mean: 473.5864948638914 usec\nrounds: 1071"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.82529885006176,
            "unit": "iter/sec",
            "range": "stddev: 0.0002780003151502081",
            "extra": "mean: 3.535751589641719 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7866190886236029,
            "unit": "iter/sec",
            "range": "stddev: 0.006577605668819026",
            "extra": "mean: 1.271263327400004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6442347852900558,
            "unit": "iter/sec",
            "range": "stddev: 0.002267702814868501",
            "extra": "mean: 608.185648999995 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.442946478694786,
            "unit": "iter/sec",
            "range": "stddev: 0.0011788980224852266",
            "extra": "mean: 42.65675395833076 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 202.1186341436239,
            "unit": "iter/sec",
            "range": "stddev: 0.000030988402374752274",
            "extra": "mean: 4.947589341462737 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.40935619306747,
            "unit": "iter/sec",
            "range": "stddev: 0.00031901574227282596",
            "extra": "mean: 19.08056256818275 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5831533.615090061,
            "unit": "iter/sec",
            "range": "stddev: 9.400708181706273e-9",
            "extra": "mean: 171.4814774303652 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4498491.811421101,
            "unit": "iter/sec",
            "range": "stddev: 1.4361538986784054e-8",
            "extra": "mean: 222.29672564017412 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 75.25382683081119,
            "unit": "iter/sec",
            "range": "stddev: 0.024549522351493252",
            "extra": "mean: 13.288360766665619 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1790.7213434793432,
            "unit": "iter/sec",
            "range": "stddev: 0.00006305627281454168",
            "extra": "mean: 558.4341771774585 usec\nrounds: 1332"
          }
        ]
      }
    ]
  }
}
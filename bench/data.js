window.BENCHMARK_DATA = {
  "lastUpdate": 1682814500746,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
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
          "id": "24f81bada91aa92eb6b4a9286019e4abbb2a84cf",
          "message": "chore(flake/nixpkgs): `17b00c9e` -> `bb59422c`",
          "timestamp": "2023-04-30T00:21:29Z",
          "tree_id": "9644b2b550e590dcbafc40d00a98ec858635f3f6",
          "url": "https://github.com/ibis-project/ibis/commit/24f81bada91aa92eb6b4a9286019e4abbb2a84cf"
        },
        "date": 1682814419117,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 17.362699074630868,
            "unit": "iter/sec",
            "range": "stddev: 0.019933863875245622",
            "extra": "mean: 57.59473199999927 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.5800621133715,
            "unit": "iter/sec",
            "range": "stddev: 0.0003718486257934019",
            "extra": "mean: 3.628709538459309 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149334.27692724642,
            "unit": "iter/sec",
            "range": "stddev: 3.989406888233027e-7",
            "extra": "mean: 6.696386258910846 usec\nrounds: 32574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1445.1842567754654,
            "unit": "iter/sec",
            "range": "stddev: 0.00469482706576763",
            "extra": "mean: 691.9532892167172 usec\nrounds: 408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8561832660678493,
            "unit": "iter/sec",
            "range": "stddev: 0.016300675284492933",
            "extra": "mean: 1.1679742405999718 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4236498997156017,
            "unit": "iter/sec",
            "range": "stddev: 0.0020540193303559733",
            "extra": "mean: 412.6008464000279 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.00490616928431,
            "unit": "iter/sec",
            "range": "stddev: 0.0009806400972542455",
            "extra": "mean: 10.100509547376795 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.664347697586,
            "unit": "iter/sec",
            "range": "stddev: 0.00004296525926704563",
            "extra": "mean: 1.4584395460518427 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.47428975621936,
            "unit": "iter/sec",
            "range": "stddev: 0.000858551963032499",
            "extra": "mean: 10.25911553191076 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.2778176723358,
            "unit": "iter/sec",
            "range": "stddev: 0.00014862418345368348",
            "extra": "mean: 6.931072399993354 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 176.65374423080732,
            "unit": "iter/sec",
            "range": "stddev: 0.009160374655577643",
            "extra": "mean: 5.660791421966397 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.31820186033393,
            "unit": "iter/sec",
            "range": "stddev: 0.0005784478229724159",
            "extra": "mean: 11.85983545588907 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2184.9556794477053,
            "unit": "iter/sec",
            "range": "stddev: 0.00009003713365864294",
            "extra": "mean: 457.67518737623624 usec\nrounds: 1014"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2147.479823084854,
            "unit": "iter/sec",
            "range": "stddev: 0.00009157909185545263",
            "extra": "mean: 465.66211670547864 usec\nrounds: 1748"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.0369037774432,
            "unit": "iter/sec",
            "range": "stddev: 0.0015042127461642502",
            "extra": "mean: 19.593665093021773 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.5886258143983,
            "unit": "iter/sec",
            "range": "stddev: 0.0008268252155930543",
            "extra": "mean: 9.747669315789297 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.69753501312111,
            "unit": "iter/sec",
            "range": "stddev: 0.014906572877615506",
            "extra": "mean: 11.148578384609099 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 122.43080236568888,
            "unit": "iter/sec",
            "range": "stddev: 0.00020624042145372132",
            "extra": "mean: 8.167879166658546 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 216.81964939155847,
            "unit": "iter/sec",
            "range": "stddev: 0.0042934986714520925",
            "extra": "mean: 4.612128111110826 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.51285697974227,
            "unit": "iter/sec",
            "range": "stddev: 0.02713189585482544",
            "extra": "mean: 28.158815850001417 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.79802844291518,
            "unit": "iter/sec",
            "range": "stddev: 0.0000706118714506978",
            "extra": "mean: 6.03143480891453 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1864167.1042271825,
            "unit": "iter/sec",
            "range": "stddev: 1.3767756895315868e-7",
            "extra": "mean: 536.432596483653 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.65345934442936,
            "unit": "iter/sec",
            "range": "stddev: 0.0008906623796610428",
            "extra": "mean: 10.677662170729857 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.6440344130469,
            "unit": "iter/sec",
            "range": "stddev: 0.00002646345971373066",
            "extra": "mean: 1.3339664615392766 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 221.60364372920537,
            "unit": "iter/sec",
            "range": "stddev: 0.012483841078179896",
            "extra": "mean: 4.512561179824179 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.09252420609694,
            "unit": "iter/sec",
            "range": "stddev: 0.0009262261161603826",
            "extra": "mean: 10.194456795697842 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.07298975731713,
            "unit": "iter/sec",
            "range": "stddev: 0.0010914777923735019",
            "extra": "mean: 10.74425569230608 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 97.76542845621867,
            "unit": "iter/sec",
            "range": "stddev: 0.001050236751379263",
            "extra": "mean: 10.228564593749212 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 81.93938405155917,
            "unit": "iter/sec",
            "range": "stddev: 0.02027543398584406",
            "extra": "mean: 12.204143484539308 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 309.8571678824894,
            "unit": "iter/sec",
            "range": "stddev: 0.00005166422622320123",
            "extra": "mean: 3.2272934230756314 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 143.52693324528116,
            "unit": "iter/sec",
            "range": "stddev: 0.0038834240963449376",
            "extra": "mean: 6.967333429266857 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.598165837189285,
            "unit": "iter/sec",
            "range": "stddev: 0.03749645145222741",
            "extra": "mean: 30.67657257142855 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.592672768240023,
            "unit": "iter/sec",
            "range": "stddev: 0.00024660928288099793",
            "extra": "mean: 116.37822444445571 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 254.65317946417346,
            "unit": "iter/sec",
            "range": "stddev: 0.0005155382415209779",
            "extra": "mean: 3.926909540670737 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10493.72442278372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021567611413412427",
            "extra": "mean: 95.29505061413889 usec\nrounds: 2035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2197.6866996990816,
            "unit": "iter/sec",
            "range": "stddev: 0.00010998837846912531",
            "extra": "mean: 455.0239122514256 usec\nrounds: 1208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.714235846441568,
            "unit": "iter/sec",
            "range": "stddev: 0.00010640480230728854",
            "extra": "mean: 33.653902633331725 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 93.37983416662718,
            "unit": "iter/sec",
            "range": "stddev: 0.0010634519049222651",
            "extra": "mean: 10.708950266666761 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2237.0482859835547,
            "unit": "iter/sec",
            "range": "stddev: 0.00009163755465829723",
            "extra": "mean: 447.01761972041373 usec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.535052069703696,
            "unit": "iter/sec",
            "range": "stddev: 0.0011131657988169188",
            "extra": "mean: 31.71074516666863 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 281.99272665871854,
            "unit": "iter/sec",
            "range": "stddev: 0.0003394613205403822",
            "extra": "mean: 3.546190754097885 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 423.8477332459332,
            "unit": "iter/sec",
            "range": "stddev: 0.00003067810874290251",
            "extra": "mean: 2.3593378507459435 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2123.7236224663257,
            "unit": "iter/sec",
            "range": "stddev: 0.0000958013196167245",
            "extra": "mean: 470.8710631747263 usec\nrounds: 1203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.27725841002199,
            "unit": "iter/sec",
            "range": "stddev: 0.00008849171621486464",
            "extra": "mean: 8.906523138890066 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8467227025244919,
            "unit": "iter/sec",
            "range": "stddev: 0.028011315310975674",
            "extra": "mean: 1.181024197199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2135.9189438045883,
            "unit": "iter/sec",
            "range": "stddev: 0.00008395968891705284",
            "extra": "mean: 468.1825604387206 usec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5902176810310016,
            "unit": "iter/sec",
            "range": "stddev: 0.0014351968948366572",
            "extra": "mean: 628.8447247999784 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.414986112523,
            "unit": "iter/sec",
            "range": "stddev: 0.0006349786352885168",
            "extra": "mean: 24.14584897561082 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1776.1550830053209,
            "unit": "iter/sec",
            "range": "stddev: 0.0000100295505792393",
            "extra": "mean: 563.0138998380494 usec\nrounds: 1228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.50922086674993,
            "unit": "iter/sec",
            "range": "stddev: 0.00009301353738557129",
            "extra": "mean: 9.5685336825447 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6288230.366620874,
            "unit": "iter/sec",
            "range": "stddev: 5.1949118344611925e-9",
            "extra": "mean: 159.0272527718175 nsec\nrounds: 52084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.64993758629896,
            "unit": "iter/sec",
            "range": "stddev: 0.0009236381487977909",
            "extra": "mean: 9.83768434831569 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2694511219724265,
            "unit": "iter/sec",
            "range": "stddev: 0.07936718593697181",
            "extra": "mean: 787.742027000013 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 105.89981668247368,
            "unit": "iter/sec",
            "range": "stddev: 0.0004592408432948349",
            "extra": "mean: 9.442886978722212 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.94688385032167,
            "unit": "iter/sec",
            "range": "stddev: 0.0009070080395449713",
            "extra": "mean: 10.10643247252449 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.80419595690745,
            "unit": "iter/sec",
            "range": "stddev: 0.00035037409894585577",
            "extra": "mean: 3.5485632022062465 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6177417.367938844,
            "unit": "iter/sec",
            "range": "stddev: 9.813230440204482e-9",
            "extra": "mean: 161.8799476282853 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1627247130106716,
            "unit": "iter/sec",
            "range": "stddev: 0.0830219795462729",
            "extra": "mean: 6.145348063600022 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.48662157480814,
            "unit": "iter/sec",
            "range": "stddev: 0.00102419586397421",
            "extra": "mean: 10.15366335051328 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.04045758086454,
            "unit": "iter/sec",
            "range": "stddev: 0.0003319896487659662",
            "extra": "mean: 3.622657376979081 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11674940.619260214,
            "unit": "iter/sec",
            "range": "stddev: 3.6721692771565115e-9",
            "extra": "mean: 85.65354057129355 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 99.82900088254407,
            "unit": "iter/sec",
            "range": "stddev: 0.0010291877593184258",
            "extra": "mean: 10.017129202530748 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.60375820894999,
            "unit": "iter/sec",
            "range": "stddev: 0.00041056659577440655",
            "extra": "mean: 21.006744795455877 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.44692381145725,
            "unit": "iter/sec",
            "range": "stddev: 0.0003487360876219532",
            "extra": "mean: 10.935304965115856 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2088.4639849103514,
            "unit": "iter/sec",
            "range": "stddev: 0.0001365399691827552",
            "extra": "mean: 478.8208019028519 usec\nrounds: 1050"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 50.14369205552717,
            "unit": "iter/sec",
            "range": "stddev: 0.00026572770506942683",
            "extra": "mean: 19.942687883705077 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1932032.1359600637,
            "unit": "iter/sec",
            "range": "stddev: 1.0863909119679877e-7",
            "extra": "mean: 517.5897343462566 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5501132.590082981,
            "unit": "iter/sec",
            "range": "stddev: 1.0576873781555416e-8",
            "extra": "mean: 181.78074853228392 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12042.664765332014,
            "unit": "iter/sec",
            "range": "stddev: 0.00012122021054270123",
            "extra": "mean: 83.03809991280033 usec\nrounds: 3403"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 97.53754592989357,
            "unit": "iter/sec",
            "range": "stddev: 0.0010384534683628417",
            "extra": "mean: 10.252462172041561 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 125.58909151934706,
            "unit": "iter/sec",
            "range": "stddev: 0.000518394353325444",
            "extra": "mean: 7.962474988092015 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1050391.272890652,
            "unit": "iter/sec",
            "range": "stddev: 1.4068446108329216e-7",
            "extra": "mean: 952.0261885345101 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8418.513740296296,
            "unit": "iter/sec",
            "range": "stddev: 0.00006739635333698665",
            "extra": "mean: 118.78581313152365 usec\nrounds: 2681"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.79628837349082,
            "unit": "iter/sec",
            "range": "stddev: 0.00007190757403903363",
            "extra": "mean: 5.753862808916753 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 280.9958426713263,
            "unit": "iter/sec",
            "range": "stddev: 0.0003387663845293295",
            "extra": "mean: 3.55877151239449 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2708873.673435793,
            "unit": "iter/sec",
            "range": "stddev: 1.6822558747725656e-8",
            "extra": "mean: 369.15711862259906 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.15956435521425,
            "unit": "iter/sec",
            "range": "stddev: 0.0004364865177164807",
            "extra": "mean: 47.25995219998822 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 98.93539544262148,
            "unit": "iter/sec",
            "range": "stddev: 0.000870201035482349",
            "extra": "mean: 10.107606034484993 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7232422.99267119,
            "unit": "iter/sec",
            "range": "stddev: 4.774647670582888e-9",
            "extra": "mean: 138.26624922432586 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4465077.966639411,
            "unit": "iter/sec",
            "range": "stddev: 1.4638131403101175e-8",
            "extra": "mean: 223.96025499866872 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1733440.8064965182,
            "unit": "iter/sec",
            "range": "stddev: 1.362195508911762e-7",
            "extra": "mean: 576.887307747828 nsec\nrounds: 111099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7558841735460035,
            "unit": "iter/sec",
            "range": "stddev: 0.0020811182239151064",
            "extra": "mean: 1.3229540120000138 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.0651273353159,
            "unit": "iter/sec",
            "range": "stddev: 0.000026174478444270405",
            "extra": "mean: 1.8724308119300668 msec\nrounds: 436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1162.8942422737157,
            "unit": "iter/sec",
            "range": "stddev: 0.00012257713375824118",
            "extra": "mean: 859.923425233217 usec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4536.788094160231,
            "unit": "iter/sec",
            "range": "stddev: 0.000025673068474579552",
            "extra": "mean: 220.42025751372506 usec\nrounds: 1763"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14121.598499458009,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018674093027392569",
            "extra": "mean: 70.81351307632633 usec\nrounds: 6003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.4311687904456,
            "unit": "iter/sec",
            "range": "stddev: 0.00005883839318222105",
            "extra": "mean: 5.251241203589002 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 262.53699295367466,
            "unit": "iter/sec",
            "range": "stddev: 0.0005280201440016773",
            "extra": "mean: 3.808987025978669 msec\nrounds: 231"
          }
        ]
      }
    ]
  }
}
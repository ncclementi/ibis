window.BENCHMARK_DATA = {
  "lastUpdate": 1678128293099,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "480d819e5e33fac6922fd16aa1362c4e4f34d89b",
          "message": "test(backends): strict validate exception in test_temporal",
          "timestamp": "2023-03-06T13:37:53-05:00",
          "tree_id": "f8fde23114e653f995bcca1e8caf1ee85d5c934a",
          "url": "https://github.com/ibis-project/ibis/commit/480d819e5e33fac6922fd16aa1362c4e4f34d89b"
        },
        "date": 1678128184969,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 74.1734832047144,
            "unit": "iter/sec",
            "range": "stddev: 0.013985637475009926",
            "extra": "mean: 13.481906967211712 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 111098.95223238866,
            "unit": "iter/sec",
            "range": "stddev: 0.00001805416581262982",
            "extra": "mean: 9.000984976962457 usec\nrounds: 23697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 28.218661208770257,
            "unit": "iter/sec",
            "range": "stddev: 0.0021833232239006598",
            "extra": "mean: 35.437542291666325 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 536.6719798104106,
            "unit": "iter/sec",
            "range": "stddev: 0.00027124996493012153",
            "extra": "mean: 1.8633355897456556 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 198.6666251489325,
            "unit": "iter/sec",
            "range": "stddev: 0.0008372868295806222",
            "extra": "mean: 5.033558098902318 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 10.95571035766252,
            "unit": "iter/sec",
            "range": "stddev: 0.0037688819728168414",
            "extra": "mean: 91.27660072727198 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 583872.3430285252,
            "unit": "iter/sec",
            "range": "stddev: 0.000008452856179334794",
            "extra": "mean: 1.7127031481111699 usec\nrounds: 20202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 186.8508374267337,
            "unit": "iter/sec",
            "range": "stddev: 0.0009407315977102221",
            "extra": "mean: 5.351862553958909 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 98.30746978499128,
            "unit": "iter/sec",
            "range": "stddev: 0.00018756780667959435",
            "extra": "mean: 10.17216699999608 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 15.598619987593333,
            "unit": "iter/sec",
            "range": "stddev: 0.006291667576638299",
            "extra": "mean: 64.10823526666907 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 475.56671251030275,
            "unit": "iter/sec",
            "range": "stddev: 0.000434941945828992",
            "extra": "mean: 2.102754405836039 msec\nrounds: 377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 38.33171975024254,
            "unit": "iter/sec",
            "range": "stddev: 0.00537851886744826",
            "extra": "mean: 26.088054658535704 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1402658.8052956406,
            "unit": "iter/sec",
            "range": "stddev: 0.00000204501166518063",
            "extra": "mean: 712.9317523438841 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 80.10169655672556,
            "unit": "iter/sec",
            "range": "stddev: 0.0007423423969344542",
            "extra": "mean: 12.484130086955535 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 217.07209118640094,
            "unit": "iter/sec",
            "range": "stddev: 0.0005007895489084704",
            "extra": "mean: 4.60676448333146 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5187139015616603,
            "unit": "iter/sec",
            "range": "stddev: 0.030418124533172212",
            "extra": "mean: 1.9278449970000053 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 85.09895344939473,
            "unit": "iter/sec",
            "range": "stddev: 0.0014651257072459552",
            "extra": "mean: 11.7510258289447 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.999238846004,
            "unit": "iter/sec",
            "range": "stddev: 0.00113199686829446",
            "extra": "mean: 11.76481123333038 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4399407.473230897,
            "unit": "iter/sec",
            "range": "stddev: 6.823255724065686e-7",
            "extra": "mean: 227.30333711642862 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8937225.009210484,
            "unit": "iter/sec",
            "range": "stddev: 3.29704052738861e-7",
            "extra": "mean: 111.89155458977805 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3521.5012872095303,
            "unit": "iter/sec",
            "range": "stddev: 0.00007941402090229732",
            "extra": "mean: 283.9697953915585 usec\nrounds: 1085"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3539.0752197746765,
            "unit": "iter/sec",
            "range": "stddev: 0.00010229927805116108",
            "extra": "mean: 282.55969085157426 usec\nrounds: 1585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.301395385278716,
            "unit": "iter/sec",
            "range": "stddev: 0.0040775342042582655",
            "extra": "mean: 136.96012162500182 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 73.121019703001,
            "unit": "iter/sec",
            "range": "stddev: 0.0011583755791241767",
            "extra": "mean: 13.675958076921601 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8178.21031487709,
            "unit": "iter/sec",
            "range": "stddev: 0.00005351350672678512",
            "extra": "mean: 122.27614129473862 usec\nrounds: 3383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 96.49662395412277,
            "unit": "iter/sec",
            "range": "stddev: 0.001231917648634836",
            "extra": "mean: 10.363056851350866 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3477.8718964766804,
            "unit": "iter/sec",
            "range": "stddev: 0.0001944348760013946",
            "extra": "mean: 287.5321546526966 usec\nrounds: 1526"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55845.01506708057,
            "unit": "iter/sec",
            "range": "stddev: 0.000021344585738213335",
            "extra": "mean: 17.906701230160085 usec\nrounds: 10811"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5604.438223951588,
            "unit": "iter/sec",
            "range": "stddev: 0.0001432813263751964",
            "extra": "mean: 178.4300156483691 usec\nrounds: 2812"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 70.6142623820173,
            "unit": "iter/sec",
            "range": "stddev: 0.0017104276865818448",
            "extra": "mean: 14.161445100000947 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 45.93758420782541,
            "unit": "iter/sec",
            "range": "stddev: 0.0011291764441280227",
            "extra": "mean: 21.768667578946204 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1328912.5451638885,
            "unit": "iter/sec",
            "range": "stddev: 0.000004308214446032885",
            "extra": "mean: 752.4949656312219 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 116.32420434874493,
            "unit": "iter/sec",
            "range": "stddev: 0.004939265389671347",
            "extra": "mean: 8.596663141593107 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 115.76535942252899,
            "unit": "iter/sec",
            "range": "stddev: 0.0006520469540529918",
            "extra": "mean: 8.638162616073483 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0696052749850011,
            "unit": "iter/sec",
            "range": "stddev: 0.015354742072518643",
            "extra": "mean: 934.924334599998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 203.1057354736823,
            "unit": "iter/sec",
            "range": "stddev: 0.0005424792728889864",
            "extra": "mean: 4.923543875645877 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 186.25794174716918,
            "unit": "iter/sec",
            "range": "stddev: 0.001459752943242211",
            "extra": "mean: 5.36889858558312 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 61.74286883702288,
            "unit": "iter/sec",
            "range": "stddev: 0.0018044142908450413",
            "extra": "mean: 16.196202392856257 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 162.82376768240383,
            "unit": "iter/sec",
            "range": "stddev: 0.005305743851340398",
            "extra": "mean: 6.141609509678904 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 177.0952480451566,
            "unit": "iter/sec",
            "range": "stddev: 0.0020873218263044516",
            "extra": "mean: 5.6466788975897035 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 199.52639159933054,
            "unit": "iter/sec",
            "range": "stddev: 0.0011537672697982742",
            "extra": "mean: 5.011868314684419 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 137.93365213059346,
            "unit": "iter/sec",
            "range": "stddev: 0.0005671811249451585",
            "extra": "mean: 7.24986241249681 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3268.4280226550477,
            "unit": "iter/sec",
            "range": "stddev: 0.0001341992538443453",
            "extra": "mean: 305.95747957994445 usec\nrounds: 1714"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 76.57005613477048,
            "unit": "iter/sec",
            "range": "stddev: 0.001277661659672973",
            "extra": "mean: 13.059935573769284 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9727.031376990726,
            "unit": "iter/sec",
            "range": "stddev: 0.00006799888789603405",
            "extra": "mean: 102.80628911771562 usec\nrounds: 5247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3970370.119173372,
            "unit": "iter/sec",
            "range": "stddev: 6.900882391527388e-7",
            "extra": "mean: 251.86568757684836 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 203.48142905785343,
            "unit": "iter/sec",
            "range": "stddev: 0.0006010823538884179",
            "extra": "mean: 4.914453395723312 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.92349838256439,
            "unit": "iter/sec",
            "range": "stddev: 0.0018644705472464927",
            "extra": "mean: 12.35735008974177 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4709536.6709538065,
            "unit": "iter/sec",
            "range": "stddev: 8.068977387958909e-7",
            "extra": "mean: 212.33511274409705 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 20.58394230862315,
            "unit": "iter/sec",
            "range": "stddev: 0.04412458362778673",
            "extra": "mean: 48.58155862500032 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 68.3761882506445,
            "unit": "iter/sec",
            "range": "stddev: 0.0020781938612118344",
            "extra": "mean: 14.62497435999694 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3596.168631444582,
            "unit": "iter/sec",
            "range": "stddev: 0.00020188014959904454",
            "extra": "mean: 278.0737230329212 usec\nrounds: 2466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3152.4990450862874,
            "unit": "iter/sec",
            "range": "stddev: 0.00022537598755280647",
            "extra": "mean: 317.20866071590797 usec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 73.80000957758236,
            "unit": "iter/sec",
            "range": "stddev: 0.001028621206987257",
            "extra": "mean: 13.550133742852008 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 63.26812952662048,
            "unit": "iter/sec",
            "range": "stddev: 0.0014787513389597873",
            "extra": "mean: 15.805746234037844 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.375509339428948,
            "unit": "iter/sec",
            "range": "stddev: 0.00716244613593098",
            "extra": "mean: 41.02478377272043 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 71.06050389064423,
            "unit": "iter/sec",
            "range": "stddev: 0.0020169140411811387",
            "extra": "mean: 14.072514902777932 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 86.31116339698546,
            "unit": "iter/sec",
            "range": "stddev: 0.0015093569603013438",
            "extra": "mean: 11.585986802199987 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 355.80956620316556,
            "unit": "iter/sec",
            "range": "stddev: 0.0006029833222875499",
            "extra": "mean: 2.8104921704915733 msec\nrounds: 305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 184.48166076987448,
            "unit": "iter/sec",
            "range": "stddev: 0.0013995389482382766",
            "extra": "mean: 5.420593005433839 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 85.23305611591995,
            "unit": "iter/sec",
            "range": "stddev: 0.0014504389200415495",
            "extra": "mean: 11.732537181817872 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 31.369831416254844,
            "unit": "iter/sec",
            "range": "stddev: 0.0029524558193561637",
            "extra": "mean: 31.877761366668743 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3584.9615857986987,
            "unit": "iter/sec",
            "range": "stddev: 0.0002054082364513507",
            "extra": "mean: 278.9430168405022 usec\nrounds: 1722"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3735.517073437727,
            "unit": "iter/sec",
            "range": "stddev: 0.00010819589972159499",
            "extra": "mean: 267.70055666743843 usec\nrounds: 2497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 114.80146421831425,
            "unit": "iter/sec",
            "range": "stddev: 0.0011419512783216264",
            "extra": "mean: 8.710690293098807 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 24.947846863963,
            "unit": "iter/sec",
            "range": "stddev: 0.003122253533538226",
            "extra": "mean: 40.08361945833864 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5139863569712678,
            "unit": "iter/sec",
            "range": "stddev: 0.03450320362364573",
            "extra": "mean: 1.9455769329999952 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4811040971697401,
            "unit": "iter/sec",
            "range": "stddev: 0.018942814320024197",
            "extra": "mean: 2.0785522424000193 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.2011561996964,
            "unit": "iter/sec",
            "range": "stddev: 0.0012498732126028803",
            "extra": "mean: 12.468648176468378 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 211.91518012026216,
            "unit": "iter/sec",
            "range": "stddev: 0.0006802176823988157",
            "extra": "mean: 4.718869122223801 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6311209803122901,
            "unit": "iter/sec",
            "range": "stddev: 0.011202923830145076",
            "extra": "mean: 613.0753095999921 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1151192.662450017,
            "unit": "iter/sec",
            "range": "stddev: 0.00001089579772656557",
            "extra": "mean: 868.6643275433651 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8911.83210103717,
            "unit": "iter/sec",
            "range": "stddev: 0.00006354653364265492",
            "extra": "mean: 112.2103725319981 usec\nrounds: 3495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 840.3219762630956,
            "unit": "iter/sec",
            "range": "stddev: 0.00017895009746509628",
            "extra": "mean: 1.1900200497516336 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 83.31108250315158,
            "unit": "iter/sec",
            "range": "stddev: 0.0010737555343869171",
            "extra": "mean: 12.003204975306508 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.043617849054092,
            "unit": "iter/sec",
            "range": "stddev: 0.00494326103159716",
            "extra": "mean: 247.30329060000713 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 54.81134100263479,
            "unit": "iter/sec",
            "range": "stddev: 0.0010122712030451772",
            "extra": "mean: 18.24439945652725 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1224.0098608647227,
            "unit": "iter/sec",
            "range": "stddev: 0.00018089886582506394",
            "extra": "mean: 816.9868821918909 usec\nrounds: 730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1273388.7631005698,
            "unit": "iter/sec",
            "range": "stddev: 0.000013363034679181155",
            "extra": "mean: 785.3061287937735 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 84.53950476641126,
            "unit": "iter/sec",
            "range": "stddev: 0.0015373087925190237",
            "extra": "mean: 11.828789425287884 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09573475067096372,
            "unit": "iter/sec",
            "range": "stddev: 0.24433968719055132",
            "extra": "mean: 10.4455278046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 352189.2305074433,
            "unit": "iter/sec",
            "range": "stddev: 0.000008645195834230549",
            "extra": "mean: 2.839382676634303 usec\nrounds: 1547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 70.10644240021867,
            "unit": "iter/sec",
            "range": "stddev: 0.0015319510573305122",
            "extra": "mean: 14.264024328766693 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 65.76769771516702,
            "unit": "iter/sec",
            "range": "stddev: 0.002721959888183959",
            "extra": "mean: 15.205032785713358 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3249.2120829818145,
            "unit": "iter/sec",
            "range": "stddev: 0.00030639392375218967",
            "extra": "mean: 307.7669214754046 usec\nrounds: 2114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 246.24123371931307,
            "unit": "iter/sec",
            "range": "stddev: 0.0004173660797545975",
            "extra": "mean: 4.061058275641544 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5138828156990101,
            "unit": "iter/sec",
            "range": "stddev: 0.012577023823642229",
            "extra": "mean: 1.9459689436000076 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 57.5700565700665,
            "unit": "iter/sec",
            "range": "stddev: 0.02785067724315529",
            "extra": "mean: 17.370140999999453 msec\nrounds: 70"
          }
        ]
      }
    ]
  }
}
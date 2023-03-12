window.BENCHMARK_DATA = {
  "lastUpdate": 1678581294939,
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
          "id": "dc28c460566506789ea2391bceb1e3dbcbfd7654",
          "message": "chore(flake/nixpkgs): `b9c3e7d6` -> `1e21dd61`",
          "timestamp": "2023-03-12T00:28:30Z",
          "tree_id": "9d3c2ee2528bda924a2671f3637aaea712f47455",
          "url": "https://github.com/ibis-project/ibis/commit/dc28c460566506789ea2391bceb1e3dbcbfd7654"
        },
        "date": 1678581201051,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 525.0449947436628,
            "unit": "iter/sec",
            "range": "stddev: 0.0003484542233170566",
            "extra": "mean: 1.9045986725160944 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 89.65176711697211,
            "unit": "iter/sec",
            "range": "stddev: 0.0014315800836833719",
            "extra": "mean: 11.154269817071889 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 108.37925460104859,
            "unit": "iter/sec",
            "range": "stddev: 0.0009140406434412427",
            "extra": "mean: 9.22685807058803 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 938.6918987044304,
            "unit": "iter/sec",
            "range": "stddev: 0.00011240659680533925",
            "extra": "mean: 1.0653122727278102 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5526526.211670008,
            "unit": "iter/sec",
            "range": "stddev: 1.682849753897563e-7",
            "extra": "mean: 180.9454912000092 nsec\nrounds: 62500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 149.65173733592076,
            "unit": "iter/sec",
            "range": "stddev: 0.014304667467641996",
            "extra": "mean: 6.68218102777729 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 200.97154227088967,
            "unit": "iter/sec",
            "range": "stddev: 0.0005546832110879784",
            "extra": "mean: 4.975828859650683 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8986.211631922852,
            "unit": "iter/sec",
            "range": "stddev: 0.00004356350137913764",
            "extra": "mean: 111.28159907202429 usec\nrounds: 4527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.219066134066166,
            "unit": "iter/sec",
            "range": "stddev: 0.013388627825816103",
            "extra": "mean: 820.3000411999994 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1335238.789039976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014086981641108536",
            "extra": "mean: 748.9297107066449 nsec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.69115106904827,
            "unit": "iter/sec",
            "range": "stddev: 0.0009128201504923219",
            "extra": "mean: 11.026434092105015 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 220.16731864903826,
            "unit": "iter/sec",
            "range": "stddev: 0.0008627551881685287",
            "extra": "mean: 4.542000175757549 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 68.666730302406,
            "unit": "iter/sec",
            "range": "stddev: 0.017152014129697933",
            "extra": "mean: 14.56309330000181 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5805559539014443,
            "unit": "iter/sec",
            "range": "stddev: 0.053107287042408524",
            "extra": "mean: 1.7224868563999962 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3501.7038411031867,
            "unit": "iter/sec",
            "range": "stddev: 0.00013541633002259486",
            "extra": "mean: 285.5752643218842 usec\nrounds: 1763"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 345665.2118541355,
            "unit": "iter/sec",
            "range": "stddev: 0.00001290885908623805",
            "extra": "mean: 2.8929726385713987 usec\nrounds: 1535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3352.5233223801433,
            "unit": "iter/sec",
            "range": "stddev: 0.00020353419514967206",
            "extra": "mean: 298.2827869755263 usec\nrounds: 1812"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8135317368392065,
            "unit": "iter/sec",
            "range": "stddev: 0.014910675154287317",
            "extra": "mean: 551.4102563999757 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.955893015114082,
            "unit": "iter/sec",
            "range": "stddev: 0.009099697262476218",
            "extra": "mean: 143.7629931666796 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.425200597971422,
            "unit": "iter/sec",
            "range": "stddev: 0.0029904135608567394",
            "extra": "mean: 37.84266447826954 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 69.18761302379971,
            "unit": "iter/sec",
            "range": "stddev: 0.001123563792429846",
            "extra": "mean: 14.453454257137212 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 119.96879021307915,
            "unit": "iter/sec",
            "range": "stddev: 0.001014219469078182",
            "extra": "mean: 8.335501243480731 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10530396586620698,
            "unit": "iter/sec",
            "range": "stddev: 0.18896091554236283",
            "extra": "mean: 9.496318507799993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 204.22750485754233,
            "unit": "iter/sec",
            "range": "stddev: 0.0012241896038312798",
            "extra": "mean: 4.8965001100000904 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119890.68326515162,
            "unit": "iter/sec",
            "range": "stddev: 0.000017856156574319397",
            "extra": "mean: 8.34093169515423 usec\nrounds: 28329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 223.15104535305883,
            "unit": "iter/sec",
            "range": "stddev: 0.00044952670100890707",
            "extra": "mean: 4.481269619050397 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 95.77901141718486,
            "unit": "iter/sec",
            "range": "stddev: 0.001049269093556848",
            "extra": "mean: 10.44070078823739 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3793.5848903516494,
            "unit": "iter/sec",
            "range": "stddev: 0.00010368686681446178",
            "extra": "mean: 263.6029056693402 usec\nrounds: 2205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.535653393381997,
            "unit": "iter/sec",
            "range": "stddev: 0.004688168433896833",
            "extra": "mean: 86.68776409090965 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 456485.9502337022,
            "unit": "iter/sec",
            "range": "stddev: 0.00004094896132830288",
            "extra": "mean: 2.1906479257204756 usec\nrounds: 21646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 28.230624041760255,
            "unit": "iter/sec",
            "range": "stddev: 0.001696215596613561",
            "extra": "mean: 35.42252549999413 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.769759581533975,
            "unit": "iter/sec",
            "range": "stddev: 0.006134135452812464",
            "extra": "mean: 32.49944145160418 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 70.92959942899957,
            "unit": "iter/sec",
            "range": "stddev: 0.0014217898210568494",
            "extra": "mean: 14.09848649999777 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 83.13099866411301,
            "unit": "iter/sec",
            "range": "stddev: 0.0012194582685101144",
            "extra": "mean: 12.029207107693415 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 127.14216015495589,
            "unit": "iter/sec",
            "range": "stddev: 0.004118904812180986",
            "extra": "mean: 7.865211655844443 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.292752112877654,
            "unit": "iter/sec",
            "range": "stddev: 0.0024063161851718205",
            "extra": "mean: 51.83293674998879 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10201.270261593514,
            "unit": "iter/sec",
            "range": "stddev: 0.00007228198221181498",
            "extra": "mean: 98.02700784870616 usec\nrounds: 6243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3545.7090916184934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000775254219706864",
            "extra": "mean: 282.03103361295064 usec\nrounds: 1547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 399.5711339922798,
            "unit": "iter/sec",
            "range": "stddev: 0.00025420050923013814",
            "extra": "mean: 2.5026832894773654 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 93.39543335789536,
            "unit": "iter/sec",
            "range": "stddev: 0.0009673436801340015",
            "extra": "mean: 10.70716162500105 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3508.528006274611,
            "unit": "iter/sec",
            "range": "stddev: 0.00018159147874471462",
            "extra": "mean: 285.0198140677833 usec\nrounds: 1834"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2085567.7739854618,
            "unit": "iter/sec",
            "range": "stddev: 6.082287619141651e-7",
            "extra": "mean: 479.4857364374275 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3841.9680441979276,
            "unit": "iter/sec",
            "range": "stddev: 0.0001954614917300421",
            "extra": "mean: 260.2832684957342 usec\nrounds: 1568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 88.05143197026214,
            "unit": "iter/sec",
            "range": "stddev: 0.0009808656623406396",
            "extra": "mean: 11.356998717950809 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 192.57143443745636,
            "unit": "iter/sec",
            "range": "stddev: 0.01137663730353769",
            "extra": "mean: 5.1928781800957164 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10238.377414347628,
            "unit": "iter/sec",
            "range": "stddev: 0.00003056155389387692",
            "extra": "mean: 97.67172663498833 usec\nrounds: 2140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1396.9854136666402,
            "unit": "iter/sec",
            "range": "stddev: 0.00018638313280565916",
            "extra": "mean: 715.8270875393893 usec\nrounds: 1268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.37643111739415,
            "unit": "iter/sec",
            "range": "stddev: 0.0017661216226596212",
            "extra": "mean: 13.628354292676228 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6127426177081602,
            "unit": "iter/sec",
            "range": "stddev: 0.024381828865623397",
            "extra": "mean: 1.6320066062000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4332894.720313249,
            "unit": "iter/sec",
            "range": "stddev: 4.0333731306652237e-7",
            "extra": "mean: 230.79259122352778 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 227.65626262075932,
            "unit": "iter/sec",
            "range": "stddev: 0.0005025340949813057",
            "extra": "mean: 4.392587265063944 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 78.98264836746205,
            "unit": "iter/sec",
            "range": "stddev: 0.0010461135806400384",
            "extra": "mean: 12.661008723682698 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 93.85608531708543,
            "unit": "iter/sec",
            "range": "stddev: 0.0012148528752438412",
            "extra": "mean: 10.654610157898428 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 184.14702365201006,
            "unit": "iter/sec",
            "range": "stddev: 0.004084191285755171",
            "extra": "mean: 5.430443458536368 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 125.97094697917125,
            "unit": "iter/sec",
            "range": "stddev: 0.0004426960293879352",
            "extra": "mean: 7.938338354837848 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.11190961133222,
            "unit": "iter/sec",
            "range": "stddev: 0.0022979480572416088",
            "extra": "mean: 20.36165988889296 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.287166133934576,
            "unit": "iter/sec",
            "range": "stddev: 0.00257284472901456",
            "extra": "mean: 23.647836717947403 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.985540409106875,
            "unit": "iter/sec",
            "range": "stddev: 0.0010736462219547171",
            "extra": "mean: 19.23611819999122 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 89.91202294219717,
            "unit": "iter/sec",
            "range": "stddev: 0.0012872355981344583",
            "extra": "mean: 11.12198310389348 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 267.15603244053557,
            "unit": "iter/sec",
            "range": "stddev: 0.0003811983448676002",
            "extra": "mean: 3.743130899440136 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.63808313975647,
            "unit": "iter/sec",
            "range": "stddev: 0.0018959801689950617",
            "extra": "mean: 13.766883111108383 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 569.2449930658047,
            "unit": "iter/sec",
            "range": "stddev: 0.00025014756966632907",
            "extra": "mean: 1.7567128603349877 msec\nrounds: 537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 233.70106231433357,
            "unit": "iter/sec",
            "range": "stddev: 0.0002910137126603968",
            "extra": "mean: 4.278970707693985 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.390609318074383,
            "unit": "iter/sec",
            "range": "stddev: 0.006430713252511437",
            "extra": "mean: 227.75882060000185 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4916630.42222681,
            "unit": "iter/sec",
            "range": "stddev: 6.092082111426226e-7",
            "extra": "mean: 203.39132985871393 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 222.15639321354362,
            "unit": "iter/sec",
            "range": "stddev: 0.0005335679567388689",
            "extra": "mean: 4.501333432429148 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5944017238236737,
            "unit": "iter/sec",
            "range": "stddev: 0.04337399230708723",
            "extra": "mean: 1.6823638962000131 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 83.13228197565071,
            "unit": "iter/sec",
            "range": "stddev: 0.0017768568696427335",
            "extra": "mean: 12.029021413040219 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 74.66745785072017,
            "unit": "iter/sec",
            "range": "stddev: 0.0016449658334295526",
            "extra": "mean: 13.392715230767092 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 144.0196168745223,
            "unit": "iter/sec",
            "range": "stddev: 0.000775159051847043",
            "extra": "mean: 6.943498543474492 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 221.44387487204511,
            "unit": "iter/sec",
            "range": "stddev: 0.000548954707330479",
            "extra": "mean: 4.515816933648858 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 117.77067561152485,
            "unit": "iter/sec",
            "range": "stddev: 0.0008101954351593749",
            "extra": "mean: 8.49107806172882 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3546.6239345148074,
            "unit": "iter/sec",
            "range": "stddev: 0.00010095828072265602",
            "extra": "mean: 281.95828440344746 usec\nrounds: 981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3307.580430235702,
            "unit": "iter/sec",
            "range": "stddev: 0.00024309313071126603",
            "extra": "mean: 302.33580742547167 usec\nrounds: 2882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1588030.1833302388,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013803787522926011",
            "extra": "mean: 629.7109529133207 nsec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 74.24301996461986,
            "unit": "iter/sec",
            "range": "stddev: 0.022976590502417887",
            "extra": "mean: 13.46927967742348 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 89.36793664556382,
            "unit": "iter/sec",
            "range": "stddev: 0.0014308285086670485",
            "extra": "mean: 11.189695516480736 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6005.725771877483,
            "unit": "iter/sec",
            "range": "stddev: 0.00011191951964775736",
            "extra": "mean: 166.50776908306696 usec\nrounds: 3642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3578.771588917036,
            "unit": "iter/sec",
            "range": "stddev: 0.00012239538063645256",
            "extra": "mean: 279.4254886500337 usec\nrounds: 925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 77.84215630861507,
            "unit": "iter/sec",
            "range": "stddev: 0.0011376189818111029",
            "extra": "mean: 12.846509493331268 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 54.020018368792535,
            "unit": "iter/sec",
            "range": "stddev: 0.0016550718895332473",
            "extra": "mean: 18.511656052632922 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8541761.517635241,
            "unit": "iter/sec",
            "range": "stddev: 1.9755018205305236e-7",
            "extra": "mean: 117.0718707067147 nsec\nrounds: 88496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.49624925119238283,
            "unit": "iter/sec",
            "range": "stddev: 0.06617124585866085",
            "extra": "mean: 2.0151163908000056 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.39573792923225,
            "unit": "iter/sec",
            "range": "stddev: 0.002213066151883055",
            "extra": "mean: 31.85145710714161 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 90.11084707599963,
            "unit": "iter/sec",
            "range": "stddev: 0.0010416849864021468",
            "extra": "mean: 11.09744312087754 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60833.32061550101,
            "unit": "iter/sec",
            "range": "stddev: 0.000016327339919346117",
            "extra": "mean: 16.438359600991248 usec\nrounds: 11738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1648836.387296298,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013603292562304092",
            "extra": "mean: 606.4883136402416 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 87.48413774317599,
            "unit": "iter/sec",
            "range": "stddev: 0.0010450366585112625",
            "extra": "mean: 11.430643609195346 msec\nrounds: 87"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1677194130926,
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
          "id": "37c42d365c28abb4a96684c93a0508318beaf3de",
          "message": "chore(deps): update clickhouse/clickhouse-server docker tag to v23.2.1.2537",
          "timestamp": "2023-02-23T18:08:22-05:00",
          "tree_id": "031c16ae4f71a864cfe37391336a897aa01b7a36",
          "url": "https://github.com/ibis-project/ibis/commit/37c42d365c28abb4a96684c93a0508318beaf3de"
        },
        "date": 1677194036340,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.3890994053603436,
            "unit": "iter/sec",
            "range": "stddev: 0.011617096885109417",
            "extra": "mean: 719.8908847999917 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 60.09673020758406,
            "unit": "iter/sec",
            "range": "stddev: 0.0011743661652244951",
            "extra": "mean: 16.639840413044674 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4704114369664986,
            "unit": "iter/sec",
            "range": "stddev: 0.018333722061880612",
            "extra": "mean: 2.1257986549999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 709.9365174194699,
            "unit": "iter/sec",
            "range": "stddev: 0.00007899235229506037",
            "extra": "mean: 1.4085766480006896 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 62.68460714749459,
            "unit": "iter/sec",
            "range": "stddev: 0.0010444432786476017",
            "extra": "mean: 15.95287975000045 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2638.18263918792,
            "unit": "iter/sec",
            "range": "stddev: 0.00009709664169895644",
            "extra": "mean: 379.04881381063825 usec\nrounds: 1622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 76.81308217681119,
            "unit": "iter/sec",
            "range": "stddev: 0.008412269607871812",
            "extra": "mean: 13.018615731343303 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.67235925373117,
            "unit": "iter/sec",
            "range": "stddev: 0.0004491598868051884",
            "extra": "mean: 18.98528970731765 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0131386396210693,
            "unit": "iter/sec",
            "range": "stddev: 0.014887819013206719",
            "extra": "mean: 987.0317456000066 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 54.11916789658081,
            "unit": "iter/sec",
            "range": "stddev: 0.0009441553684186893",
            "extra": "mean: 18.477741599999337 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 59.34207354054421,
            "unit": "iter/sec",
            "range": "stddev: 0.000630329269260465",
            "extra": "mean: 16.85145024999457 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 153.82761436876913,
            "unit": "iter/sec",
            "range": "stddev: 0.0010167702160791584",
            "extra": "mean: 6.500783387322849 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 109.41956456871812,
            "unit": "iter/sec",
            "range": "stddev: 0.0007595481861989111",
            "extra": "mean: 9.139133425923808 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 63.03950440001562,
            "unit": "iter/sec",
            "range": "stddev: 0.0010064031307584211",
            "extra": "mean: 15.863068872726611 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 98883.9470197269,
            "unit": "iter/sec",
            "range": "stddev: 0.000006241900560327664",
            "extra": "mean: 10.11286493044725 usec\nrounds: 30488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 167.6977972617279,
            "unit": "iter/sec",
            "range": "stddev: 0.0004348690913524356",
            "extra": "mean: 5.963107544217103 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2195.8351594555293,
            "unit": "iter/sec",
            "range": "stddev: 0.0005731061542951595",
            "extra": "mean: 455.4075909085799 usec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.48430464292752695,
            "unit": "iter/sec",
            "range": "stddev: 0.024681773217752556",
            "extra": "mean: 2.0648160504000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 303.9163313040174,
            "unit": "iter/sec",
            "range": "stddev: 0.0001755633011558039",
            "extra": "mean: 3.2903792820520312 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 62.81363677634102,
            "unit": "iter/sec",
            "range": "stddev: 0.0008395382828490915",
            "extra": "mean: 15.920109888887275 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 59.630266549454426,
            "unit": "iter/sec",
            "range": "stddev: 0.0010589799997819528",
            "extra": "mean: 16.77000721052704 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 6173.94000085679,
            "unit": "iter/sec",
            "range": "stddev: 0.00004052871216035498",
            "extra": "mean: 161.97112376557348 usec\nrounds: 3240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 150.5092436051732,
            "unit": "iter/sec",
            "range": "stddev: 0.0006158380799757739",
            "extra": "mean: 6.644110195804802 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 450.3730774972079,
            "unit": "iter/sec",
            "range": "stddev: 0.00025735355678732007",
            "extra": "mean: 2.2203813903734053 msec\nrounds: 374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 3993622.6980212424,
            "unit": "iter/sec",
            "range": "stddev: 7.029013187945468e-7",
            "extra": "mean: 250.39921785705133 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2378.88008327491,
            "unit": "iter/sec",
            "range": "stddev: 0.00010823347713378895",
            "extra": "mean: 420.36587175228254 usec\nrounds: 1193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 399.40120655149894,
            "unit": "iter/sec",
            "range": "stddev: 0.00014040439532675983",
            "extra": "mean: 2.503748069852312 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 62.49907743422291,
            "unit": "iter/sec",
            "range": "stddev: 0.0012423017086617774",
            "extra": "mean: 16.000236180325206 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4020794555500605,
            "unit": "iter/sec",
            "range": "stddev: 0.011765308561284004",
            "extra": "mean: 2.4870706180000184 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.20788625701522,
            "unit": "iter/sec",
            "range": "stddev: 0.0005934552299735428",
            "extra": "mean: 12.16428308196119 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 72.02358059884786,
            "unit": "iter/sec",
            "range": "stddev: 0.00037249813830663434",
            "extra": "mean: 13.884341651517346 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1204699.0379153483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015177026876785572",
            "extra": "mean: 830.0828410475312 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.481579561748934,
            "unit": "iter/sec",
            "range": "stddev: 0.0030073526368926753",
            "extra": "mean: 105.46765900000992 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2383.0877467690702,
            "unit": "iter/sec",
            "range": "stddev: 0.00008874317583882722",
            "extra": "mean: 419.6236589927394 usec\nrounds: 1390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.42551290579096,
            "unit": "iter/sec",
            "range": "stddev: 0.001957215426455742",
            "extra": "mean: 54.27257331250246 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 165.85323421428376,
            "unit": "iter/sec",
            "range": "stddev: 0.0003765057807561175",
            "extra": "mean: 6.029427190476079 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 457492.9004407125,
            "unit": "iter/sec",
            "range": "stddev: 0.000004809970833352398",
            "extra": "mean: 2.185826269733757 usec\nrounds: 18051"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7769.880759954762,
            "unit": "iter/sec",
            "range": "stddev: 0.000024407419169463986",
            "extra": "mean: 128.70210378953388 usec\nrounds: 4249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.40414239221149,
            "unit": "iter/sec",
            "range": "stddev: 0.0016208419193009965",
            "extra": "mean: 40.976649944443324 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1162327.1884593403,
            "unit": "iter/sec",
            "range": "stddev: 0.000008213325726070135",
            "extra": "mean: 860.3429481207402 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.10743872432501,
            "unit": "iter/sec",
            "range": "stddev: 0.0019310922888331468",
            "extra": "mean: 35.577770347839284 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 199.95525001491066,
            "unit": "iter/sec",
            "range": "stddev: 0.00020333854279303457",
            "extra": "mean: 5.001119000003401 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.48000534039349685,
            "unit": "iter/sec",
            "range": "stddev: 0.01840559900710593",
            "extra": "mean: 2.0833101547999946 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7516.366219390402,
            "unit": "iter/sec",
            "range": "stddev: 0.00003187912902945541",
            "extra": "mean: 133.0430118506257 usec\nrounds: 3122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2462.5322273774136,
            "unit": "iter/sec",
            "range": "stddev: 0.00009092993649551826",
            "extra": "mean: 406.0860560046338 usec\nrounds: 1482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.0598949122629735,
            "unit": "iter/sec",
            "range": "stddev: 0.0026125126951105147",
            "extra": "mean: 165.01936328571836 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4383.0319214515575,
            "unit": "iter/sec",
            "range": "stddev: 0.000040849908708727793",
            "extra": "mean: 228.1525706225802 usec\nrounds: 2839"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 113.03875099314632,
            "unit": "iter/sec",
            "range": "stddev: 0.0005178808298583166",
            "extra": "mean: 8.846523791302605 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 76.17357910640028,
            "unit": "iter/sec",
            "range": "stddev: 0.0009811066341577099",
            "extra": "mean: 13.127911432429693 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 59.44548412377767,
            "unit": "iter/sec",
            "range": "stddev: 0.0011759084685585917",
            "extra": "mean: 16.82213568852085 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3231803.4079527035,
            "unit": "iter/sec",
            "range": "stddev: 7.564197954135875e-7",
            "extra": "mean: 309.42476189636835 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8667889.833471414,
            "unit": "iter/sec",
            "range": "stddev: 6.752583816124952e-8",
            "extra": "mean: 115.36833291746329 nsec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.32907678864053,
            "unit": "iter/sec",
            "range": "stddev: 0.0011201292321875612",
            "extra": "mean: 19.482134933338735 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 78.45237317249766,
            "unit": "iter/sec",
            "range": "stddev: 0.0009817468574034943",
            "extra": "mean: 12.746587000003728 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 184.588742395771,
            "unit": "iter/sec",
            "range": "stddev: 0.0003995941378642848",
            "extra": "mean: 5.417448469614312 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 169.71188435586959,
            "unit": "iter/sec",
            "range": "stddev: 0.0004140974352801584",
            "extra": "mean: 5.892339265428787 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1185724.0606780497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025734517632580956",
            "extra": "mean: 843.366541308233 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 44956.127305948285,
            "unit": "iter/sec",
            "range": "stddev: 0.00005283573120605012",
            "extra": "mean: 22.243908893542237 usec\nrounds: 10142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 167.0870990575133,
            "unit": "iter/sec",
            "range": "stddev: 0.0005026699020562341",
            "extra": "mean: 5.984902518750346 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 79.62554415727207,
            "unit": "iter/sec",
            "range": "stddev: 0.0004666303341745505",
            "extra": "mean: 12.558783874994361 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 22.87269594855876,
            "unit": "iter/sec",
            "range": "stddev: 0.03246085731583614",
            "extra": "mean: 43.7202506538374 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2637.041080012779,
            "unit": "iter/sec",
            "range": "stddev: 0.00009078985948706149",
            "extra": "mean: 379.21290175546073 usec\nrounds: 1425"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 81.95589694245209,
            "unit": "iter/sec",
            "range": "stddev: 0.0010000184541495863",
            "extra": "mean: 12.201684531647325 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 96.53078413602803,
            "unit": "iter/sec",
            "range": "stddev: 0.00039597098095706123",
            "extra": "mean: 10.35938958696153 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 81.59689022558614,
            "unit": "iter/sec",
            "range": "stddev: 0.0009946507518198153",
            "extra": "mean: 12.255369012659168 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 299406.2506463482,
            "unit": "iter/sec",
            "range": "stddev: 0.000002418852302941879",
            "extra": "mean: 3.3399436312409425 usec\nrounds: 1366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3468693.2796592237,
            "unit": "iter/sec",
            "range": "stddev: 2.6304630829637817e-7",
            "extra": "mean: 288.2930024005907 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 80.41064043854904,
            "unit": "iter/sec",
            "range": "stddev: 0.0012243735501338122",
            "extra": "mean: 12.436165096386892 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2663.358656935335,
            "unit": "iter/sec",
            "range": "stddev: 0.00010685716189369971",
            "extra": "mean: 375.46576665370213 usec\nrounds: 2507"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08193318642092712,
            "unit": "iter/sec",
            "range": "stddev: 0.10853238345384653",
            "extra": "mean: 12.20506663640001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1338296.6962465208,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014858620288663546",
            "extra": "mean: 747.2184626956555 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 34.647347597253344,
            "unit": "iter/sec",
            "range": "stddev: 0.0010569924649585804",
            "extra": "mean: 28.862238218756886 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1042.480404171304,
            "unit": "iter/sec",
            "range": "stddev: 0.00010245664642488948",
            "extra": "mean: 959.2506449029391 usec\nrounds: 873"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 174.55314684380036,
            "unit": "iter/sec",
            "range": "stddev: 0.0003838097114213749",
            "extra": "mean: 5.728914190787144 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 115.83243548169008,
            "unit": "iter/sec",
            "range": "stddev: 0.00032959432427084407",
            "extra": "mean: 8.633160442854303 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 209.13617428971676,
            "unit": "iter/sec",
            "range": "stddev: 0.00019783430041280079",
            "extra": "mean: 4.781573553194571 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 47.27931540328698,
            "unit": "iter/sec",
            "range": "stddev: 0.00037936673850845996",
            "extra": "mean: 21.15089847367962 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 84.51879626083672,
            "unit": "iter/sec",
            "range": "stddev: 0.0003928524866590683",
            "extra": "mean: 11.831687674702104 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.432233135715395,
            "unit": "iter/sec",
            "range": "stddev: 0.0076790921364181496",
            "extra": "mean: 291.35549959999025 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 27.40270711465549,
            "unit": "iter/sec",
            "range": "stddev: 0.000530115188754211",
            "extra": "mean: 36.49274488888658 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2718.0386131019263,
            "unit": "iter/sec",
            "range": "stddev: 0.00009989608142046281",
            "extra": "mean: 367.9123597360388 usec\nrounds: 1818"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 83.6205527660933,
            "unit": "iter/sec",
            "range": "stddev: 0.0009652494304675932",
            "extra": "mean: 11.958782463412307 msec\nrounds: 82"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1683118108939,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "7edc1524521151de801fcc3659d35c28d1bbc490",
          "message": "chore: use upstream testing data",
          "timestamp": "2023-05-03T05:25:30-07:00",
          "tree_id": "aad6817720455928670f5643f325a1496994cdcb",
          "url": "https://github.com/ibis-project/ibis/commit/7edc1524521151de801fcc3659d35c28d1bbc490"
        },
        "date": 1683118012184,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 75.1160350480237,
            "unit": "iter/sec",
            "range": "stddev: 0.007567120184505134",
            "extra": "mean: 13.312736746031298 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1633.0924630767677,
            "unit": "iter/sec",
            "range": "stddev: 0.00017874614464887756",
            "extra": "mean: 612.3352000020788 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9011.520222028674,
            "unit": "iter/sec",
            "range": "stddev: 0.00009827942419223877",
            "extra": "mean: 110.96906796652341 usec\nrounds: 3899"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.000116660404431,
            "unit": "iter/sec",
            "range": "stddev: 0.01789381752599712",
            "extra": "mean: 499.9708365999993 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1656.2734711153155,
            "unit": "iter/sec",
            "range": "stddev: 0.00018912533473678777",
            "extra": "mean: 603.7650288068742 usec\nrounds: 486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 75.08015647389685,
            "unit": "iter/sec",
            "range": "stddev: 0.0017702363726578812",
            "extra": "mean: 13.319098507042542 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 41.67224924636451,
            "unit": "iter/sec",
            "range": "stddev: 0.0017912027676338454",
            "extra": "mean: 23.996784864863997 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 103.09705496087076,
            "unit": "iter/sec",
            "range": "stddev: 0.0009979491608144223",
            "extra": "mean: 9.699598115383004 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 215.54155350088823,
            "unit": "iter/sec",
            "range": "stddev: 0.000533290325377052",
            "extra": "mean: 4.639476628787865 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 199.58561799184008,
            "unit": "iter/sec",
            "range": "stddev: 0.0009965586535383708",
            "extra": "mean: 5.010381058824009 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 69.52364314978557,
            "unit": "iter/sec",
            "range": "stddev: 0.0022411420555865603",
            "extra": "mean: 14.383596064514986 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 23.202972437256452,
            "unit": "iter/sec",
            "range": "stddev: 0.004419752853129672",
            "extra": "mean: 43.09792647058978 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.012024055508753,
            "unit": "iter/sec",
            "range": "stddev: 0.025899502147430132",
            "extra": "mean: 32.24555734285803 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5797.886670351234,
            "unit": "iter/sec",
            "range": "stddev: 0.000036061374924284584",
            "extra": "mean: 172.47663792976834 usec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 137.2255998497042,
            "unit": "iter/sec",
            "range": "stddev: 0.004604951556587959",
            "extra": "mean: 7.28727002173972 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.022155642751244,
            "unit": "iter/sec",
            "range": "stddev: 0.004053193003490407",
            "extra": "mean: 31.22837860000118 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 205.82092888827884,
            "unit": "iter/sec",
            "range": "stddev: 0.0008515523825589137",
            "extra": "mean: 4.858592395833601 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1618730.7949302644,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011376229085400934",
            "extra": "mean: 617.7679470433998 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 87.24454295918586,
            "unit": "iter/sec",
            "range": "stddev: 0.0005829526990089726",
            "extra": "mean: 11.462034943180493 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10757.252528637813,
            "unit": "iter/sec",
            "range": "stddev: 0.00004122532253916928",
            "extra": "mean: 92.9605396301531 usec\nrounds: 5791"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9392173.107635807,
            "unit": "iter/sec",
            "range": "stddev: 1.629481494255943e-7",
            "extra": "mean: 106.47163212810301 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 207.37910231430448,
            "unit": "iter/sec",
            "range": "stddev: 0.0004319228721267598",
            "extra": "mean: 4.822086646341041 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 892.2564630608593,
            "unit": "iter/sec",
            "range": "stddev: 0.00015587620079488487",
            "extra": "mean: 1.1207539999985314 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1697.1601243524613,
            "unit": "iter/sec",
            "range": "stddev: 0.00015826700059935308",
            "extra": "mean: 589.2195943394219 usec\nrounds: 1060"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 66.80496898565728,
            "unit": "iter/sec",
            "range": "stddev: 0.0005982006656416202",
            "extra": "mean: 14.968946400000505 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4482079.765888162,
            "unit": "iter/sec",
            "range": "stddev: 3.576410860195126e-7",
            "extra": "mean: 223.1107102577112 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 65.72059586679339,
            "unit": "iter/sec",
            "range": "stddev: 0.017856497472539156",
            "extra": "mean: 15.215930208954015 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1349.359566656761,
            "unit": "iter/sec",
            "range": "stddev: 0.00020327607637969926",
            "extra": "mean: 741.0923112789341 usec\nrounds: 1330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 187.33250842479598,
            "unit": "iter/sec",
            "range": "stddev: 0.0009663078491899009",
            "extra": "mean: 5.338101797753093 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 80.04436298728906,
            "unit": "iter/sec",
            "range": "stddev: 0.001432233788552934",
            "extra": "mean: 12.493072125001467 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.87562011612419,
            "unit": "iter/sec",
            "range": "stddev: 0.001829103274764753",
            "extra": "mean: 19.655780071426914 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 77.06757338653883,
            "unit": "iter/sec",
            "range": "stddev: 0.0014564136846465842",
            "extra": "mean: 12.975625883332498 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7845.437119746555,
            "unit": "iter/sec",
            "range": "stddev: 0.00009849582551250709",
            "extra": "mean: 127.46262378205189 usec\nrounds: 4104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.68303601361941,
            "unit": "iter/sec",
            "range": "stddev: 0.0015601524356449253",
            "extra": "mean: 12.872823351351506 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.575277254724845,
            "unit": "iter/sec",
            "range": "stddev: 0.0022812628376700297",
            "extra": "mean: 24.645549399999567 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 87.16457278812614,
            "unit": "iter/sec",
            "range": "stddev: 0.0004058517353052267",
            "extra": "mean: 11.47255092307667 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 76.72241515125029,
            "unit": "iter/sec",
            "range": "stddev: 0.0013174115005686166",
            "extra": "mean: 13.034000533333105 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6034235823229435,
            "unit": "iter/sec",
            "range": "stddev: 0.02281384218499873",
            "extra": "mean: 1.6572106714000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 129.95020601382845,
            "unit": "iter/sec",
            "range": "stddev: 0.000544576746943722",
            "extra": "mean: 7.695255211012029 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 74.39164195663292,
            "unit": "iter/sec",
            "range": "stddev: 0.0011793653023039173",
            "extra": "mean: 13.442370321426113 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 77.56938120337682,
            "unit": "iter/sec",
            "range": "stddev: 0.0014378727844533556",
            "extra": "mean: 12.891684637500589 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 74.86715003486363,
            "unit": "iter/sec",
            "range": "stddev: 0.0013849049357390637",
            "extra": "mean: 13.356993014083304 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1644.2425654173028,
            "unit": "iter/sec",
            "range": "stddev: 0.00017949534692720225",
            "extra": "mean: 608.1827712240278 usec\nrounds: 1119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 82.4369064127457,
            "unit": "iter/sec",
            "range": "stddev: 0.0013118959333820622",
            "extra": "mean: 12.130489164564143 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 78.88433464793184,
            "unit": "iter/sec",
            "range": "stddev: 0.0013709466825113637",
            "extra": "mean: 12.676788166663172 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 82.72363459933855,
            "unit": "iter/sec",
            "range": "stddev: 0.000976551814917394",
            "extra": "mean: 12.088443705881316 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.074330247182441,
            "unit": "iter/sec",
            "range": "stddev: 0.041926371625014947",
            "extra": "mean: 930.8124784000256 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 79.4284857032639,
            "unit": "iter/sec",
            "range": "stddev: 0.001067590600511638",
            "extra": "mean: 12.589941645568949 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5449826991759673,
            "unit": "iter/sec",
            "range": "stddev: 0.029810793457671497",
            "extra": "mean: 1.8349206342000115 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 81.4079206813279,
            "unit": "iter/sec",
            "range": "stddev: 0.0015597476574659482",
            "extra": "mean: 12.28381700000065 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 870228.6699871403,
            "unit": "iter/sec",
            "range": "stddev: 0.000003561013715259195",
            "extra": "mean: 1.1491232528741868 usec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 151.94938484516737,
            "unit": "iter/sec",
            "range": "stddev: 0.0007492579152385353",
            "extra": "mean: 6.581138851065274 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1061621206433687,
            "unit": "iter/sec",
            "range": "stddev: 0.026398789703909326",
            "extra": "mean: 904.0266171999974 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.15636351252198,
            "unit": "iter/sec",
            "range": "stddev: 0.0023615897129515714",
            "extra": "mean: 29.277121366664005 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 621.8607752866652,
            "unit": "iter/sec",
            "range": "stddev: 0.00032455036325587026",
            "extra": "mean: 1.608076984014662 msec\nrounds: 563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11202428584243378,
            "unit": "iter/sec",
            "range": "stddev: 0.07536052463349338",
            "extra": "mean: 8.926635795799996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.047409014971777,
            "unit": "iter/sec",
            "range": "stddev: 0.0024553992853711313",
            "extra": "mean: 49.88175775000059 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 517.4649621151362,
            "unit": "iter/sec",
            "range": "stddev: 0.00029822643131681875",
            "extra": "mean: 1.9324979915789922 msec\nrounds: 475"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 205.84072533020853,
            "unit": "iter/sec",
            "range": "stddev: 0.0007351024840624784",
            "extra": "mean: 4.858125127550953 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4661173.119063122,
            "unit": "iter/sec",
            "range": "stddev: 3.085331648356934e-7",
            "extra": "mean: 214.53826632393464 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1490021.2468519444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052864124673272625",
            "extra": "mean: 671.1313695108435 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1664.8171077120278,
            "unit": "iter/sec",
            "range": "stddev: 0.0001838154270844877",
            "extra": "mean: 600.6665809521314 usec\nrounds: 1155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 173.78960602533573,
            "unit": "iter/sec",
            "range": "stddev: 0.004491241468613579",
            "extra": "mean: 5.754084049504181 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3123.1313163750665,
            "unit": "iter/sec",
            "range": "stddev: 0.00010135657720788393",
            "extra": "mean: 320.1914676968091 usec\nrounds: 1424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 313.46627373549495,
            "unit": "iter/sec",
            "range": "stddev: 0.000510077137315284",
            "extra": "mean: 3.190135857625969 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4289971.678594141,
            "unit": "iter/sec",
            "range": "stddev: 8.201407648267652e-7",
            "extra": "mean: 233.10177197424048 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 245.03799501485685,
            "unit": "iter/sec",
            "range": "stddev: 0.0007762150937563277",
            "extra": "mean: 4.080999764707384 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1603938.8911114791,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028665685206147883",
            "extra": "mean: 623.4651491660206 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 193.57429368712587,
            "unit": "iter/sec",
            "range": "stddev: 0.0009956515373428807",
            "extra": "mean: 5.165975197183465 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1628.6028200490673,
            "unit": "iter/sec",
            "range": "stddev: 0.00015314013140105246",
            "extra": "mean: 614.023252133305 usec\nrounds: 1289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.78688111125592,
            "unit": "iter/sec",
            "range": "stddev: 0.0007604675769510834",
            "extra": "mean: 10.662472065935713 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5592904.151094936,
            "unit": "iter/sec",
            "range": "stddev: 2.652382572026953e-7",
            "extra": "mean: 178.79798633853179 nsec\nrounds: 59881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 152.22627489342796,
            "unit": "iter/sec",
            "range": "stddev: 0.0004218372727005037",
            "extra": "mean: 6.569168172183741 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1465610.2385985372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016229430474005538",
            "extra": "mean: 682.3096439038469 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.8405579712486855,
            "unit": "iter/sec",
            "range": "stddev: 0.00491787276948428",
            "extra": "mean: 146.18690524999067 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.775878723256046,
            "unit": "iter/sec",
            "range": "stddev: 0.003510835055489603",
            "extra": "mean: 34.751327999996796 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 125090.13900433709,
            "unit": "iter/sec",
            "range": "stddev: 0.000013697413584340831",
            "extra": "mean: 7.994235260745279 usec\nrounds: 35212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.00057106708098,
            "unit": "iter/sec",
            "range": "stddev: 0.0009666810008523743",
            "extra": "mean: 9.999942893618018 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1721.2088069063263,
            "unit": "iter/sec",
            "range": "stddev: 0.00020264680112358531",
            "extra": "mean: 580.9870342212485 usec\nrounds: 1315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 77.64549623077585,
            "unit": "iter/sec",
            "range": "stddev: 0.001437373393628474",
            "extra": "mean: 12.87904706060255 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 409.4836100450243,
            "unit": "iter/sec",
            "range": "stddev: 0.0002979606661088884",
            "extra": "mean: 2.442100185377496 msec\nrounds: 383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1604.8066804910766,
            "unit": "iter/sec",
            "range": "stddev: 0.0001514515083394731",
            "extra": "mean: 623.1280142066685 usec\nrounds: 1267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3559986.7642169367,
            "unit": "iter/sec",
            "range": "stddev: 6.595231895221569e-7",
            "extra": "mean: 280.8999207669564 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 136.0673869954322,
            "unit": "iter/sec",
            "range": "stddev: 0.020842789180817424",
            "extra": "mean: 7.349299652778442 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5879108902833381,
            "unit": "iter/sec",
            "range": "stddev: 0.04554060688698009",
            "extra": "mean: 1.700938044399993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.478862057349492,
            "unit": "iter/sec",
            "range": "stddev: 0.0024867798498566726",
            "extra": "mean: 69.06620120000375 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 124.33907236795002,
            "unit": "iter/sec",
            "range": "stddev: 0.0008077411632506545",
            "extra": "mean: 8.042524211864418 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 134.60320512262368,
            "unit": "iter/sec",
            "range": "stddev: 0.0007391039958560569",
            "extra": "mean: 7.429243598538377 msec\nrounds: 137"
          }
        ]
      }
    ]
  }
}
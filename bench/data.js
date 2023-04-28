window.BENCHMARK_DATA = {
  "lastUpdate": 1682703930658,
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
          "id": "dc3e694dec2222a890612b7e3445d3bf53d605d0",
          "message": "docs(guides): add brief installation instructions at top of notebooks\n\nWe got a bit of feedback from a user who landed on the Ibis for Pandas\npage via a deep link, and then ran into an issue because they tried to\ninstall `ibis` from PyPI.",
          "timestamp": "2023-04-28T13:40:32-04:00",
          "tree_id": "a0d0f0060d4238ab891f291833c2245249dedcef",
          "url": "https://github.com/ibis-project/ibis/commit/dc3e694dec2222a890612b7e3445d3bf53d605d0"
        },
        "date": 1682703850769,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.2568925694565,
            "unit": "iter/sec",
            "range": "stddev: 0.009381227846602828",
            "extra": "mean: 10.609303709679534 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1727125800900661,
            "unit": "iter/sec",
            "range": "stddev: 0.052472815586158614",
            "extra": "mean: 5.789966193999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10491.942656431933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027899796055004974",
            "extra": "mean: 95.31123384352131 usec\nrounds: 4704"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.58239383344088,
            "unit": "iter/sec",
            "range": "stddev: 0.00019386897061931537",
            "extra": "mean: 9.942097835292596 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 204.8745869315266,
            "unit": "iter/sec",
            "range": "stddev: 0.000026560909651190036",
            "extra": "mean: 4.881034856383731 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1885323.3673935556,
            "unit": "iter/sec",
            "range": "stddev: 9.951243508204854e-8",
            "extra": "mean: 530.4129876576516 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2257.2197288123125,
            "unit": "iter/sec",
            "range": "stddev: 0.00010587106367663455",
            "extra": "mean: 443.0228866226385 usec\nrounds: 1226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 97.66624256950668,
            "unit": "iter/sec",
            "range": "stddev: 0.0007557617643792838",
            "extra": "mean: 10.2389523103474 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.346850826505204,
            "unit": "iter/sec",
            "range": "stddev: 0.01820340962981169",
            "extra": "mean: 26.0777607142854 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1173.4459589696453,
            "unit": "iter/sec",
            "range": "stddev: 0.00003191137240670866",
            "extra": "mean: 852.1909273760326 usec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.11904539340682,
            "unit": "iter/sec",
            "range": "stddev: 0.00014075907163849346",
            "extra": "mean: 6.4053683999929945 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1798609.1164977388,
            "unit": "iter/sec",
            "range": "stddev: 1.2278133065107095e-7",
            "extra": "mean: 555.9851725577847 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1970002.3722061645,
            "unit": "iter/sec",
            "range": "stddev: 6.496068013857245e-8",
            "extra": "mean: 507.6136019471494 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.287005626307334,
            "unit": "iter/sec",
            "range": "stddev: 0.0019895871285198806",
            "extra": "mean: 26.118522032260763 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 113.59528682047232,
            "unit": "iter/sec",
            "range": "stddev: 0.00010151859254964168",
            "extra": "mean: 8.803182138889396 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.06718733559852,
            "unit": "iter/sec",
            "range": "stddev: 0.0003779151998004525",
            "extra": "mean: 10.744925560004503 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150107.07561071197,
            "unit": "iter/sec",
            "range": "stddev: 4.814331397619214e-7",
            "extra": "mean: 6.6619111453040505 usec\nrounds: 34247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4475.8565228394755,
            "unit": "iter/sec",
            "range": "stddev: 0.00003692426830078536",
            "extra": "mean: 223.42092399458815 usec\nrounds: 921"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.4427563119114,
            "unit": "iter/sec",
            "range": "stddev: 0.000034697295716165886",
            "extra": "mean: 1.463180333341067 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.053433906899254,
            "unit": "iter/sec",
            "range": "stddev: 0.0008321621091547164",
            "extra": "mean: 39.91468809090551 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.03602901198163,
            "unit": "iter/sec",
            "range": "stddev: 0.020997549461744393",
            "extra": "mean: 25.617359790696494 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 157.9967509917702,
            "unit": "iter/sec",
            "range": "stddev: 0.0037653539334330383",
            "extra": "mean: 6.329244074468901 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 81.49832359175618,
            "unit": "iter/sec",
            "range": "stddev: 0.021230146698181615",
            "extra": "mean: 12.270191041097112 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2748670.6340707946,
            "unit": "iter/sec",
            "range": "stddev: 6.191591533254809e-8",
            "extra": "mean: 363.8122325767403 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 280.00101087714296,
            "unit": "iter/sec",
            "range": "stddev: 0.000382348933577337",
            "extra": "mean: 3.571415677634012 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.068421993177516,
            "unit": "iter/sec",
            "range": "stddev: 0.0009308966393157895",
            "extra": "mean: 19.58157234883026 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2181.9191012106435,
            "unit": "iter/sec",
            "range": "stddev: 0.00009020757721247127",
            "extra": "mean: 458.3121342331837 usec\nrounds: 1259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.5541337201074,
            "unit": "iter/sec",
            "range": "stddev: 0.0008851453875043386",
            "extra": "mean: 9.944891999999738 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.94152123861973,
            "unit": "iter/sec",
            "range": "stddev: 0.0009535235799348601",
            "extra": "mean: 9.906726069999081 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8409.56563016651,
            "unit": "iter/sec",
            "range": "stddev: 0.00007286278490548087",
            "extra": "mean: 118.91220593045064 usec\nrounds: 1214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 91.74519852852855,
            "unit": "iter/sec",
            "range": "stddev: 0.017550085320765494",
            "extra": "mean: 10.899752968424236 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.59080977915657,
            "unit": "iter/sec",
            "range": "stddev: 0.0009228872083748907",
            "extra": "mean: 10.352951821051933 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 757.263001519301,
            "unit": "iter/sec",
            "range": "stddev: 0.00013366015151066517",
            "extra": "mean: 1.320545171220163 msec\nrounds: 549"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.31035874186459,
            "unit": "iter/sec",
            "range": "stddev: 0.0008809741410913288",
            "extra": "mean: 9.679571459998897 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4481884.905612007,
            "unit": "iter/sec",
            "range": "stddev: 1.2946257004783397e-8",
            "extra": "mean: 223.12041051028646 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.64986305735418,
            "unit": "iter/sec",
            "range": "stddev: 0.0009925497652615374",
            "extra": "mean: 10.911091044120854 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.55176062156477,
            "unit": "iter/sec",
            "range": "stddev: 0.0008209940238854328",
            "extra": "mean: 9.945126707065691 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.412414516694635,
            "unit": "iter/sec",
            "range": "stddev: 0.0019879295175211824",
            "extra": "mean: 414.52246000001196 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1674.1343654647085,
            "unit": "iter/sec",
            "range": "stddev: 0.004792114410496065",
            "extra": "mean: 597.3236202713148 usec\nrounds: 1322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.4795556515863,
            "unit": "iter/sec",
            "range": "stddev: 0.000033069167119766625",
            "extra": "mean: 1.8366162505464252 msec\nrounds: 459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2121.360794275237,
            "unit": "iter/sec",
            "range": "stddev: 0.00009376329829889958",
            "extra": "mean: 471.39553191452757 usec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 286.61411460841936,
            "unit": "iter/sec",
            "range": "stddev: 0.000273463292923428",
            "extra": "mean: 3.489011702603096 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6112649.257834309,
            "unit": "iter/sec",
            "range": "stddev: 1.0023018297746034e-8",
            "extra": "mean: 163.5951872613761 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3448915023332353,
            "unit": "iter/sec",
            "range": "stddev: 0.002884687628024246",
            "extra": "mean: 743.5544043999926 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.10020853421902,
            "unit": "iter/sec",
            "range": "stddev: 0.0010994659549462575",
            "extra": "mean: 18.148751640004548 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6094246.197197145,
            "unit": "iter/sec",
            "range": "stddev: 6.104182683373528e-9",
            "extra": "mean: 164.08920277289303 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 237.7637129963746,
            "unit": "iter/sec",
            "range": "stddev: 0.0037131069436681682",
            "extra": "mean: 4.205856257027951 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.57638916437482,
            "unit": "iter/sec",
            "range": "stddev: 0.0009724620467363122",
            "extra": "mean: 10.462835107530307 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.00413339868408,
            "unit": "iter/sec",
            "range": "stddev: 0.00007966297118375822",
            "extra": "mean: 9.523434627122327 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1766.9887930928294,
            "unit": "iter/sec",
            "range": "stddev: 0.000005573047841685623",
            "extra": "mean: 565.9345457701862 usec\nrounds: 1442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13897.999924452217,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015843349425108677",
            "extra": "mean: 71.95279935500608 usec\nrounds: 7441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.19369850011265,
            "unit": "iter/sec",
            "range": "stddev: 0.00014087100426977034",
            "extra": "mean: 5.285588304091452 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 284.46007555840845,
            "unit": "iter/sec",
            "range": "stddev: 0.00026957649793700337",
            "extra": "mean: 3.515431816000728 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.85823384912678,
            "unit": "iter/sec",
            "range": "stddev: 0.0008951796926888517",
            "extra": "mean: 9.446596298075768 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8380279766736719,
            "unit": "iter/sec",
            "range": "stddev: 0.006224845491281811",
            "extra": "mean: 1.193277584800012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2183.1833981899194,
            "unit": "iter/sec",
            "range": "stddev: 0.0000976728068193779",
            "extra": "mean: 458.04672242794686 usec\nrounds: 1351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2094.0384838965865,
            "unit": "iter/sec",
            "range": "stddev: 0.0000953886663492892",
            "extra": "mean: 477.54614238951336 usec\nrounds: 1222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 176.86380288577135,
            "unit": "iter/sec",
            "range": "stddev: 0.00009164126880814684",
            "extra": "mean: 5.654068179489823 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.56231120415967,
            "unit": "iter/sec",
            "range": "stddev: 0.00006873281854992034",
            "extra": "mean: 6.040021987654371 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.786796038380665,
            "unit": "iter/sec",
            "range": "stddev: 0.00044349818832025383",
            "extra": "mean: 18.591923551022255 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8506719234221688,
            "unit": "iter/sec",
            "range": "stddev: 0.004001136030693094",
            "extra": "mean: 1.175541325000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 110.31771695051047,
            "unit": "iter/sec",
            "range": "stddev: 0.01581286901100751",
            "extra": "mean: 9.064727114037439 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 257.8400682540778,
            "unit": "iter/sec",
            "range": "stddev: 0.00017676881868435403",
            "extra": "mean: 3.8783731588784396 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 129.17552382980898,
            "unit": "iter/sec",
            "range": "stddev: 0.00006593416986566762",
            "extra": "mean: 7.741404643479655 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.37867609732174,
            "unit": "iter/sec",
            "range": "stddev: 0.0009005722652218536",
            "extra": "mean: 9.96227524489817 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12391.660350370405,
            "unit": "iter/sec",
            "range": "stddev: 0.000021703483970678666",
            "extra": "mean: 80.69943588875952 usec\nrounds: 5818"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.35287552663738,
            "unit": "iter/sec",
            "range": "stddev: 0.0009112319362020093",
            "extra": "mean: 9.964836530614042 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.990565577560243,
            "unit": "iter/sec",
            "range": "stddev: 0.0005090089752611194",
            "extra": "mean: 33.3438193225748 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 274.0339403688203,
            "unit": "iter/sec",
            "range": "stddev: 0.00035729750950635086",
            "extra": "mean: 3.6491830123455045 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2132.6096293189566,
            "unit": "iter/sec",
            "range": "stddev: 0.00008761397343406593",
            "extra": "mean: 468.90907095798275 usec\nrounds: 1212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1040077.3349776994,
            "unit": "iter/sec",
            "range": "stddev: 1.4133796988163465e-7",
            "extra": "mean: 961.46696632077 nsec\nrounds: 76331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.62820277108649,
            "unit": "iter/sec",
            "range": "stddev: 0.0008291445461721576",
            "extra": "mean: 9.937571897958312 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 267.7025583664575,
            "unit": "iter/sec",
            "range": "stddev: 0.0003666357532013235",
            "extra": "mean: 3.7354891417627094 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7696095008149997,
            "unit": "iter/sec",
            "range": "stddev: 0.0036198748403259485",
            "extra": "mean: 1.2993602586000066 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6943008.264918737,
            "unit": "iter/sec",
            "range": "stddev: 7.993539307946275e-9",
            "extra": "mean: 144.02978677880478 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.513537280089379,
            "unit": "iter/sec",
            "range": "stddev: 0.000972552635466202",
            "extra": "mean: 117.45998955554013 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6062982677510047,
            "unit": "iter/sec",
            "range": "stddev: 0.013201818041934887",
            "extra": "mean: 622.549385800005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5584196.830251589,
            "unit": "iter/sec",
            "range": "stddev: 1.078198597508554e-8",
            "extra": "mean: 179.07678228374726 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.48934546998042,
            "unit": "iter/sec",
            "range": "stddev: 0.0008502048111436136",
            "extra": "mean: 9.570353757142616 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 280.23221228492247,
            "unit": "iter/sec",
            "range": "stddev: 0.0002564064473412308",
            "extra": "mean: 3.5684691343879584 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.36169971347634,
            "unit": "iter/sec",
            "range": "stddev: 0.0009504919492142241",
            "extra": "mean: 9.963960383840751 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.82474678015996,
            "unit": "iter/sec",
            "range": "stddev: 0.00030691005117617585",
            "extra": "mean: 3.612393803774158 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.287248451316053,
            "unit": "iter/sec",
            "range": "stddev: 0.00006752169034595214",
            "extra": "mean: 51.84772740000483 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2157.8441223734976,
            "unit": "iter/sec",
            "range": "stddev: 0.00008837508397477572",
            "extra": "mean: 463.42550401650914 usec\nrounds: 1369"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11173099.871372813,
            "unit": "iter/sec",
            "range": "stddev: 3.4374773485583644e-9",
            "extra": "mean: 89.50067676049228 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 314.41357367348996,
            "unit": "iter/sec",
            "range": "stddev: 0.00010392379129197312",
            "extra": "mean: 3.180524264001633 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 422.6379020860884,
            "unit": "iter/sec",
            "range": "stddev: 0.00009219995439457554",
            "extra": "mean: 2.3660916237377756 msec\nrounds: 396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.51958782152813,
            "unit": "iter/sec",
            "range": "stddev: 0.00042016017392305433",
            "extra": "mean: 21.496321159088694 msec\nrounds: 44"
          }
        ]
      }
    ]
  }
}